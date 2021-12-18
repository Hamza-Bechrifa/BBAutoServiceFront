import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { ClientService } from '../../../services/client.service';
import { DevisClientService } from '../../../services/devis-client.service';
import { VoitureService } from '../../../services/Voiture.service';

@Component({
  selector: 'app-devis-client-show',
  templateUrl: './devis-client-show.component.html',
  styleUrls: ['./devis-client-show.component.scss']
})
export class DevisClientShowComponent implements OnInit {
  public id: string;
  obj: Object;
  detaille: any[];
  clientList: any[];
  client: any;
  voiture: any;
  totalEnLettres: any;
  constructor(private router: Router, private route: ActivatedRoute,
    private ordreDeReparationService: DevisClientService,
    private articleService: ArticleService,
    private clientService: ClientService,
    private voitureService: VoitureService
  ) { }

  ngOnInit() {

    this.clientService.clientsList().subscribe((data: any) =>
      this.clientList = data
    )
    this.id = this.route.snapshot.paramMap.get('id');
    this.ordreDeReparationService.Get(this.id).subscribe(
      data => {
        this.obj = data;
        this.getClient();
        this.getVoiture();
        let n: number;
        n = data["totalTtc"].toFixed(3) * 1000
        let millims = n % 1000;
        var dinars = Math.floor(n / 1000)
        let dinarsString = this.articleService.NumberToLetter(dinars)
        let millimsString = this.articleService.NumberToLetter(millims)
        this.totalEnLettres = dinarsString + " dinars " + millimsString + " millimes";
      },
      (err) => {
        console.log(err);
        alert(err.message)
      });
    this.ordreDeReparationService.Getdetaille(this.id).subscribe(
      (data: any[]) => {
        console.log(data);
        this.detaille = data;
        this.getArticleReferenceAndDesignation();
      },
      (err) => {
        console.log(err.message);
        alert(err.message)
      });
  }

  edit() {
    this.router.navigate(['/ordreDeReparation/edit/' + this.id]);
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
  getClient() {

    this.clientService.clientsGet(this.obj['client']).subscribe(
      data =>
        this.client = data
    )

  }
  getVoiture() {

    this.voitureService.Get(this.obj['voiture']).subscribe(
      data =>
        this.voiture = data
    )

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

