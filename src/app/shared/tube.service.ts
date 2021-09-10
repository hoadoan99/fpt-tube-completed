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
  // return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyDOwINZY5x8U9DZvtsSyKZWE_jfgDPya_c&type=video&maxResults=50`);
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyC1z7iY3EMqDtV44LuG9RolRLthIQws3TU&type=video&maxResults=50`);
}
addSearch(value:string){
    this.searchValue = value;
}
getSearchValue(){
  return this.searchValue;
}
}
