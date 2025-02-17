import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { HomeComponent } from './mainapp/home/home.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { CompanyComponent } from './mainapp/company/company.component';
import { MainappComponent } from './mainapp/mainapp.component';
import { CategoryComponent } from './mainapp/category/category.component';
import { BrandComponent } from './mainapp/brand/brand.component';
import { SupplierComponent } from './mainapp/supplier/supplier.component';
import { ProductComponent } from './mainapp/product/product.component';
import { SaleComponent } from './mainapp/sale/sale.component';
import { PurchaseComponent } from './mainapp/purchase/purchase.component';
import { authGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'confirm-email', component: ConfirmEmailComponent},
  
  { path: "mainapp", component: MainappComponent,canActivate: [authGuard],
    children: [
    { path:'category', component: CategoryComponent},
    { path: 'home', component: HomeComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'brand', component: BrandComponent },
    { path: 'sale', component: SaleComponent },
    { path: 'purchase', component: PurchaseComponent },
    { path: 'supplier', component: SupplierComponent },
    { path: 'product', component: ProductComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  ],
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
