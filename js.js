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
	{img:"img/001.jpg", name:"Bottle", price:25, day: 1},
	{img:"img/002.jpg", name:"Helmet", price:50, day: 2},
	{img:"img/003.jpg", name:"Frames", price:4, day: 3},
	{img:"img/004.jpg", name:"Milk", price:3, day: 4},
	{img:"img/005.jpg", name:"Watches", price:100, day: 5},
	{img:"img/006.jpg", name:"Vase", price:70, day: 6},
	{img:"img/007.jpg", name:"Box", price:6, day: 7},
	{img:"img/008.jpg", name:"Food", price:2, day: 8}
];

var itemBought =[];


//---------------------Cart-bought items number---------------------//




function boughtFunction(){

	// take number of elements in the array
	var clicked = this.getAttribute('data-number');

	itemBought.push(itemsArr[clicked]);
	console.log(itemBought);

	var boughtValue=itemBought.length;
	var boughtDisplay= document.querySelector('#bought');
	var boughtDisplayMobile= document.querySelector('#boughtMobile');
	boughtDisplay.innerHTML=boughtValue;
	boughtDisplayMobile.innerHTML=boughtValue;

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

//---------------------Cart Pop Up-----------------------------//

document.querySelector("#cart").addEventListener('click', popUp);

document.querySelector("#popUpQuit").addEventListener('click', function(){
	document.querySelector("#popUpOverlay").classList.remove('active');
});

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
		var plus=document.createElement('i');
		var input=document.createElement('input');
		var minus=document.createElement('i');

		wrapper.setAttribute('class', 'wrapper');
		row.setAttribute('class', 'row');
		itemList.setAttribute('class', 'container');

		popUpImage.setAttribute('class', 'popUpImage');
		popUpImage.setAttribute('src', itemBought[i].img);

		plus.setAttribute('class', 'fas fa-plus .minusPlus');
		minus.setAttribute('class', 'fas fa-minus .minusPlus');

		document.querySelector("#popUpList").appendChild(wrapper);
		wrapper.appendChild(row);
		row.appendChild(itemList);
		itemList.appendChild(popUpInfo);
		itemList.appendChild(popUpCount);

		popUpInfo.appendChild(popUpImage);
		popUpImage.appendChild(popUpPrice);

		popUpCount.appendChild(plus);
		popUpCount.appendChild(input);
		popUpCount.appendChild(minus);

		popUpPrice.innerHTML=itemBought[i].price;
		input.value=1;


	}
}

