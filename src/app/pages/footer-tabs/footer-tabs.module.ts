import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FooterTabsPage } from './footer-tabs.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start'
  },
  {
    path: '',
    component: FooterTabsPage,
    children: [
      {
        path: 'start',
        loadChildren: '../start/start.module#StartPageModule'
      },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
      {
        path: 'shop',
        loadChildren: '../product/product.module#ProductPageModule'
      },
      {
        path: 'address',
        loadChildren: '../address/address.module#AddressPageModule'
      },
      {
        path: 'card',
        loadChildren: '../card/card.module#CardPageModule'
      }
    ]
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
  declarations: [FooterTabsPage]
})
export class FooterTabsPageModule {}
