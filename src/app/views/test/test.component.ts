import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrdreDeReparationService } from '../../services/ordre-de-reparation.service';

export interface OrdreDeReparation {

  id: number,
  client: string,
  voiture: string,
  dateDocument: string,
  dateCreation: string,
  kilometrage: number,
  totalHt: number,
  totalTtc: number,
  resteAPaye: number
}
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,AfterViewInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ["id",
    "client",
    "voiture",
    "dateDocument",
    "dateCreation",
    "kilometrage",
    "totalHt",
    "totalTtc",
    "resteAPaye"];
  dataSource: MatTableDataSource<OrdreDeReparation>;



  constructor( private ordreDeReparationService: OrdreDeReparationService) {

  }
  ngOnInit() {

    this.getOrders();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getOrders() {

    this.ordreDeReparationService.List({}).subscribe(
      (data: OrdreDeReparation[]) => {
        
          this.dataSource = new MatTableDataSource(data);
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
}

