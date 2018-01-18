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
  /**
   * Campos da grid
   */
  displayedColumns = ['Name','Email'];  
  /**
   * Fonte de dados da grid
   */
  _dataSource : MatTableDataSource<User>;
  
  constructor(public dialog: MatDialog   ) {         
  }

  openDialog(user): void {
    let dialogRef = this.dialog.open(DgnovoComponent, {
      height: '350px',
      width: '100%',
      data: user || new User()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);      
      if(result){
        let d = this._dataSource.data;
        d.push(result);
        this._dataSource._updateChangeSubscription();        
      }
    });
  }

  ngOnInit() {    
    let ELEMENT_DATA :User[] = [] ;
    let u = new User();
    u.Name = 'Aldo';
    u.Email = 'acs@aldocosta.com.br';
    ELEMENT_DATA.push(u);
    u = new User();
    u.Name = 'Costa';
    u.Email = 'costa@aldocosta.com.br';
    ELEMENT_DATA.push(u);
    u = new User();
    u.Name = 'Santos';
    u.Email = 'santos@aldocosta.com.br';
    ELEMENT_DATA.push(u);

    this._dataSource = new MatTableDataSource<User>(ELEMENT_DATA);    
    
  }

  editar(item){
    console.log(item);
    this.openDialog(item);    
  }


}