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

  @Input() iLike: boolean;

  @Output() change = new EventEmitter<boolean>();

  onClick() {
    this.iLike = !this.iLike;
    this.change.emit(this.iLike)
  }

}
