class Filter extends Core 
{
	Layout = ''

	init()
	{
		document.querySelector('select').onchange = (e) => {
			renderData = Data.filter((elem) => elem.type == e.target.value);

			if(!renderData.length)
				renderData = [ ...Data ];

			this.renderPart('.catalog', new Catalog());
		}
	}

	getLayout()
	{
		Types.forEach((elem) => {
			this.Layout += `<option value="${elem.id}">${elem.title}</option>`
		});

		return this.Layout;
	}


	render()
	{
		return `
			<label>Select type:</label>
			<select style="display: block;">
				<option value="0">All</option>

				${ this.getLayout() }
			</select>

		`
	}
}