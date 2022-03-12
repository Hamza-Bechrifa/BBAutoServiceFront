import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-ordre-de-reparation-list',
  templateUrl: './ordre-de-reparation-list.component.html',
  styleUrls: ['./ordre-de-reparation-list.component.css']
})
export class OrdreDeReparationListComponent implements OnInit {

  @ViewChild('dataTable', { static: true }) table;
  dtElement: DataTableDirective;
  orList: any;
  filterForm: any;
  dtOptions = 
    {
      destroy: true,
      "order": [0, 'desc'],
     
    }
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(private router: Router, private fb: FormBuilder,private ordreDeReparationService: OrdreDeReparationService) {
  }

  ngOnInit() {
    var rightNow = new Date();
    var rightNowString = rightNow.toISOString().slice(0, 10);
    this.filterForm = this.fb.group({
      dateDebut: rightNowString,
      dateFin: rightNowString
    })

    this.getOrders()
  }
  getOrders() {
    
    this.ordreDeReparationService.List(this.filterForm.value).subscribe(
      data => {
        
        this.orList = null
        this.orList = data;
        this.dtTrigger.next();
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
  show(id) {
    this.router.navigate(['/ordreDeReparation/show/' + id]);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  //rerender(): void {
  //  console.log(this.dtElement)
  //  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //    // Destroy the table first
  //    dtInstance.destroy();
  //    // Call the dtTrigger to rerender again
  //    this.dtTrigger.next();
  //  });
  //}
 
}
