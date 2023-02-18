import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Rec','Empty desc', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4ER1-m8mah2MZfNv-8xKFr25rmYBd2yuQyGroMOJJQ&s')
  ];
 
  ngOnInit(): void {
  }
}
