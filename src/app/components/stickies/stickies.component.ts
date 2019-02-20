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
        title: 'Test Sticky 1',
        body: 'Test sticky 1 body...',
        completed: false
      },

      {
        id:2,
        title: 'Test Sticky 2',
        body: 'Test sticky 2 body...',
        completed: true
      },

      {
        id:3,
        title: 'Test Sticky 3',
        body: 'Test sticky 3 body...',
        completed: false
      }  
     
    ]
  }

}
