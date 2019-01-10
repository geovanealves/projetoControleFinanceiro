import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuardComponent {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log(localStorage['token'], 'token');
    console.log("VALIDATE");

    console.log(localStorage['token'] != null);

    if (localStorage['token'] != null) {
        return true;
    } else {
        this.router.navigate(['/login']);
    }
  }
}
