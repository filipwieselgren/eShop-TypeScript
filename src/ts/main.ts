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

  window.onload = function () {
    
    document.getElementById("btnCart").addEventListener("click", displayCart);
    products();
    form();
    // cartClick();
    clicker();
  }
  
  let productInfo: Vacuum[] = [w1, w2, w3, w4, p1, p2, p3, p4, r1, r2, r3, r4];
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

  function clicker() {
    var modal: HTMLDivElement = document.getElementById(
      "myModal"
    ) as HTMLDivElement;

    // Get the button that opens the modal
    var btn: HTMLButtonElement = document.getElementById(
      "btnCart"
    ) as HTMLButtonElement;

    // Get the <span> element that closes the modal
    var span: HTMLSpanElement = document.getElementsByClassName(
      "close"
    )[0] as HTMLSpanElement;

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  let cartItems: Vacuum[] = [];
  function addToCart(clicked: number) {  

    if (cartItems.length == 0) {
      for (let i = 0; 0 == cartItems.length; i++) {

        cartItems.push(productInfo[clicked])
        console.log(productInfo[clicked]);
      }
    } else{
    
      for (let i = 0; i < cartItems.length; i++) {
      
        if (productInfo[clicked] === cartItems[i]) {
        
        productInfo[clicked].amount++;        

      } 
      else {
        cartItems.push(productInfo[clicked])
        console.log(productInfo[clicked]);

       }
      }
    }

    console.log(cartItems);
    
  }

  function displayCart() {
    for (let i = 0; i < cartItems.length; i++) {
      let modalContent: HTMLDivElement = document.getElementById(
        "prodFrame2"
      ) as HTMLDivElement;

      let productContainer: HTMLDivElement = document.createElement("div");
      productContainer.className = "productContainer";
      
      let imgContainer: HTMLDivElement = document.createElement("div");
      imgContainer.className = "imgContainer";
      let img: HTMLImageElement = document.createElement("img");
    
      let info: HTMLDivElement = document.createElement("div");
      info.className= "info";
      
      let productName: HTMLHeadingElement = document.createElement("h3");
      
      let amountDiv: HTMLDivElement = document.createElement("div");
      amountDiv.id = "amount"
      let span: HTMLSpanElement = document.createElement("span");
      let amountspan: HTMLSpanElement = document.createElement("span");
      
      let priceDiv: HTMLDivElement = document.createElement("div");
      priceDiv.id = "price"
      let span2: HTMLSpanElement = document.createElement("span");
      let priceSpan: HTMLSpanElement = document.createElement("span");

      let totalDiv: HTMLDivElement = document.createElement("div");
      totalDiv.id = "total"
      let span3: HTMLSpanElement = document.createElement("span");
      let totalSpan: HTMLSpanElement = document.createElement("span");
      
      modalContent.appendChild(productContainer);
      productContainer.appendChild(imgContainer);
      productContainer.appendChild(info);
      productContainer.appendChild(totalDiv);

      imgContainer.appendChild(img);

      info.appendChild(productName);
      info.appendChild(amountDiv);
      info.appendChild(priceDiv);

      amountDiv.appendChild(span);
      amountDiv.appendChild(amountspan);
      
      priceDiv.appendChild(span2);
      priceDiv.appendChild(priceSpan);

      totalDiv.appendChild(span3)
      totalDiv.appendChild(totalSpan)

      
      img.src = cartItems[i].imgsmall;
      productName.innerHTML = cartItems[i].productName;
      amountspan.innerHTML = `${productInfo[i].amount.toString()} kr`;
      priceSpan.innerHTML = `${productInfo[i].price.toString()} kr`;

    }
  }

  function form () {

    (function () {
      'use strict'
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        })
    })()
  }
