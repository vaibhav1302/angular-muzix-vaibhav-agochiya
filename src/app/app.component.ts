// 55a9c042046a453d48d3d2c119131511
import { Component } from '@angular/core';
import { Track } from './track.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-muzix';
  searchFlag: Boolean = true;

  toggleSearchFlag(){
    this.searchFlag = !this.searchFlag;
  }
}
