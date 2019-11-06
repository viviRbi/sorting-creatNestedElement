window.onscroll = function() {myFunction()};

var scroll=false;

function myFunction() {
  if (document.body.scrollTop > 50) {
  	alert('display');}
  	scroll=true;
  if(scroll){
  	alert = function(){};
  }
 }

var itemsArr=[
	{img:"img/001.jpg", name:"Bottle", price:"&#36;25"},
	{img:"img/002.jpg", name:"Helmet", price:"&#36;50"},
	{img:"img/003.jpg", name:"Frames", price:"&#36;4"},
	{img:"img/004.jpg", name:"Milk", price:"&#36;3"},
	{img:"img/005.jpg", name:"Watches", price:"&#36;100"},
	{img:"img/006.jpg", name:"Vase", price:"&#36;70"},
	{img:"img/007.jpg", name:"Box", price:"&#36;6"},
	{img:"img/008.jpg", name:"Food", price:"&#36;2"}
];

function display(){
	for (var i=0; i<itemsArr.length; i++){
		var itemHolder = document.createElement('div');
		var itemImage = document.createElement("img");
		var description = document.createElement('h2');
		var priceItem = document.createElement('span');

		description.innerHTML= itemsArr[i].name;
		priceItem.innerHTML= itemsArr[i].price;

		itemHolder.setAttribute('class', "col-md-3 col-sm-6 col-sm-12 item");
		itemImage.setAttribute('src', itemsArr[i].img);
		priceItem.setAttribute('class', 'price');

		document.querySelector('#itemsDisplay').appendChild(itemHolder);
		itemHolder.appendChild(itemImage);
		itemHolder.appendChild(description);
		description.appendChild(priceItem);
	}
};
display();