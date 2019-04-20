import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginFailed = false;
    username: string;
    password: string;
    credentials = {
        username: 'name',
        password: 'pwd',
    };

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void { }
    login(): void {
            if ((this.username === this.credentials.username) &&
                (this.password === this.credentials.password)) {
                this.router.navigate(['home']);
            } else {
                this.loginFailed = true;
                this.username = null;
                this.password = null;
            }
        }
    }
