import { Component, OnInit } from '@angular/core';
// import { star } from '../stars/stars.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>
  
  private imgUrl = '../../assets/slide02.jpeg'

  constructor() { }

  ngOnInit() {  // 声明周期的钩子，在ProductComponent被实例化后调用一次，用来初始化组件里边的数据
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"这是顾非白的第一个商品",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",2.99,1.5,"这是顾非白的第一个商品",["电子产品","硬件设备"]),
      new Product(3,"第三个商品",3.99,3.5,"这是顾非白的第一个商品",["电子产品","硬件设备"]),
      new Product(4,"第四个商品",4.99,4.5,"这是顾非白的第一个商品",["电子产品","硬件设备"]),
      new Product(1,"第五个商品",5.99,2.5,"这是顾非白的第一个商品",["电子产品","硬件设备"]),
      new Product(1,"第六个商品",6.99,4.5,"这是顾非白的第一个商品",["电子产品","硬件设备"])      
    ]
  }

}
export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}
