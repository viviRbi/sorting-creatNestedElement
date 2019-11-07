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

var startSorting = false;

function display(){
	
	for (var i=0; i<itemsArr.length; i++){

		var itemHolder = document.createElement('div');
		var itemImageHolder = document.createElement("div");
		var itemImage = document.createElement("img");
		var description = document.createElement('h2');
		var priceItem = document.createElement('span');
		var symbol = document.createElement('span');

		description.innerHTML= itemsArr[i].name;
		priceItem.innerHTML= itemsArr[i].price;
		symbol.innerHTML="&#36;";

		itemImage.setAttribute('src', itemsArr[i].img);

		itemHolder.setAttribute('class', "col-md-3 col-sm-6 col-xs-12 item hide");
		priceItem.setAttribute('class', 'price');
		symbol.setAttribute('class', 'money');
		itemImageHolder.setAttribute('class', 'itemImageHolder');


		document.querySelector('#itemsDisplay').appendChild(itemHolder);
		itemHolder.appendChild(itemImageHolder);
		itemImageHolder.appendChild(itemImage);
		itemHolder.appendChild(description);
		description.appendChild(priceItem);
		priceItem.appendChild(symbol);

		
		itemHolder.classList.remove("hide");
		itemHolder.classList.add("appear");

		}
	}



display();


//---------------------Sorting-----------------------------------------//


function sort(){
	console.log("on");
	var ivalue= document.querySelector("#sort").value;
	let sortOrder = itemsArr.sort(function(a,b){
		switch (ivalue){

		 case "az":
			console.log ('a to z');
			if (a.name > b.name) return 1;
			else if (b.name>a.name) return -1;
			return 0;
			break;

		case "za":
			console.log ('z to a');
			if (b.name > a.name) return 1;
			else if (a.name>b.name) return -1;
			return 0;
			break;

		case "low":
			console.log ('low');
			return a.price-b.price;
			break;

		case "high":
			console.log ('low');
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


//---------------------Remove-----------------------------------------//

function deleteOldDisplay(){
	for (var i=0; i<itemsArr.length; i++){
		var parent = document.querySelector('#itemsDisplay');
		var child = parent.querySelector('.item');
		parent.removeChild(child);
	}
}
