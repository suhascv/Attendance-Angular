import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {FireModService} from './fire-mod.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  canActivate() {
    if (this.service.getState() === true) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }

  constructor(private  service: FireModService, private route: Router) {
  }
}
