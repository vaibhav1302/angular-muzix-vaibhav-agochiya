import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Track } from '../track.model';

@Component({
  selector: 'app-fav-box',
  templateUrl: './fav-box.component.html',
  styleUrls: ['./fav-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavBoxComponent implements OnInit {
  trackList:Track[]=[];

  constructor() {
    this.trackList = [{id:"12345", title:"asbd", comments:"hbadash"}, 
    {id:"12345", title:"asbd", comments:"hbadash"}];
   }

  ngOnInit() {
  }

}
