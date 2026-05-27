import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onLogin() {
    console.log(this.loginForm.value)

    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response);

      localStorage.setItem('token', response.token);

      localStorage.setItem('user', JSON.stringify(response.user))

      this.router.navigate(['/dashboard'])
    })
  }

}
