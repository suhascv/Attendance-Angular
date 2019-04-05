import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireObject} from '@angular/fire/database';
import {AppComponent} from '../app.component';
import {FireModService} from '../fire-mod.service';
import {Router} from '@angular/router';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-excel-json',
  templateUrl: './excel-json.component.html',
  styleUrls: ['./excel-json.component.css']
})
export class ExcelJSONComponent implements OnInit {
  public afAuth: AngularFireAuth;
  public itemRef: AngularFireObject<any>;
  public Array: any[];
  public temp: any;

  constructor(public setTitle: AppComponent, public service: FireModService, public route: Router) {
    this.setTitle.setTitle('Home Page');
    this.afAuth = this.service.getAuth();
    this.itemRef = service.getDatabaseModule().object('Data');
  }

  ngOnInit() {
    this.itemRef.snapshotChanges().subscribe(action => {
      if (action.payload.val() === null) {
        //
      } else {
        this.Array = action.payload.val();
        this.temp = new Angular5Csv(this.Array, 'AttendanceExcel');
      }
    });
  }

}
