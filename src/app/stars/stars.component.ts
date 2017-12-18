import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // 星级评价的rating属性的值应该由它的父组件传递给他
  // @Input() content:number;
  private rating:number = 0

  private stars: boolean[]

  constructor() { }

  ngOnInit() {
    // this.stars = []
    // for(let i = 1; i <= 5; i++){
    //   this.stars.push(i > this.rating)
    // }
    // this.stars = [true,true,true,true,true]
  }

}
