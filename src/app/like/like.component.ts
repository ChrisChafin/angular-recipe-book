import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() iLike = false;

  @Output() change = new EventEmitter();

  onClick() {
    this.iLike = !this.iLike;
    this.change.emit({newValue: this.iLike})
  }

}
