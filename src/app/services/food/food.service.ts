import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getAllFoodByTag(tag:string) : Foods[]{

    return tag == "All"? 
    this.getAll(): this.getAll().filter(food => food.tags?.includes(tag));

     
    //  
  }

  getAllTag():Tag[]{
     return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'SlowFood', count: 3 },
      { name: 'Lunch', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 }
     ]
  }

  constructor() { }



 getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
 }



  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite: false,
        orgins:['italy'],
        star: 4.5,
        imageUrl:'/assets/foood.1.jpeg',
        tags: ['FastFood0','Pizza','Lunch']

      },
      {
        id:2,
        name:'Dosa Pepperoni',
        cookTime:'20-30',
        price:50,
        favorite: true,
        orgins: ['indian','USA'],
        star: 3.5,
        imageUrl:'/assets/foood.1.jpeg',
        tags: ['FastFood','Pizza','Lunch']

      },
      {
        id:3,
        name:'SevPuri',
        cookTime:'30-50',
        price:30,
        favorite: false,
        orgins:['indian','chaina'],
        star: 4.5,
        imageUrl:'/assets/foood.1.jpeg',
        tags: ['slowFood','Soup']

      },
      {
        id:4,
        name:'paneer',
        cookTime:'100-120',
        price:10,
        favorite: true,
        orgins:['indian'],
        star: 4.5,
        imageUrl:'/assets/foood.1.jpeg',
        tags: ['paneer','Lunch']

      },
      {
        id:5,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite: false,
        orgins:['italy'],
        star: 4.5,
        imageUrl:'/assets/foood.1.jpeg',
        tags: ['FastFood0','Pizza','Lunch']

      },
      {
        id:6,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite: false,
        orgins:['italy'],
        star: 4.5,
        imageUrl:'/assets/foood.1.jpeg',
        tags: ['FastFood0','Pizza','Lunch']

      },
    ]
  }
}