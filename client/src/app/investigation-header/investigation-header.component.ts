import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-investigation-header',
  templateUrl: './investigation-header.component.html',
  styleUrls: ['./investigation-header.component.scss']
})
export class InvestigationHeaderComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.matDialog.open(DialogComponent, {
      height: '400px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
