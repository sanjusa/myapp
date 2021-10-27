import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { DemoModule } from './demo/demo.module';
import { CustomformComponent } from './customform/customform.component';
import { ModalComponent } from './modal/modal.component';
import { BindingComponent } from './binding/binding.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CustomformComponent,
    ModalComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HomeModule,
    AdminModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
