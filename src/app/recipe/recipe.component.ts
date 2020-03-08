import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"]
})
export class RecipeComponent implements OnInit {
  mealID: string;
  details: Array<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeSvc: RecipeService
  ) {}

  /**
   * Get the MealID from route param 'id' and pass it to getRecipe() method invocation.
   * This gets us the recipe detail..
   */
  ngOnInit(): void {
    this.mealID = this.route.snapshot.paramMap.get("id");
    this.recipeSvc
      .getRecipe(this.mealID)
      .subscribe((data: Array<any>) => (this.details = data["meals"]));
  }
}
