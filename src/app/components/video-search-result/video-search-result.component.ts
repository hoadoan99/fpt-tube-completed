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
  constructor(private tubeService: TubeService) { }

  ngOnInit(): void {
  }
  onChange(value:any){
      console.log(value);
  }

  // sort
  sortByDate(){
       let vl = this.tubeService.getSearchValue();
       console.log(vl);

  }
  sortByRating(){

  }
  sortByRelevance(){

  }
  sortByTitle(){

  }
  sortByVideoCount(){

  }
  sortByViewCount(){

  }

}
