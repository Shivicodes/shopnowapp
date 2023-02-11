import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public productList:any;
  //injected services to use it 
  constructor(private api:ApiService,private cartService:CartService){}
  ngOnInit():void{
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((e:any)=> {
        Object.assign(e,{quantity:1,total:e.price});


        
      });
    });

  }
  addtocart(item:any){
    this.cartService.addtoCart(item);


  }

}
