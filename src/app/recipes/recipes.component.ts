import { Component, OnInit, Input } from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  /**
   * Cuisine parameter passed as Input to this Component
   */
  @Input()
  cuisine: string;

  /**
   * This array holds the list of recipes based on Cuisine parameter
   */
  iterableRecipes: Array<any>;

  constructor(private recipeSvc: RecipeService) {}

  /**
   * This life cycle method gets called once component is created.
   * It invokes getRecipes() method from RecipeService class to get list of recipes based on Cuisine and
   * also it iterates it to iterable Array by invking createIterableRecipes() ..
   */
  ngOnInit(): void {
    this.recipeSvc
      .getRecipes(this.cuisine)
      .subscribe(
        (data: Array<any>) =>
          (this.iterableRecipes = this.recipeSvc.createIterableRecipes(
            data["meals"]
          ))
      );
  }
}
