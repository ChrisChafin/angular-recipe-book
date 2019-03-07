import { Component, OnInit } from '@angular/core';
import { IngredientsService } from './ingredients.service'

interface DataResponse {
  id: number;
  name: string;
  ingredients: string;
}

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  recipes;
  name;
  ingredients;
  imgSource;
  activeId;
  resLength;

  constructor (private myService: IngredientsService) {}

  ngOnInit() {
    this.myService.getData().subscribe(
      res => {
        this.recipes = res;
        this.resLength = this.recipes.length;
        // always initizlize at the start of the array
        this.activeId = 0;
        this.name = this.recipes[this.activeId]["name"];
        this.ingredients = this.recipes[this.activeId]["ingredients"];
        this.imgSource = this.recipes[this.activeId]["image-source"];
      },
      error => {
        console.log('Error in getting data');
      },
      () => {
        console.log(this.ingredients);
      }
    );
  }
  next(){
    if (this.activeId == (this.resLength - 1)){
      //If we are at the end of the list, loop back to the start
      this.activeId = 0;
      this.name = this.recipes[this.activeId]["name"];
      this.ingredients = this.recipes[this.activeId]["ingredients"];
      this.imgSource = this.recipes[this.activeId]["image-source"];
    } else {
      this.activeId += 1;
      this.name = this.recipes[this.activeId]["name"];
      this.ingredients = this.recipes[this.activeId]["ingredients"];
      this.imgSource = this.recipes[this.activeId]["image-source"];
    }
  }

  prev(){
    if (this.activeId == 0){
      //if we are already at the beginning of the list, go to the end
      this.activeId = this.resLength - 1;
      this.name = this.recipes[this.activeId]["name"];
      this.ingredients = this.recipes[this.activeId]["ingredients"];
      this.imgSource = this.recipes[this.activeId]["image-source"];
    }
    else {
      this.activeId -= 1;
      this.name = this.recipes[this.activeId]["name"];
      this.ingredients = this.recipes[this.activeId]["ingredients"];
      this.imgSource = this.recipes[this.activeId]["image-source"];
    }

  }
}
