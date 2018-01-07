import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-gedgrid',
  templateUrl: './gedgrid.component.html',
  styleUrls: ['./gedgrid.component.css']
})
export class GedgridComponent implements OnInit {
  @Input() displayedColumns : [string];
  @Input() displayedHeaders : [string];
  @Input() dataSource : MatTableDataSource<Element>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    console.log(this.dataSource.data);
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

export interface DisplayValue {
  display: string;
  value:string;  
}
