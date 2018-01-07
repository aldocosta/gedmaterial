import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { User } from '../../../../app/model/user';

@Component({
  selector: 'app-dgnovo',
  templateUrl: './dgnovo.component.html',
  styleUrls: ['./dgnovo.component.css']
})
export class DgnovoComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(public dialogRef: MatDialogRef<DgnovoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {        
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
