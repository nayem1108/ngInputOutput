import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodApp';
  foodArr: string[] = [];
  errorMessage: string = '';

  addFood(food: string){
    if(food === '')
    {
      this.errorMessage = "Please enter a food name!";
    }else{
      this.foodArr.push(food);
    }
  }

  // constructor(){
  // }
  deletedFood: string = '';


  deleteFood(indexNumber: number){
    if(confirm("Do you want to delete this food ?")){
      setTimeout(() => {
        this.deletedFood = '';
      }, 5000);
      this.deletedFood = this.foodArr[indexNumber];
      this.foodArr = this.foodArr.filter((val, index) => index != indexNumber);
    }
  }
}
