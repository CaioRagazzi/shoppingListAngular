import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from 'src/app/shopping-list/service/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
  }

  sendIngredientsToShoppingList() {
    this.shoppingList.addIngredients(this.recipe.ingredients);
  }

}
