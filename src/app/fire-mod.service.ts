import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FireModService {
  public refreshBool = true;
  public userNow: any = undefined;
  public user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user$ = this.afAuth.authState;
    this.afAuth.authState.subscribe(x => {
      this.userNow = x;
    });
  }

  getFirebaseUser(): Observable<firebase.User> {
    return this.user$;
  }

  getState(): boolean {
    console.log(this.userNow);
    if (this.userNow !== undefined && this.userNow !== null) {
      return true;
    } else {
      return false;
    }
  }

  getAuth(): AngularFireAuth {
    return this.afAuth;
  }

  getDatabaseModule(): AngularFireDatabase {
    return this.db;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
