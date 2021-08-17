import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item.model';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingredients: Ingredient[]=[

  new Ingredient("cake",200),
  new Ingredient("Sandwitch",70),
  new Ingredient("Pizza",170)
];




  constructor() { }

  ngOnInit(): void {
  }


  onIngredientAdded(ingredient:FoodItem){
 this.ingredients.push(ingredient)
 

  }

}
