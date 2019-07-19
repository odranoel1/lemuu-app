import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SetPasswordPage } from './set-password.page';

// List of components to use
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: SetPasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [SetPasswordPage]
})
export class SetPasswordPageModule {}
