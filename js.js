// window.onscroll = function() {myFunction()};

// var scroll=false;

// function myFunction() {
//   if (document.body.scrollTop > 50) {
//   	alert('display');}
//   	scroll=true;
//   if(scroll){
//   	alert = function(){};
//   }
//  }


//---------------------Nested Element--------------------------//

var itemsArr=[
	{img:"img/001.jpg", name:"Bottle", price:25, day: 1, max: 3},
	{img:"img/002.jpg", name:"Helmet", price:50, day: 2, max: 5},
	{img:"img/003.jpg", name:"Frames", price:4, day: 3, max: 3},
	{img:"img/004.jpg", name:"Milk", price:3, day: 4, max: 2},
	{img:"img/005.jpg", name:"Watches", price:100, day: 5, max: 3},
	{img:"img/006.jpg", name:"Vase", price:70, day: 6, max: 6},
	{img:"img/007.jpg", name:"Box", price:6, day: 7, max: 2},
	{img:"img/008.jpg", name:"Food", price:2, day: 8, max: 1}
];

var itemBought =[];



//---------------------Cart-bought items number---------------------//




function boughtFunction(){

	// take number of elements in the array
	var clickedDataNumber = this.getAttribute('data-number');
	var removedPlusButton = this;

	itemBought.push(itemsArr[clickedDataNumber]);

	var boughtDisplay= document.querySelector('#bought');
	var boughtDisplayMobile= document.querySelector('#boughtMobile');

       // Display number of Item bought

	var boughtValue=itemBought.length;

	boughtDisplay.innerHTML=boughtValue;
	boughtDisplayMobile.innerHTML=boughtValue;

	console.log(itemBought);

	removedPlusButton.classList.remove('fa-plus-square');

	}

//---------------------Display Items--------------------------//


function display(){
	
	for (var i=0; i<itemsArr.length; i++){

		var itemHolder = document.createElement('div');
		var itemImageHolder = document.createElement("div");
		var itemImage = document.createElement("img");
		var description = document.createElement('span');
		var priceItem = document.createElement('span');
		var bought = document.createElement('i');
		var info = document.createElement('div');


		description.innerHTML= itemsArr[i].name;
		priceItem.innerHTML= "&#36;" + itemsArr[i].price;


		itemImage.setAttribute('src', itemsArr[i].img);

		itemHolder.setAttribute('class', "col-lg-3 col-md-4 col-sm-6 col-xs-12 item hide");
		priceItem.setAttribute('class', 'price');
		itemImageHolder.setAttribute('class', 'itemImageHolder');
		bought.setAttribute('class', 'far fa-plus-square');
		info.setAttribute('class', 'info');

		 //get the number of all elements in the array
		 bought.setAttribute('data-number', i);

		document.querySelector('#itemsDisplay').appendChild(itemHolder);
		itemHolder.appendChild(itemImageHolder);
		itemImageHolder.appendChild(itemImage);
		itemHolder.appendChild(description);
		itemHolder.appendChild(info)
		info.appendChild(description);
		info.appendChild(priceItem);
		itemImageHolder.appendChild(bought);
		itemImageHolder.insertBefore(bought,itemImage);

		
		itemHolder.classList.remove("hide");
		itemHolder.classList.add("appear");
		
		bought.addEventListener('click', boughtFunction);

	}
		
		
}



display();


//---------------------Sorting-----------------------------------------//


function sort(){
	var ivalue= document.querySelector("#sort").value;
	let sortOrder = itemsArr.sort(function(a,b){
		switch (ivalue){

		 case "az":
			if (a.name > b.name) return 1;
			else if (b.name>a.name) return -1;
			return 0;
			break;

		case "za":
			if (b.name > a.name) return 1;
			else if (a.name>b.name) return -1;
			return 0;
			break;

		case "low":
			return a.price-b.price;
			break;

		case "high":
			return b.price-a.price;
			break;

		default:
			return a.day-b.day;
		}
	});

	itemsArr= sortOrder;
	deleteOldDisplay();
	display();
}


//---------------------Remove-----------------------------//

function deleteOldDisplay(){
	for (var i=0; i<itemsArr.length; i++){
		var parent = document.querySelector('#itemsDisplay');
		var child = parent.querySelector('.item');
		parent.removeChild(child);
	}
}

//---------------------Cart Remove/ inside remove --------------------//


document.querySelector("#popUpQuit").addEventListener('click', function(){

	document.getElementById("popUpOverlay").classList.remove('active');

	var wrapper=document.querySelectorAll('.wrapper');
	for (i=0; i<itemBought.length; i++){
	wrapper[i].remove();}
	});


//---------------------Cart Pop Up-----------------------------//

document.querySelector("#cart").addEventListener('click', popUp);

function popUp(){
	document.querySelector("#popUpOverlay").classList.add('active');
	for (var i=0; i<itemBought.length; i++){

		var wrapper=document.createElement('div');
		var row=document.createElement('div');
		var itemList=document.createElement('div');

		var popUpInfo=document.createElement('div');
		var popUpImage=document.createElement('img');
		var popUpPrice=document.createElement('span');

		var popUpCount=document.createElement('div');
		
		var input=document.createElement('input');
		var trash=document.createElement('i');

		wrapper.setAttribute('class', 'wrapper');
		row.setAttribute('class', 'row');
		itemList.setAttribute('class', 'container');

		popUpImage.setAttribute('class', 'popUpImage');
		popUpImage.setAttribute('src', itemBought[i].img);

		input.setAttribute('type', 'number');
		input.setAttribute('value', '1');
		
		trash.setAttribute('class', 'fas fa-trash transition');

		document.querySelector("#popUpList").appendChild(wrapper);
		wrapper.appendChild(row);
		row.appendChild(itemList);
		itemList.appendChild(popUpInfo);
		itemList.appendChild(popUpCount);

		popUpInfo.appendChild(popUpImage);
		popUpImage.appendChild(popUpPrice);

		popUpCount.appendChild(input);
		popUpCount.appendChild(trash);

		popUpPrice.innerHTML=itemBought[i].price;

		input.addEventListener('change', quantityChanged);
		trash.addEventListener('click',  removeBoughtItem);
	}

}

//---------------------Quantities-----------------------------//

function quantityChanged(event){
	var inputN = event.target;
	if (isNaN(inputN.value)|| inputN.value <=0){
		inputN.value =1;
	}
}


//---------------------Remove-----------------------------//


function removeBoughtItem(event){
	var remove = event.target;
	remove.parentElement.parentElement.parentElement.parentElement.remove();

	// var itemImageHolder = document.querySelector('itemImageHolder');
	// var button = document.createElement('i');


	var clickedDataNumber = this.getAttribute('data-number');

	var button = document.querySelectorAll('.far');
	console.log(button);

	itemBought.pop(itemsArr[clickedDataNumber]);
	console.log(itemBought);

	var boughtDisplay= document.querySelector('#bought');
	var boughtDisplayMobile= document.querySelector('#boughtMobile');

       // Display number of Item bought

	var boughtValue=itemBought.length;

	boughtDisplay.innerHTML=boughtValue;
	boughtDisplayMobile.innerHTML=boughtValue;

	// removedPlusButton.classList.add('fa-plus-square');
	
	// for (var i=0; i<button.length; i++){
	// 	button[clickedDataNumber].classList.add('fa-plus-square');}
}