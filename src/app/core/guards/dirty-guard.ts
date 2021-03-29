import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IDirty } from '../model/IDirty'
import { DialogService } from '../services/dialog.service';

@Injectable({
    providedIn: 'root'
})
export class DirtyGuard implements CanDeactivate<IDirty> {
    constructor(private dialogService: DialogService) { }

    canDeactivate(
        component: IDirty,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> {
        if (component.isDirty()) {
            return this.dialogService.confirm('Unsaved Changes', 'If you navigate away ' + 
               'your latest changes will not be saved. Navigate away anyway?');
        }
        else {
            return of(true);
        }
    }
}
