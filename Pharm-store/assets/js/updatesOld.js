document.addEventListener('DOMContentLoaded', () => {
	const products = [
		{
			img: 'creme.webp',
			title: 'Lightening Cream',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '148.500',
			category: 'крема',
			categoryId: 2,
		},
		{
			img: 'serum.webp',
			title: 'Lightening Serum',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '148.500',
			category: 'спреи',
			categoryId: 3,
		},
		{
			img: 'geverlle.webp',
			title: 'Foundation Creame',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '115.500',
			category: 'крема',
			categoryId: 2,
		},
		{
			img: 'lotion.webp',
			title: 'Anti Hairloss Lotion',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '181.500',
			category: 'спреи',
			categoryId: 3,
		},
		{
			img: 'hairfortem.webp',
			title: 'Hair Forte M',
			manafacturer: 'Турция',
			volume: 60,
			quantity: 1,
			price: '165.000',
			category: 'спреи',
			categoryId: 3,
		},
		{
			img: 'hairfortew.webp',
			title: 'Hair Forte W',
			manafacturer: 'Турция',
			volume: 60,
			quantity: 1,
			price: '165.000',
			category: 'спреи',
			categoryId: 3,
		},
		{
			img: 'xpercia.webp',
			title: 'Xpecia W',
			manafacturer: 'Турция',
			volume: 60,
			measure: 'таблеток',
			quantity: 1,
			price: '165.000',
			category: 'таблетки',
			categoryId: 1,
		},
		{
			img: 'xperciam.webp',
			title: 'Xpecia M',
			manafacturer: 'Турция',
			volume: 60,
			measure: 'таблеток',
			quantity: 1,
			price: '165.000',
			category: 'таблетки',
			categoryId: 1,
		},
		{
			img: 'sadbe.webp',
			title: 'Sadbe',
			manafacturer: 'Турция',
			volume: 8,
			quantity: 1,
			price: '165.000',
			category: 'спреи',
			categoryId: 3,
		},
		{
			img: 'sadbeforte.webp',
			title: 'Sadbe Forte',
			manafacturer: 'Турция',
			volume: 8,
			quantity: 1,
			price: '176.000',
			сategory: 'спреи',
			categoryId: 3,
		},
		{
			img: 'postopgel.webp',
			title: 'Postop Gel',
			manafacturer: 'Турция',
			volume: 150,
			quantity: 1,
			price: '220.000',
			category: 'спреи',
			categoryId: 3,
		},
		{
			img: 'postopfoam.webp',
			title: 'Postop Foam',
			manafacturer: 'Турция',
			volume: 100,
			quantity: 1,
			price: '220.000',
			category: 'спреи',
			categoryId: 3,
		},
		{
			img: 'vitilexine.webp',
			title: 'Vitilexine',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '225.500',
			category: 'крема',
			categoryId: 2,
		},
		{
			img: 'lipofiller.webp',
			title: 'Lipo Filler',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '220.000',
			category: 'спреи',
			categoryId: 3,
		},
		{
			img: 'tranacix.webp',
			title: 'Tranacix',
			manafacturer: 'Франция',
			volume: 30,
			measure: 'гр',
			quantity: 1,
			price: '264.000',
			category: 'крема',
			categoryId: 2,
		},
		{
			img: 'menopecia.webp',
			title: 'Menopecia',
			manafacturer: 'Турция',
			volume: 60,
			measure: 'таблеток',
			quantity: 1,
			price: '165.000',
			category: 'таблетки',
			categoryId: 1,
		},
	];

	let productsFilter = [...products];

	const container = document.querySelector('.products__wrapper');

	const filter = document.querySelector('.products__categories');

	const pagination = document.querySelector('.pagination');

	let page = 1;

	const paginationRender = (count) => {
		const li = document.querySelectorAll('.page-item');

		li.forEach((item) => {
			item.remove();
		});

		const ul = document.querySelector('.pagination');

		for (let i = 0; i < count; i++) {
			const li = document.createElement('li');
			li.classList.add('page-item');
			if (page == i + 1) {
				li.classList.add('active');
			}

			li.innerHTML = ` <span class="page-link page-link-btn" value=${i + 1}>${i + 1}</span>`;
			ul.append(li);
		}
	};

	const render = (arr, page) => {
		paginationRender(arr.length / 6);

		for (let i = page * 6 - 6; i < page * 6; i++) {
			const div = document.createElement('div');
			div.classList.add('products__item');

			div.innerHTML = `
					<div class="products__item-img">
						<img src="./assets/img/product/${arr[i].img}" alt="">
					</div>
					<div class="products__item-info">
					<div class="products__item-title"><b>${arr[i].title}</b></div>
					<div class="products__item-manufacturer"><b>Производитель:</b> ${arr[i].manafacturer}</div>
					<div class="products__item-volume"><b>Объем:</b> <span class="color-g">${arr[i].volume}</span> ${
				arr[i].measure ? arr[i].measure : ''
			}</div>
					<div class="products__item-number"><b>Количество:</b> ${arr[i].quantity}</div>
					<div class="products__item-additionally">
							<div class="products__item-additionally__price">${arr[i].price}</div>
							<div class="products__item-additionally__cart">
									<span class="badge cbdg1"> </span>
							</div>
					</div>
					</div>  
			`;

			container.append(div);
		}
	};
	render(products, page);

	const remove = () => {
		const list = document.querySelectorAll('.products__item');

		list.forEach((item) => {
			item.remove();
		});
	};

	const selectActive = (current) => {
		for (let i = 0; i < filter.childElementCount; i++) {
			filter.children[i].classList.remove('active');
		}
		current.classList.add('active');
	};

	const find = async (id) => {
		return new Promise((resolve) => {
			products.forEach((item, index) => {
				Number(id) === item.categoryId ? productsFilter.push(item) : false;
				index === products.length - 1 ? resolve() : false;
			});
		}).then(() => {
			render(productsFilter, page);
		});
	};

	pagination.addEventListener('click', (e) => {
		if (e.target.getAttribute('value')) {
			remove();
			page = e.target.getAttribute('value');
			render(productsFilter, page);
		}
	});

	filter.addEventListener('click', (e) => {
		// REMOVE HTML ELEMENTS
		remove();

		// CLEAR FILTER ARR
		productsFilter = [];

		// SELECT ACTIVE
		selectActive(e.target);

		// FIND PRODUCTS AND RENDER
		e.target.getAttribute('categoryId') !== 'all'
			? find(e.target.getAttribute('categoryId'))
			: render(products, page);
	});
});
