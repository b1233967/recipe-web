import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>() ;

  public recipes:Recipe[] = [
    new Recipe("Chocolate","Good","https://picsum.photos/300/300?random=1"),
    new Recipe("Banana","nice","https://picsum.photos/300/300?random=2"),
    new Recipe("Papaya","perfect","https://picsum.photos/300/300?random=3")
  ] ;

  constructor() { }

  ngOnInit(): void {
    console.log("recipes = ",this.recipes) ;
  }

  recipeSelected(recipeEl:Recipe){
    this.recipeWasSelected.emit(recipeEl);
  }

}
