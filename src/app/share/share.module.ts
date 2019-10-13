import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ]
})
export class ShareModule { }
