import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireModService {
  public refreshBool = true;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {

  }

  getAuth(): AngularFireAuth {
    return this.afAuth;
  }

  getDatabaseModule(): AngularFireDatabase {
    return this.db;
  }
}
