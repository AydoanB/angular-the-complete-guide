import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {ShoppingListService} from "../../shopping-list.service";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.recipeId);
    })
  }

  onToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
