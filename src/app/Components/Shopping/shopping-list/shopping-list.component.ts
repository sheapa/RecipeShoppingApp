import { Component, OnInit } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
import { Ingredient } from '../../../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("cheese", 2),
    new Ingredient("Bread", 2),
    new Ingredient("Butter", 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
