import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../track.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  @Input('track')track:Track;
  postTrack={trackName:'', trackComment:''};

  constructor(private httpService:HttpClient) {
    
   }

  ngOnInit() {
  }

  addToFav() {
    this.postTrack.trackName = this.track.title;
    this.postTrack.trackComment = this.track.comments;

    console.log(this.httpService.post('http://localhost:8080/api/v1/track', this.postTrack)
    .subscribe((response)=>{
      console.log(response);
    })
    );
  }

}
