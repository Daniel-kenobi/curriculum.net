import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuModule } from '../menu/menu.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModule } from '../error/error.module';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    ErrorModule
  ]
})
export class PerfilModule { }
