import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // title: string;
  // body: string;
  constructor() { }
  addSticky() {
     console.log('adding sticky');
    // const sticky = {
    //   title: this.title,
    //   body: this.body,
    //   completed: false
    // }

    // console.log(sticky);
  }

  addTask() {
    console.log('adding task');
  }
  ngOnInit() {}
}
