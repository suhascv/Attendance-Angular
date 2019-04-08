import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {FireModService} from '../fire-mod.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styles: []
})
export class BsNavbarComponent implements OnInit {

  public user$: Observable<firebase.User>;

  constructor(private service: FireModService, private route: Router) {
    this.user$ = service.getFirebaseUser();
  }

  Logout() {
    this.service.logout();
    this.route.navigate(['/login']);
  }

  ngOnInit() {
  }

}
