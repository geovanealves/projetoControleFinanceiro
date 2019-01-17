import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  router: any;
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public r: Router) {
    this.user = afAuth.authState;
    this.router = r;
  }

  public login(mail: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {
        debugger
        localStorage['token'] = '';
        this.router.navigate(['']);
      })
        .catch((error) => {
          this.router.navigate(['/login']);
        });
    })
      .catch((error) => {
        this.router.navigate(['/login']);
      });
  }
  public logout() {
    return this.afAuth.auth.signOut();
  }
}
