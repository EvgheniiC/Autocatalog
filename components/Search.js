class Search extends Core 
{
	init()
	{
		document.querySelector('input').oninput = (e) => {
			// console.log(e.target.value)

			let SearchData = renderData.filter((elem) => elem.title.toLowerCase().includes(e.target.value.toLowerCase()));

			this.renderPart('.catalog', new Catalog().render(SearchData));
		}	
	}

	render()
	{
		return `
			<label>Search auto:</label>
			<input type="search" placeholder="Your value..." >
		`
	}
}