class Home extends Core 
{

	render()
	{
		return `
			<div class="container">
				<h3>Home page title</h3>

				<div class="row">
					<div class="col s5">
						${ this.Part(Filter) }
					</div>
					<div class="col s6 offset-s1">
						${ this.Part(Search) }
					</div>
				</div>

				<div class="catalog">
					${ this.Part(Catalog) }
				</div>

			</div>
			${ this.Part(Notify) }
		`
	}
}