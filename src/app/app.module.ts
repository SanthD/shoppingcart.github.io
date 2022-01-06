import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdustsService } from '../services/produsts.service';
import { CartService} from '../services/cart.service';
import { ReactiveFormsModule} from '@angular/forms';
import { AuthenticationService} from '../services/authentication.service';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProdustsService,CartService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
