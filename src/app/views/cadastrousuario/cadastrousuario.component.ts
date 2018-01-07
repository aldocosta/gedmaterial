import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource,MatDialog } from '@angular/material';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { DgnovoComponent } from '../../views/cadastrousuario/dgnovo/dgnovo.component';
import { User } from '../../model/user';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css']  
})
export class CadastrousuarioComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  // displayedColumns = ['position', 'name','email'];  
  displayedColumns = ['Name','Email'];  
  _dataSource : MatTableDataSource<User>;
  
  constructor(public dialog: MatDialog   ) {         
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DgnovoComponent, {
      height: '350px',
      width: '100%',
      data: new User()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);      
      if(result){
        let d = this._dataSource.data;
        d.push(result);
        this._dataSource = new MatTableDataSource<User>(d);
      }
    });
  }

  ngOnInit() {    
    let ELEMENT_DATA :User[] = [] ;
    let u = new User();
    u.Name = 'Aldo';
    u.Email = 'acs@aldocosta.com.br';
    ELEMENT_DATA.push(u);

    this._dataSource = new MatTableDataSource<User>(ELEMENT_DATA);    
  }
}

// export class Element {
//   name: string;
//   email:string;
//   position: number;  
// }

// const ELEMENT_DATA: User[] = [
//   { Name: 'Aldo Costa', Email:'aldocostasantos@hotmail.com'},
//   { Name: 'Bernardo Abranches',Email:'bernardoabranches@gmail.com'},
//   { Name: 'Helena Abranches',Email:'helenaabranches@yahoo.com'}
// ];

