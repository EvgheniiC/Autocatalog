class Table extends Core 
{
	Layout  = '';
	Totalprice = 0;
	Totalcount = 1;

	init(){

		this.getTotalprice();
			
		document.querySelectorAll('.count').forEach((btn,index) =>{
			btn.onclick = () => {
				CartData[index].count = btn.value;

				this.renderHTML('.price', `<p> Totalprice = 	${ this.getTotalprice() } </p>`)
				this.renderPart('.total_count', new Count());

   			localStorage.setItem('cart',  JSON.stringify(CartData));
				}
		})	

		document.querySelectorAll('.remove_btn').forEach((btn, index) => {
			btn.onclick = () =>	{
				CartData.splice(index, 1);

				localStorage.setItem('cart', JSON.stringify(CartData));

				this.renderPart('.collection', new Table());
				// this.renderHTML('.total_count', this.getCount());
				this.renderPart('.total_count', new Count());
				
			}
		})

		if(!CartData.length)
			document.querySelector('.form_cart').innerHTML = '';

	}

	getCartData()
	{
		if(CartData.length)
		{
			CartData.forEach((elem) => {
				this.Layout += `
					<div class="collection-item row" id = "posts">
						<div class="col s3">
							<div class="product_img">
								<img src="components/images/${elem.img}" />
							</div>
						</div>
						<div class="col s5">
							<p>Product name: ${ elem.title } </p>
							<p>Product speed: ${ elem.speed } km/h </p>
							<p>Product price: ${ elem.price } $ </p>
							<p>Count: <input class="count" type="number" value="${ elem.count }" step="1" min="1"  /></p>
						</div>
						<div class="col right">
							<button class="btn red remove_btn">Remove</button>
						</div>
					</div>
				`
			})
		}
		else 
		{
			this.Layout = `<h3 class="grey-text">Cart is empty</h3>`
		}

		return this.Layout;
	}

	getTotalprice(){

		this.Totalprice = 0;

		if(CartData.length){
			CartData.forEach((elem) => {
			 this.Totalprice += elem.count * elem.price;
			})
		}
		console.log('Total')
		return this.Totalprice		
	}


	render()
	{
		return `
				
				<div class="collection" id="co">
					${ this.getCartData() }
					<div class="price">
								<p> Totalprice = 	${ this.getTotalprice() } </p>
					</div>
				</div>


		`
	}


}

