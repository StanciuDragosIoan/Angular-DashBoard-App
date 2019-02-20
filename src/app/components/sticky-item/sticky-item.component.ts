import { Component, OnInit, Input } from '@angular/core';
import { Sticky } from 'src/app/models/Sticky';

@Component({
  selector: 'app-sticky-item',
  templateUrl: './sticky-item.component.html',
  styleUrls: ['./sticky-item.component.css']
})
export class StickyItemComponent implements OnInit {
  @Input() sticky: Sticky;
  constructor() { }

  ngOnInit() {
  }

  //set dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      'is-completed': this.sticky.completed
    }

    return classes;
  }

}
