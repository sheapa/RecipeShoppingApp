import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Grilled Cheese', 'Savory warm cheese sandwich', 'https://live.staticflickr.com/4017/4541489084_968537a08f_b.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
