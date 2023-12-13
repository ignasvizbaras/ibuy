import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent {

  constructor(private router: Router){
  }

  redirectToLogin(){
    this.router.navigateByUrl('/login');
  }

  redirectToHome(){
    this.router.navigateByUrl('/landing');
  }

  redirectToCart(){
    this.router.navigateByUrl('/cart');
  }
}
