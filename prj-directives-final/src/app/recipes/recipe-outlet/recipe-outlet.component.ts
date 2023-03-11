import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-outlet',
  templateUrl: './recipe-outlet.component.html',
  styleUrls: ['./recipe-outlet.component.css']
})
export class RecipeOutletComponent implements OnInit{
  selectedRecipe: Recipe;

  constructor() {
  }
  ngOnInit(): void {
  }
}
