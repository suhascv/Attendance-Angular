import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireObject} from '@angular/fire/database';
import {AppComponent} from '../app.component';
import {FireModService} from '../fire-mod.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public afAuth: AngularFireAuth;
  public itemRef: AngularFireObject<any>;
  public Array: any[];

  constructor(public setTitle: AppComponent, public service: FireModService, public route: Router) {
    this.setTitle.setTitle('Home Page');
    this.afAuth = this.service.getAuth();
    this.itemRef = service.getDatabaseModule().object('Data');
  }

  lessClass = {
    // To show names in red whose attendance is blow 85%
    'text-danger': true
  };


  ngOnInit() {
    this.itemRef.snapshotChanges().subscribe(action => {
      if (action.payload.val() === null) {
        //
      } else {
        this.Array = action.payload.val();
      }
    });
  }

}
