import { ViewContainerRef } from "@angular/core";

export interface IDirty {
    isDirty(): boolean;
    getRef(): ViewContainerRef;
 }