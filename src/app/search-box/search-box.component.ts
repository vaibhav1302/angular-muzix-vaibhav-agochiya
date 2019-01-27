import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from '../track.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  trackList: Track[]=[];
  trackName: string="";
  response: any;

  constructor(private httpService:HttpClient) {
    
   }

  ngOnInit() {
  }

  searchByName() {
    this.httpService.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + this.trackName + '&api_key=55a9c042046a453d48d3d2c119131511&format=json')
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    });
  }
 

}
