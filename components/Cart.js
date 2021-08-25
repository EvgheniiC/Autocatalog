class Cart extends Core 
{
	init()
	{
	}

	render()
	{
		return `
			<div class="container">
				<h1> <b>Your order  </b> </h1>
				<div class="table">
					${ this.Part(Table) }
				</div>

				<div class="table form_cart">
					${ CartData.length ? this.Part(Form) : '' }
				</div>
			
			</div>
			
		`
	}
}