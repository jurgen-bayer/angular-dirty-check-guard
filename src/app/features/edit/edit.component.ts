import { Component, ViewChild, ViewContainerRef  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDirty } from 'src/app/core/model/IDirty';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements IDirty {

    public input: string | null = null;
    @ViewChild('f') inputForm!: NgForm;

    constructor() { }
    
    isDirty(): boolean {
        return this.inputForm.dirty == true;
    }
    
    getRef(): ViewContainerRef {
        throw new Error('Method not implemented.');
    }

    public onSubmit() {
        this.inputForm.form.markAsPristine();
    }    
}
