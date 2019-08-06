import {Component, OnInit} from '@angular/core';
import {BackEndApiService} from '../back-end-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public api: BackEndApiService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(loginForm: HTMLFormElement) {
    this.email = loginForm.email.value;
    this.password = loginForm.password.value;
    this.api.login(this.email, this.password).subscribe(result => {
      console.log(result);
      localStorage.setItem('ACCESS_TOKEN', result.token);
      this.router.navigate(['/']);
    });
  }
}
