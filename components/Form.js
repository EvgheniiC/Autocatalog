class Form extends Core 
{
	name = ''
	surname = ''
	birthday = ''
	sex = ''
	adress = ''; 

	init(){}

	render()
	{
		return `
		<h3> <b> Please fill in the form below  </b> </h3>
		<form action="/form" method="post" >
			  <ul>
			    <li>
			      <label for="name" >Name:</label>
			      <input type="text" id="fname" name="fname" style="height:20px; width:100px"><br><br>
			    </li>
			    <li>
			      <label for="surname">Surname:</label>
			      <input type="text" id="surname" style="height:20px; width:80px">
			       <br /><br />	
			    </li>
			     <li>
			      <label for="adress">Adress:</label>
			      <input type="text" id="adress" style="height:20px; width:190px">
			       <br /><br />
			    </li>
			     <li>			      
			       <label for="birthday">Birthday:</label>
  					<input type="date" id="birthday" name="birthday" style="height:20px; width:150px">
  					 <br /><br />
			    </li>
			    <p><b>Your gender</b></p>
					<div>
					  <input type="radio" checked>
					  <label for="men">men</label>
					</div>
					<div>
					  <input type="radio">
					  <label for="women">women</label>
					</div>
			
			  </ul>
			  <ul>
			  	<li class="button">
			  		<button type="submit">Send your message</button>
				</li>
			  </ul>
		
		</form>
	
		`
	}


}

