import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';



export interface canDeactivateComp{
  canDeactivate:()=>Observable<boolean>|Promise<boolean>|boolean;
}
export class CanDeactivateGuardService implements CanDeactivate<canDeactivateComp> {

  constructor() { }
  canDeactivate(component: canDeactivateComp, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return component.canDeactivate();
  }
}
