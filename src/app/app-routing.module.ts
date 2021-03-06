import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
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
  { path: 'address-detail', loadChildren: './pages/address-detail/address-detail.module#AddressDetailPageModule' },
  { path: 'card-details', loadChildren: './pages/card-details/card-details.module#CardsPageModule' },
  { path: 'footer-tabs', loadChildren: './pages/footer-tabs/footer-tabs.module#FooterTabsPageModule' },
  { path: 'set-password', loadChildren: './pages/set-password/set-password.module#SetPasswordPageModule' },
  { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'thanks-recovery-password', loadChildren: './pages/thanks-recovery-password/thanks-recovery-password.module#ThanksRecoveryPasswordPageModule' },
  { path: 'address', loadChildren: './pages/address/address.module#AddressPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'confirm-location', loadChildren: './pages/confirm-location/confirm-location.module#ConfirmLocationPageModule' },
  { path: 'thanks-product', loadChildren: './pages/thanks-product/thanks-product.module#ThanksProductPageModule' },
  { path: 'rating', loadChildren: './pages/rating/rating.module#RatingPageModule' },
  { path: 'order-confirmation', loadChildren: './pages/order-confirmation/order-confirmation.module#OrderConfirmationPageModule' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
