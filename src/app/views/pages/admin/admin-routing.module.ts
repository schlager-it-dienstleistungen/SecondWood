import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierEditComponent } from './supplier/supplier-edit/supplier-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';


const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{
				path: 'suppliers',
				component: SupplierListComponent
			},
			{
				path: 'suppliers/add',
				component: SupplierEditComponent
			},
			{
				path: 'suppliers/add:id',
				component: SupplierEditComponent
			},
			{
				path: 'suppliers/edit',
				component: SupplierEditComponent
			},
			{
				path: 'suppliers/edit/:id',
				component: SupplierEditComponent
			},
			{
				path: 'adminproducts',
				component: ProductListComponent
			},
			{
				path: 'adminproducts/add',
				component: ProductEditComponent
			},
			{
				path: 'adminproducts/add:id',
				component: ProductEditComponent
			},
			{
				path: 'adminproducts/edit',
				component: ProductEditComponent
			},
			{
				path: 'adminproducts/edit/:id',
				component: ProductEditComponent
			},
			{
				path: 'users',
				component: UserListComponent
			},
			{
				path: 'users:id',
				component: UserListComponent
			},
			{
				path: 'users/add',
				component: UserEditComponent
			},
			{
				path: 'users/add:id',
				component: UserEditComponent
			},
			{
				path: 'users/edit',
				component: UserEditComponent
			},
			{
				path: 'users/edit/:id',
				component: UserEditComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
