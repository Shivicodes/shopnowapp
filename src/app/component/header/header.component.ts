import { Component ,OnInit} from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
//on header , if cart button is clicked connect to comp:product
export class HeaderComponent implements OnInit{
  public totalItem:number=0;
  constructor(private cartservice:CartService){}
  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
      this.totalItem=res.length;

    })
  }
  public mobileSelected(){
    
  }


}
