import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenVideoComponent } from './open-video/open-video.component';

@Component({
  selector: 'app-video-result',
  templateUrl: './video-result.component.html',
  styleUrls: ['./video-result.component.css']
})
export class VideoResultComponent implements OnInit {
  @Input() video : any;
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog( ) {
    this.dialog.open(OpenVideoComponent, {
      data:
          {videoId: this.video.urlVideo}
    })
    console.log(this.video.urlVideo);

}
}
