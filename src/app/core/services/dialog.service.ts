import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: { title: title, message: message }
        });
        return dialogRef.afterClosed();
    }
}
