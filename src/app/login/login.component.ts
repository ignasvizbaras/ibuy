import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public login = true;

  change(type: string): void{
    if (type === 'register'){
      this.login = false;
    }
    else{
      this.login = true;
    }
  }
}
