import { Component, OnInit } from '@angular/core';
import { ProdustsService } from '../../services/produsts.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProdustsService , private cartService:CartService) { }
  products=[]
  ngOnInit() {
    this.productService.getProducts()
          .subscribe(
            res=> {
              this.products = res.Data,
              console.log(res)
            },
            err => console.log(err)
          );

  }
  addToCart(product) {
    this.cartService.addToCart(product);
    console.log(product)
    window.alert('Your product has been added to the cart!');
  }

}
