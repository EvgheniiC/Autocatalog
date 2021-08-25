class Catalog extends Core 
{
	Layout = '';
	Item = null;
	Copy = null;

	init(){

		document.querySelectorAll('.add_cart').forEach((btn) => { // надо здесь вызывать рендер NavBar??
			btn.onclick = (e) => {
				this.Item = renderData.find((elem) => elem.id == e.target.value);

				this.Copy = CartData.find((elem) => elem.id == this.Item.id);

				if(this.Copy)
					this.Copy.count++;
				else
					CartData.push(this.Item);

				// this.renderHTML('.total_count', this.getCount());
				this.renderPart('.total_count', new Count());

				localStorage.setItem('cart', JSON.stringify(CartData));

				document.querySelector('.notify').classList.add('notify_show');
				setTimeout(() => {
					document.querySelector('.notify').classList.remove('notify_show');
				}, 2000);
			}
		})

	}

	getLayout(data = renderData)
	{
		if(data.length)
		{
			data.forEach((elem) => {
				this.Layout += `
					<div class="col s3 offset-s1">
						<div class="card">
					        <div class="card-image">
					          <img src="components/images/${elem.img}"  width="250" height="200">
					          <span class="card-title black" style="font-size: 16px">${ elem.title }</span>
					        </div>
					        <div class="card-content">
					          <p>Speed: ${ elem.speed } km/h</p>
					          <p>Price: ${ elem.price }  $</p>
					        </div>
					        <div class="card-action">
					          <button class="btn blue add_cart" value="${ elem.id }">Add to cart</button>
					        </div>
					      </div>
					</div>
				`
			});
		}
		else
		{
			this.Layout = '<h3 class="grey-text">No results</h3>';
		}

		return this.Layout;
	}

	render(data)
	{
		return `
			<div class="row">
				${ this.getLayout(data) }
			</div>

		`
	}
}