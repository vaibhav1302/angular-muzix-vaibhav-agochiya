import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../track.model';

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.css']
})
export class FavCardComponent implements OnInit {
  @Input('track')track:Track;
  editFlag:boolean = false;
  
  constructor() { }

  toggleEdit(){
    this.editFlag = !this.editFlag;
  }

  ngOnInit() {
    this.editFlag = false;
  }

}
