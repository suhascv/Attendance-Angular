import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireModService {
  public refreshBool = true;
  public userNow: any = undefined;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(x => {
      this.userNow = x;
    });
  }


  getState(): boolean {
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
}
