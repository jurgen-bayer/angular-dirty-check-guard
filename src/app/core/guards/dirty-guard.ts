import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { IDirty } from '../model/IDirty'

@Injectable({
  providedIn: 'root'
})
export class DirtyGuard implements CanDeactivate<IDirty> {
    canDeactivate(
        component: IDirty, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot) : boolean {
            if (component.isDirty()) {
            if (confirm('If you navigate away your changes are not saved. Navigate away anyway?')) {
                return true;
            }
            return false;
        }
        return true;
    }
}
