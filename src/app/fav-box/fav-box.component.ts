import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Track } from '../track.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fav-box',
  templateUrl: './fav-box.component.html',
  styleUrls: ['./fav-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavBoxComponent implements OnInit {
  trackList:Track[]=[];
  response: any;
  constructor(private httpService:HttpClient) {
   }

  ngOnInit() {
  }

  refreshFav(){
    this.httpService.get('http://127.0.0.1:8080/api/v1/tracks')
    .subscribe((response)=>{
      this.response = response;
      this.trackList = this.response.map(obj=>({
        id: obj.trackId,
        title: obj.trackName,
        comments: obj.trackComment
      }));
      console.log(this.trackList);
    });
  }
}
