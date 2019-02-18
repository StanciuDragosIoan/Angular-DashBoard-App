import { Component, OnInit } from '@angular/core';
import { Sticky } from '../../models/Sticky';

@Component({
  selector: 'app-stickies',
  templateUrl: './stickies.component.html',
  styleUrls: ['./stickies.component.css']
})
export class StickiesComponent implements OnInit {
  stickies: Sticky[];
  constructor() { }

  ngOnInit() {
    this.stickies = [
      {
        id:1,
        title: 'Test Sticky',
        body: 'Test sticky body...',
        completed: false
      } 
    ]
  }

}
