import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TubeService {
  searchValue!: string;
  constructor(private http:HttpClient) { }
      // call api
getDataApi(name:string){
  if (this.apiKey != null && this.apiKey != undefined && this.apiKey != ' ') {
    return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${this.apiKey}&type=video&maxResults=50`);
  }
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyBgGT2xxaQQLNKsRIIVfWd9wmNIk8cPPG4&type=video&maxResults=50`);
}
addSearch(value:string){
    this.searchValue = value;
}
getSearchValue(){
  return this.searchValue;
}

callApiOrderByDate(name:string){
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyBgGT2xxaQQLNKsRIIVfWd9wmNIk8cPPG4&type=video&maxResults=50&order=date`);
}
callApiOrderByRating(name:string){
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyBgGT2xxaQQLNKsRIIVfWd9wmNIk8cPPG4&type=video&maxResults=50&order=rating`);
}
callApiOrderByViewCount(name:string){
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyBgGT2xxaQQLNKsRIIVfWd9wmNIk8cPPG4&type=video&maxResults=50&order=viewCount`);
}
callApiOrderByRelevance(name:string){
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyBgGT2xxaQQLNKsRIIVfWd9wmNIk8cPPG4&type=video&maxResults=50&order=relevance`);
}
callApiOrderByTitle(name:string){
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyBgGT2xxaQQLNKsRIIVfWd9wmNIk8cPPG4&type=video&maxResults=50&order=title`);
}
callApiOrderByVideoCount(name:string){
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyBgGT2xxaQQLNKsRIIVfWd9wmNIk8cPPG4&type=video&maxResults=50&order=videoCount`);
}
// Time

delayTime: number = 0;
apiKey!: string;
setDelayTime(value:number){
  this.delayTime = value;
}
getDelayTime(){
 return this.delayTime;
}
setKey(value:string){
  this.apiKey = value;
}
getKey(){
  return this.apiKey;
}



}
