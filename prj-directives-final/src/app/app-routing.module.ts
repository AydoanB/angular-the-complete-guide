import {NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";

const  appRoutes: Routes = [
  {path: 'recipes', component: RecipesComponent, children: [
      {path: ':id/detail', component: RecipeDetailComponent},
      {path: 'list', component: RecipeListComponent, children: [
        ]},
    ]},
  {path: 'shopping-list', component: ShoppingListComponent, children: [
      {path: ':id/edit', component: ShoppingEditComponent}
    ]}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}