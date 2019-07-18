import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'start', loadChildren: './pages/start/start.module#StartPageModule' },
  { path: 'product', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'product-detail', loadChildren: './pages/product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'buy', loadChildren: './pages/buy/buy.module#BuyPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'historial', loadChildren: './pages/historial/historial.module#HistorialPageModule' },
  { path: 'suggest', loadChildren: './pages/suggest/suggest.module#SuggestPageModule' },
  { path: 'adress', loadChildren: './pages/adress/adress.module#AdressPageModule' },
  { path: 'cards', loadChildren: './pages/cards/cards.module#CardsPageModule' },
  { path: 'footer-tabs', loadChildren: './pages/footer-tabs/footer-tabs.module#FooterTabsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
