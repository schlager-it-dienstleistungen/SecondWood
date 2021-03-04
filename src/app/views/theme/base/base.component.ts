// Angular
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
// RxJS
import { Observable, Subscription } from 'rxjs';
// Object-Path
import * as objectPath from 'object-path';
// Layout
import { LayoutConfigService, MenuConfigService, PageConfigService } from '../../../core/_base/layout';
import { HtmlClassService } from '../html-class.service';
import { LayoutConfig } from '../../../core/_config/layout.config';
import { MenuConfig } from '../../../core/_config/menu.config';
import { PageConfig } from '../../../core/_config/page.config';
// User permissions
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { currentUserPermissions, currentUserRoleIds, Permission, Role } from '../../../core/auth';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/reducers';
// Auth
import { AuthService } from '../../../core/auth/';
import { RolesTable } from 'src/app/core/auth/_server/roles.table';

@Component({
	selector: 'kt-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit, OnDestroy {
	// Public variables
	selfLayout: string;
	asideDisplay: boolean;
	asideSecondary: boolean;
	subheaderDisplay: boolean;
	fluid: boolean;

	// Private properties
	private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
	private currentUserPermissions$: Observable<Permission[]>;
	private currentUserRoles$: Observable<number[]>;


	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 * @param menuConfigService: MenuConfifService
	 * @param pageConfigService: PageConfigService
	 * @param htmlClassService: HtmlClassService
	 * @param store
	 * @param permissionsService
	 */
	constructor(
		private layoutConfigService: LayoutConfigService,
		private menuConfigService: MenuConfigService,
		private pageConfigService: PageConfigService,
		private htmlClassService: HtmlClassService,
		private store: Store<AppState>,
		private auth: AuthService,
		private permissionsService: NgxPermissionsService,
		private rolesService: NgxRolesService) {
		this.loadRolesWithPermissions();

		// register configs by demos
		this.layoutConfigService.loadConfigs(new LayoutConfig().configs);
		this.menuConfigService.loadConfigs(new MenuConfig().configs);
		this.pageConfigService.loadConfigs(new PageConfig().configs);

		// setup element classes
		this.htmlClassService.setConfig(this.layoutConfigService.getConfig());

		const subscr = this.layoutConfigService.onConfigUpdated$.subscribe(layoutConfig => {
			// reset body class based on global and page level layout config, refer to html-class.service.ts
			document.body.className = '';
			this.htmlClassService.setConfig(layoutConfig);
		});
		this.unsubscribe.push(subscr);
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		const config = this.layoutConfigService.getConfig();
		this.selfLayout = objectPath.get(config, 'self.layout');
		this.asideDisplay = objectPath.get(config, 'aside.self.display');
		this.asideSecondary = objectPath.get(config, 'aside-secondary.self.display');
		this.subheaderDisplay = objectPath.get(config, 'subheader.display');
		this.fluid = objectPath.get(config, 'content.width') === 'fluid';

		// let the layout type change
		const subscr = this.layoutConfigService.onConfigUpdated$.subscribe(cfg => {
			setTimeout(() => {
				this.selfLayout = objectPath.get(cfg, 'self.layout');
			});
		});
		this.unsubscribe.push(subscr);
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.unsubscribe.forEach(sb => sb.unsubscribe());
	}

	/**
	 * NGX Permissions, init roles
	 * https://www.npmjs.com/package/ngx-permissions/v/8.1.1
	 */
	loadRolesWithPermissions() {
		this.currentUserRoles$ = this.store.pipe(select(currentUserRoleIds));
		const rolesSubscr = this.currentUserRoles$.subscribe(res => {
			if (!res || res.length === 0) {
				return;
			}

			this.rolesService.flushRoles();
			this.permissionsService.flushPermissions();

			// Each Role
			res.forEach(roleId => {
				this.auth.getRoleById(roleId).subscribe(role => {

					// Get Permissions
					this.auth.getRolePermissions(role.id).subscribe(perm => {

						// Only PermissionNames
						const permissions = perm.map(onePerm => onePerm.name);

						// Add Role to NgxRoleService
						this.rolesService.addRole(role.title, permissions);

						permissions.forEach(pm => {
							// Add Permissions to NgxPermissionsService
							this.permissionsService.addPermission(pm);
						});
					});
				});
			});
		});
		this.unsubscribe.push(rolesSubscr);
	}
}
