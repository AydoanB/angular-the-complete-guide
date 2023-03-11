import {NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipeOutletComponent} from "./recipes/recipe-outlet/recipe-outlet.component";

const  appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeOutletComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: 'list', component: RecipeListComponent}
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
