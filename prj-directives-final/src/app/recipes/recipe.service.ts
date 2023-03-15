import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(0,'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]),
    new Recipe(1,'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Meso', 20), new Ingredient('Yumurta', 5)])
  ];

  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(Id: number): Recipe {
    return this.recipes[Id];
  }

  fetchRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
