const Types = [
	{ id: 1, title: 'Outlander' },
	{ id: 2, title: 'Sedan' },
	{ id: 3, title: 'Sportcar' }
];

const Data = [
	{ id: 1, title: 'BMW X5', speed: 250, type: 1, img: 'Bmw.jpg', count: 1 , price : 50000 },
	{ id: 2, title: 'Mercedes S500', speed: 240, type: 2, img: 'Mercides.jpg', count: 1, price : 55000 },
	{ id: 3, title: 'Lamborgini Galardo', speed: 350, type: 3, img: 'Lambo.jpg', count: 1, price : 100000 },
	{ id: 4, title: 'Bugatti', speed: 400, type: 3, img: 'Bugatti.jpg', count: 1, price : 150000 },
	{ id: 5, title: 'Range Rover', speed: 220, type: 3, img: 'RangeRover.jpg', count: 1 , price : 50000},
	{ id: 6, title: 'Ford Focus', speed: 200, type: 2, img: 'FordFocus.jpg', count: 1 , price : 10000},
	{ id: 7, title: 'Audi 100', speed: 150, type: 1, img: 'Audi100.jpg', count: 1, price : 20000 },
	{ id: 8, title: 'Kia Rio', speed: 180, type: 3, img: 'KiaRio.jpg', count: 1, price : 25000 },
	{ id: 9, title: 'Kia Sorento', speed: 190, type: 2, img: 'KiaSorento.jpg', count: 1, price : 15000 },
	{ id: 10, title: 'Tayota prius', speed: 180, type: 3, img: 'Tayotaprius.jpg', count: 1, price : 25000 },
	{ id: 11, title: 'Hundai', speed: 160, type: 1, img: 'Hundai.jpg', count: 1, price : 15000 },
	{ id: 12, title: 'Mazda', speed: 200, type: 3, img: 'Mazda.jpg', count: 1, price : 20000 },
	{ id: 13, title: 'Renault', speed: 210, type: 2, img: 'Renault.jpg', count: 1 , price : 25000},
	{ id: 14, title: 'Skoda', speed: 230, type: 1, img: 'Skoda.jpg', count: 1, price : 10000 },
	{ id: 15, title: 'WV', speed: 180, type: 1, img: 'WV.jpg', count: 1 , price : 10000},
	{ id: 16, title: 'Lada', speed: 150, type: 1, img: 'Lada.jpg', count: 1 , price : 5000},
	{ id: 17, title: 'Infiniti', speed: 250, type: 2, img: 'Infiniti.jpg', count: 1 , price : 50000},
	{ id: 18, title: 'Tesla', speed: 190, type: 1, img: 'Tesla.jpg', count: 1 , price : 150000}
];

let renderData = [ ...Data ];

let CartData = JSON.parse(localStorage.getItem('cart')) || [];