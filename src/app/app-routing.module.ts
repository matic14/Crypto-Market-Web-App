import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', component: HomeComponent
  },
  {
    path: 'exchange', component: ExchangeComponent
  },
  {
    path: 'menu', component: MenuComponent
  }, {

    path: 'currency-detail', component: CurrencyDetailsComponent
  }, {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
