export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Home',
					root: true,
					alignment: 'left',
					page: '/home'
// translate: 'MENU.HOME'
				},
				{
					title: 'Produkte',
					root: true,
					alignment: 'left',
					page: '/products'
				}
/*				{
					title: 'Produkte',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Produkte mit Filter',
							page: '/productswithfilter'
						},
						{
							title: 'Produkte mit Suche',
							page: '/productswithsearch'
						},
						{
							title: 'Produkte als Karten',
							page: '/productcards'
						},
						{
							title: 'Kategorien als Karten',
							page: '/cardlayout'
						}
					]
				}*/
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
