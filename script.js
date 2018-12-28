var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
/*var deleteButton = document.createElement("button");
deleteButton.appendChild(document.createTextNode("Delete"));*/

function addDeleteButtons(){
	var listItems = ul.getElementsByTagName("li");
	for(var i=0 ; i< listItems.length; i++){
 		//console.log(listItems[i]);
 		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		//Margin ekle
		deleteButton.style.marginLeft = "15px";
 		listItems[i].appendChild(deleteButton);   
		deleteButton.onclick = removeParentNode;
	}
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	//Margin ekle
	deleteButton.style.marginLeft = "15px";
	li.appendChild(deleteButton);
	deleteButton.onclick = removeParentNode;
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeParentNode(){
	this.parentNode.parentNode.removeChild(this.parentNode);
}

addDeleteButtons(); // Delete Buttons for default items

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",function(e) {
    if(e.target && e.target.nodeName == "LI") {
        //console.log(e.target.id + " was clicked");
        console.log(e.target);
        e.target.classList.toggle("done");
    }
});
