import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-food',
  templateUrl: './child-food.component.html',
  styleUrls: ['./child-food.component.css']
})
export class ChildFoodComponent {
  @Input() foods: string[] = [];


  
  @Output() foodDelEvtEmit: EventEmitter<number> = new EventEmitter<number>();
  deleteFood(index: number){
    this.foodDelEvtEmit.emit(index);
    console.log(index);
  }

}
