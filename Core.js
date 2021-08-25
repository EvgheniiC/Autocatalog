class Core 
{
	El = {}
	Count = 0;

	init(Selectors)
	{
		Selectors.forEach((elem) => this.El[elem.key] = document.querySelector(elem.id));
	}

	renderHTML(Out, HTML)
	{
		document.querySelector(Out).innerHTML = HTML;
	}

	renderPart(Out, Component)
	{
		setTimeout(() => {
			Component.init();
		})
			
		document.querySelector(Out).innerHTML = Component.render();
	}

	Part(Component)
	{
		setTimeout(() => {
			new Component().init();
		})

		return new Component().render();
	}

	static getRoute()
	{
		const URI = window.location.search.split('=').pop();

		const Routes = [
			{ path: '', component: Home },
			{ path: 'cart', component: Cart }
		];

		return Routes.find((elem) => elem.path == URI)?.component || NotFound; 
	}

	static renderAll(Out, Components)
	{
		Components.forEach((obj) => {
			document.querySelector(Out).innerHTML += new obj().render();
		});
	}
}

