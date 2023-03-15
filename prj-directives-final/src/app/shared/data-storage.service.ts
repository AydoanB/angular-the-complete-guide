import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

const base = 'https://angular-the-complete-gui-80dd1-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService implements OnInit{

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.fetchRecipes();
  }
  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(base, recipes)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  fetchRecipes(): void {
    this.http.get<Recipe[]>(base).subscribe((recipes) => {
      this.recipeService.fetchRecipes(recipes);
      console.log(recipes)
    });
  }


}
