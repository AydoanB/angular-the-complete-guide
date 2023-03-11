import {NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipeOutletComponent} from "./recipes/recipe-outlet/recipe-outlet.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

const  appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeOutletComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id/edit', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
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
