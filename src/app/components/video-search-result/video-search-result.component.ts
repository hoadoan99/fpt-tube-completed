import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TubeService } from './../../shared/tube.service';

@Component({
  selector: 'app-video-search-result',
  templateUrl: './video-search-result.component.html',
  styleUrls: ['./video-search-result.component.css']
})
export class VideoSearchResultComponent implements OnInit {
  @Input() videos:any;
  pageEvent!: PageEvent;

  constructor(private tubeService: TubeService) {

  }

  ngOnInit(): void {
  }
  onChange(value:any){
      console.log(value);
  }

  // sort
  sortByDate(){
       let value = this.tubeService.getSearchValue();
       this.videos = [];
      //  console.log(value);
      this.tubeService.callApiOrderByDate(value).subscribe((data:any)=>{

        for(let item of data.items){
          this.videos.push({
            title: item.snippet.title,
            urlVideo:item.id.videoId,
            description: item.snippet.description,
            thumbnails: item.snippet.thumbnails.high.url
          });
      }
      console.log(this.videos);

})


  }
  sortByRating(){
    let value = this.tubeService.getSearchValue();
    this.videos = [];
    this.tubeService.callApiOrderByRating(value).subscribe((data:any)=>{
      for(let item of data.items){
        this.videos.push({
          title: item.snippet.title,
          urlVideo:item.id.videoId,
          description: item.snippet.description,
          thumbnails: item.snippet.thumbnails.high.url
        });
    }
    console.log(this.videos);

})


  }
  sortByRelevance(){
    let value = this.tubeService.getSearchValue();
    this.videos = [];
    this.tubeService.callApiOrderByRelevance(value).subscribe((data:any)=>{
      for(let item of data.items){
        this.videos.push({
          title: item.snippet.title,
          urlVideo:item.id.videoId,
          description: item.snippet.description,
          thumbnails: item.snippet.thumbnails.high.url
        });
    }
    console.log(this.videos);

})
  }
  sortByTitle(){
    let value = this.tubeService.getSearchValue();
    this.videos = [];
    this.tubeService.callApiOrderByTitle(value).subscribe((data:any)=>{
      for(let item of data.items){
        this.videos.push({
          title: item.snippet.title,
          urlVideo:item.id.videoId,
          description: item.snippet.description,
          thumbnails: item.snippet.thumbnails.high.url
        });
    }
    console.log(this.videos);

})
  }
  sortByVideoCount(){
    let value = this.tubeService.getSearchValue();
    this.videos = [];
    this.tubeService.callApiOrderByVideoCount(value).subscribe((data:any)=>{
      for(let item of data.items){
        this.videos.push({
          title: item.snippet.title,
          urlVideo:item.id.videoId,
          description: item.snippet.description,
          thumbnails: item.snippet.thumbnails.high.url
        });
    }
    console.log(this.videos);

})
  }
  sortByViewCount(){
    let value = this.tubeService.getSearchValue();
    this.videos = [];
    this.tubeService.callApiOrderByViewCount(value).subscribe((data:any)=>{
      for(let item of data.items){
        this.videos.push({
          title: item.snippet.title,
          urlVideo:item.id.videoId,
          description: item.snippet.description,
          thumbnails: item.snippet.thumbnails.high.url
        });
    }
    console.log(this.videos);

})

  }



}
