import {Component, OnInit, Input} from '@angular/core';

import {Recipe} from '../recipe.model';
import {ShoppingListService} from "../../shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
