import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TubeService } from './../../shared/tube.service';
import { Tube } from './../../shared/tube.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('input')inputElement!: ElementRef;
  constructor(private tubeService : TubeService, public dialog: MatDialog) { }
  videos: Tube[] = [];
  loading = false;
  ngOnInit(): void {
  }
  onEnter(value:string): void{
    this.loading = true;
    this.videos = [];
    this.tubeService.addSearch(value);
    // let search = this.tubeService.getSearchValue();
    // console.log(search);
    this.tubeService.getDataApi(value)
                    .subscribe((data:any)=>{
                  console.log(data.items);
          for(let item of data.items){
            this.videos.push({
              title: item.snippet.title,
              urlVideo:item.id.videoId,
              description: item.snippet.description,
              thumbnails: item.snippet.thumbnails.high.url
            });
          }
          this.loading = false;
          // console.log(this.videos);

    })
  }

  // dialog

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'setting.html',
})
export class DialogContentExampleDialog {}
