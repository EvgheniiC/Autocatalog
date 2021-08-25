class NavBar extends Core 
{
	LogoName = 'Autoscout24'

	init(){
		
	}


	render()
	{
		return `
			  <nav class="blue">
			    <div class="nav-wrapper container">
			      <a href="#" class="brand-logo right">${ this.LogoName }</a>
			      <ul id="nav-mobile" class="left hide-on-med-and-down">
			        <li><a href="index.html">Home</a></li>
			        <li><a href="index.html?page=cart">Cart</a></li>
			        <li><i class="material-icons">work</i></li>
			         <li><a class="total_count">${ this.Part(Count) }</a></li>

			      </ul>
			    </div>
			  </nav>
		`
	}
}
