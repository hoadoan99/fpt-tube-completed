import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TubeService } from './../../../shared/tube.service';

@Component({
  selector: 'app-setting-api',
  templateUrl: './setting-api.component.html',
  styleUrls: ['./setting-api.component.css']
})
export class SettingApiComponent implements OnInit {
  delayTime!: number;
  apiKey!: string;
  constructor(
    private tubeService: TubeService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 // debounce Time
 onClick(){
   this.tubeService.setDelayTime(this.delayTime);
   this.tubeService.setKey(this.apiKey);
 }

  // close
  onNoClick(): void {
    this.dialogRef.close();
  }


}
