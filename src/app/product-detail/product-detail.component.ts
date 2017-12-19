import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private productTitle: string;
  private productPrice: number;
  // 保存当前路由信息
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // 参数快照snapshot
    this.productTitle = this.routeInfo.snapshot.params['title']
    this.productPrice = this.routeInfo.snapshot.params['price']
  }

}
