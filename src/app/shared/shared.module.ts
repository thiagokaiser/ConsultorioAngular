import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './crud.service';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [    
  ConfirmModalComponent
],
  imports: [
    CommonModule
  ],
  exports:[
    ConfirmModalComponent    
  ],
  entryComponents:[
    ConfirmModalComponent
  ]
})
export class SharedModule { }
