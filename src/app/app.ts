import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listcustomer } from './listcustomer/listcustomer';
import { CustomerDetails } from './customer-details/customer-details';
import { ListCustomer2 } from './listcustomer2/listcustomer2';
import { Listcustomer3 } from './listcustomer3/listcustomer3';
import { HttpClientModule } from '@angular/common/http';
import { Ex14 } from './ex14/ex14';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Listcustomer, CustomerDetails, ListCustomer2, Listcustomer3,HttpClientModule, Ex14],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
