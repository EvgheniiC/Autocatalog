class Count
{
	init()
	{

	}

	getCount(){
		this.Count = 0;
		if (CartData.length){
			CartData.forEach((elem) => {
				this.Count += +elem.count;
			})
		}
		return this.Count;
	}

	render()
	{
		return this.getCount()
	}
}