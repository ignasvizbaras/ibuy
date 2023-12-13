import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  constructor(private router: Router){

  }
  items = [
    {id: 1, description: 'NVIDIA GeForce RTX 4090: Unleash the Power of Ultimate Gaming Performance', price: 530, img: 'rtx.png'},
    {id: 2, description: 'AMD Ryzen 7950X3D CPU: the epitome of high-performance', price: 469, img: 'ryzen2.png'},
    {id: 3, description: 'Dell XPS Laptop - Redefining Excellence in Mobile Computing', price: 999, img: 'dell.png'},
    {id: 4, description: 'LG 27 inch 144Hz refresh rate 1440p Gaming Monitor', price: 440, img: 'lg.png'},
    {id: 5, description: 'Ducky One 3 Mechanical Keyboard: Elevate Your Typing', price: 219, img: 'ducky.png'},
    {id: 6, description: 'Asus ROG Crosshair X670E Motherboard: Elevate Your G..', price: 333, img: 'asus.png'}
  ]

  redirectToProduct(){
    this.router.navigateByUrl('/product');
  }
}
