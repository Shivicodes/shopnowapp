import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // passing data accross component create service
  //here when addcart button clicked on comp:product then migrate to cart:comp
  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([]);// act as observable and also emits data ; n is subscribable

  constructor() { }
  getProducts()
  {
    //create getter n setter
    return this.productList.asObservable();

  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    //this passes the data when ever productlist is subscribed  
    this.productList.next(product);

  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.productList);
    this.getTotalPrice();
  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;

    })
    return grandTotal;

  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
