import { Component, OnInit } from '@angular/core';
import { ProductFirebaseService } from 'src/app/services/product-firebase.service';
import { products } from './products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menu = products;
  constructor(private productFirebase: ProductFirebaseService) { }

  ngOnInit(): void {
    this.productFirebase.getProducts().subscribe((products)=>{
      this.menu['burguers'].push(...products.filter(product=>product.typeProduct === 'Burger'))
      this.menu['burguers'] = [...new Set(this.menu['burguers'])];
      this.menu['beverages'].push(...products.filter(product=>product.typeProduct === 'Beverages'));
      this.menu['accompaniments'].push(...products.filter(product=>product.typeProduct === 'Accompaniments'))
      // this.menu['accompaniments'] = [...new Set(this.menu['accompaniments'])];

      this.menu['accompaniments'] = this.menu['accompaniments'].filter((item: any,index: number)=>{
        return this.menu['accompaniments'].indexOf(item) === index;
      })

      console.log(this.menu['accompaniments'])
    })
  }
}
