import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientEmitter = new EventEmitter<Ingredient>();

  onAddClick(nameInput: string, amountInput: number): void {
    var ingr = new Ingredient(nameInput, amountInput);
    
    this.ingredientEmitter.emit(ingr);
  }
  constructor() { }

  ngOnInit() {
  }

}
