import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from 'src/app/shopping-list/service/shopping-list.service';
import { RecipeService } from '../service/recipe.service';
import { ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: Number;

  constructor(private shoppingList: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.getRecipe(+params['id']);
    })
  }

  getRecipe(id: number) {
    this.recipe = this.recipeService.getRecipes().slice().find(recipe => recipe.id === this.id)
  }

  sendIngredientsToShoppingList() {
    this.shoppingList.addIngredients(this.recipe.ingredients);
  }

}
