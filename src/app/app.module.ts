import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/UI/header/header.component';
import { ShoppingListEditComponent } from './Components/Shopping/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './Components/Shopping/shopping-list/shopping-list.component';
import { RecipeComponent } from './Components/Recipe/recipe/recipe.component';
import { RecipeListComponent } from './Components/Recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Components/Recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Components/Recipe/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    ShoppingListComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
