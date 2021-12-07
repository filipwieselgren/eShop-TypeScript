import { Vacuum } from "./models/Vacuum";
import {
	w1,
	w2,
	w3,
	w4,
	p1,
	p2,
	p3,
	p4,
	r1,
	r2,
	r3,
	r4,
} from "./models/Vacuumobjects";
import { clicker } from "./models/Clicker";
import { form } from "./models/Form";
import { addToCart } from "./models/addToCart";
import { displayCart } from "./models/displayCart";




window.onload = function () {
	// cartClick();
	clicker();
	products();
	form();

	document.getElementById("btnCart").addEventListener("click", displayCart);
};
export let productInfo: Vacuum[] = [w1, w2, w3, w4, p1, p2, p3, p4, r1, r2, r3, r4];

let wirelessContainer: HTMLDivElement = document.getElementById(
	"wirelesscontainer"
) as HTMLDivElement;

let powerfullContainer: HTMLDivElement = document.getElementById(
	"powerfullcontainer"
) as HTMLDivElement;
let robotContainer: HTMLDivElement = document.getElementById(
	"robotcontainer"
) as HTMLDivElement;

function products() {
	for (let i = 0; i < productInfo.length; i++) {
		// productcontainer div som ska ligga innanför wirelesscontainer
		let productContainer = document.createElement("div");
		productContainer.className = "productcontainer";

		// imgcontainer div som ska ligga innanför productContainer
		let imgContainer = document.createElement("div");
		imgContainer.className = "imgcontainer";
		imgContainer.innerHTML = productInfo[i].imgsmall;

		// div som ska ha vacuumheader, vacuuminfo, productbtns
		let productInfoContainer = document.createElement("div");
		productInfoContainer.className = "productInfoContainer";

		// html för vacuumheader, vacuuminfo, price, productbtns
		let vacuumHeader = document.createElement("h2");
		vacuumHeader.className = "vacuumheader";
		vacuumHeader.innerHTML = productInfo[i].discriptionlandpageh2;

		let vacuumInfo = document.createElement("div");
		vacuumInfo.className = "vacuuminfo";
		vacuumInfo.innerHTML = productInfo[i].discriptionlandpagespan;

		let price = document.createElement("h2");
		price.className = "price";
		price.innerHTML = `${productInfo[i].price.toString()} kr`;

		let productBtns = document.createElement("div");
		productBtns.className = "productbtns";

		let readMoreBtn = document.createElement("button");
		readMoreBtn.className = "readmore";
		readMoreBtn.innerHTML = productInfo[i].readmorebtn;

		let addToCartBtn = document.createElement("button");
		addToCartBtn.className = "addtocart";
		addToCartBtn.innerHTML = productInfo[i].addtocartbtn;
    productContainer.addEventListener("click", ()=>{addToCart(i)})


		//<span></span> innanför vacuuminfo
		let vacuumInfoSpan = document.createElement("span");

		if (productInfo[i].category == "wireless") {
			wirelessContainer.appendChild(productContainer);
		} else if (productInfo[i].category == "powerfull") {
			powerfullContainer.appendChild(productContainer);
		} else if (productInfo[i].category == "robot") {
			robotContainer.appendChild(productContainer);
		}

		// appendChild
		productContainer.appendChild(imgContainer);
		productContainer.appendChild(productInfoContainer);
		productInfoContainer.appendChild(vacuumHeader);
		productInfoContainer.appendChild(vacuumInfo);
		productInfoContainer.appendChild(price);
		productInfoContainer.appendChild(productBtns);
		productBtns.appendChild(readMoreBtn);
		productBtns.appendChild(addToCartBtn);
		vacuumInfo.appendChild(vacuumInfoSpan);
	}
}





