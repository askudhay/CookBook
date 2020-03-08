import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CuisineComponent } from "./cuisine/cuisine.component";
import { AmericanComponent } from "./cuisine/american/american.component";
import { ChineseComponent } from "./cuisine/chinese/chinese.component";
import { IndianComponent } from "./cuisine/indian/indian.component";
import { MexicanComponent } from "./cuisine/mexican/mexican.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "cuisine",
    component: CuisineComponent,
    children: [
      {
        path: "American",
        component: AmericanComponent
      },
      {
        path: "Chinese",
        component: ChineseComponent
      },
      {
        path: "Indian",
        component: IndianComponent
      },
      {
        path: "Mexican",
        component: MexicanComponent
      }
    ]
  },
  { path: "recipe/:id", component: RecipeComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
