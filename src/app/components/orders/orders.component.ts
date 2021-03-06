import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Order} from "../../models/order";

@Component({
  selector: 'app-orders',
  template: `    
    <a class="btn btn-default add-order" (click)="modal.open()">Add Order</a>
    <modal #modal [size]="'lg'">
      <modal-header [show-close]="true">
        <h4 class="modal-title">New Order</h4>
      </modal-header>
      <modal-body>
        <form>
          <app-add-order></app-add-order>
        </form>
      </modal-body>
      <modal-footer [show-default-buttons]="true"></modal-footer>
    </modal>
    <app-orders-table></app-orders-table>
  `,
  styles: [
    `
      .add-order {
        margin-top: 20px;
      }
    `
  ]
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().then(orders => this.orders = orders);
  }

}
