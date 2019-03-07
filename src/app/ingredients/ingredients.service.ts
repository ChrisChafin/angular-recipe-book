import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private httpService: HttpClient) { }

  getData() {
    return this.httpService.get('../../assets/recipes.json');
  }
}
