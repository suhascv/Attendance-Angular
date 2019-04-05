import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AppComponent} from '../app.component';
import {auth} from 'firebase';
import {Router} from '@angular/router';
import {FireModService} from '../fire-mod.service';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.component.html',
  styleUrls: ['./login-p.component.css']
})
export class LoginPComponent implements OnInit {
  showPasswordLogic = false;
  passwordValue = '';
  public afAuth: AngularFireAuth;

  constructor(private setTitle: AppComponent, public route: Router, public service: FireModService) {
    this.setTitle.setTitle('Login');
    this.afAuth = this.service.getAuth();
  }

  ngOnInit() {
  }

  redirect() {
    this.route.navigate(['/homepage']).then().catch();
  }

  onClic() {
    this.showPasswordLogic = !this.showPasswordLogic;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then().catch();
  }

  singUpWithEmailAndPassword(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email.trim(), password.trim()).then((user) => {
      console.log(this.afAuth.auth.currentUser.uid);
    }).catch((error) => {
      console.log(error.toString());
      alert('No such user or password');
    });
  }
}
