import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CuisineComponent } from "./cuisine/cuisine.component";
import { AmericanComponent } from "./cuisine/american/american.component";
import { ChineseComponent } from "./cuisine/chinese/chinese.component";
import { IndianComponent } from "./cuisine/indian/indian.component";
import { MexicanComponent } from "./cuisine/mexican/mexican.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { HttpClientModule } from "@angular/common/http";
import { RecipeComponent } from './recipe/recipe.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuisineComponent,
    AmericanComponent,
    ChineseComponent,
    IndianComponent,
    MexicanComponent,
    RecipesComponent,
    RecipeComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
