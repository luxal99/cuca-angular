import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-ograde-img-dialog',
  templateUrl: './ograde-img-dialog.component.html',
  styleUrls: ['./ograde-img-dialog.component.css']
})
export class OgradeImgDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog) { }

  ngOnInit() {
      console.log(this.data);
      
  }

}
