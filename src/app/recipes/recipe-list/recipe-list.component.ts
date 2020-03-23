import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simple a test', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg'),
    new Recipe('A Second Recipe','This is another test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/slow-cooker-recipes-1574787490.jpg?crop=0.753xw:1.00xh;0.224xw,0&resize=640:*'),
  ];
  @Output() clickedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedItem(recipe: Recipe){
    this.clickedRecipe.emit(recipe);
  }

}
