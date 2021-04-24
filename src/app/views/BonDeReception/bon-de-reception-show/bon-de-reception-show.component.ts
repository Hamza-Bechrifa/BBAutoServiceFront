import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { BonDeReceptionService } from '../../../services/bon-de-reception.service';
import { FournisseurService } from '../../../services/fournisseur.service';

@Component({
  selector: 'app-bon-de-reception-show',
  templateUrl: './bon-de-reception-show.component.html',
  styleUrls: ['./bon-de-reception-show.component.css']
})
export class BonDeReceptionShowComponent implements OnInit {
  obj: Object;
  detaille: any[]
  fournisseur: any
  id:any
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fournisseurService: FournisseurService,
    private articleService: ArticleService,
    private bonDeReceptionService: BonDeReceptionService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bonDeReceptionService.Get(this.id).subscribe(
      data => {
        this.obj = data
        this.fournisseurService.Get(data['fournisseur']).subscribe(
          data => {
            this.fournisseur = data
          },
          err => {
            alert(err.error)
          }

        )

      },
      err => {
        alert(err.error)
      }
    )
    this.getDetailles(this.id);
  }
  getDetailles(id) {
    this.bonDeReceptionService.Getdetaille(id).subscribe(
      (data: any[]) => {
        this.detaille = data;
        this.getArticleReferenceAndDesignation();
      },
      (err) => {
        console.log(err.message);
        alert(err.message)
      });
  }

  getArticleReferenceAndDesignation() {
    this.detaille.forEach(
      element => {
        this.articleService.articlesGet(element['article']).subscribe(
          data => {
            element['reference'] = data['reference'];
            element['designation'] = data['designation'];
          }
        )

      }
    )
  }
  edit() {
    this.router.navigate(['/BonDeReception/edit/' + this.id]);
  }
  PrintElem(elem) {
    var mywindow = window.open('', 'PRINT', 'height=800,width=1200');

    mywindow.document.write('<html><head><title>' + "Print Document" + '</title>');
    mywindow.document.write('<style>@media print {   body{ -webkit - print - color - adjust: exact; }   div.divFooter {position: fixed; bottom: 0;     }    }    .no-print, .no-print * { display: none!important;   }</style>');
    mywindow.document.write('</head><body onload="window.print();">');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
  }

}
