import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ShippingComponent } from './shipping/shipping.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCreatingComponent } from './product-creating/product-creating.component';


const routes: Routes = [
  {
    path:" ",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },{
    path:'createProduct',
    component:ProductCreatingComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'shipping',
    component:ShippingComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  },
  {
    path:'wishlist',
    component:WhishlistComponent
  },
  {
    path:"**",
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ProductsComponent,
  CartComponent,
  ShippingComponent,
  RegisterComponent,
  LoginComponent,
  WhishlistComponent,
  DashboardComponent,
  ProductCreatingComponent];
