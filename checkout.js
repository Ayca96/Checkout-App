//? Döngüler ile event listener tanimlanabilir. Az sayida element var ise sorun olmaz ama cok fazla element varsa bu kaynak tüketimini arttirir.

// const minusbtn = document.querySelectorAll(".fa-minus");
// const plusbtn = document.querySelectorAll(".fa-plus");
// console.log(minusbtn);

// minusbtn.forEach((minus)=>{
//   minus.addEventListener("click",()=>{
//     console.log("-");
//   })
// })

// plusbtn.forEach((plus)=>{
//   plus.addEventListener("click",()=>{
//     console.log("+");
//   })
// })

//? Selectors

const deleteAllBtn = document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector("article.products");
//console.log(products);
//console.log(deleteAllBtn);

//? Event Listeners

deleteAllBtn.addEventListener("click", () => {
  products.textContent = "No Product";
  //console.log(products.classList );
  products.classList.add("no-product"); // elemente class ekler.
  //console.log(products.classList );

  //document.querySelector(".delete-div").style.display="none" display none sadece gizliyor kaldirmiyor. remove() kaldiriyor firekt.
  document.querySelector(".delete-div").remove();
});

products.addEventListener("click", (e) => {
  // contains() ayni includes() gibi. Icinde var mi varsa true  yoksa false. Burda includes kullanamayiz arraylerde kullaniyoruz. Ancak arraye cevirirsek kullanabiliriz.

  //todo Tek bir event listener ile tüm butonlari yakaladik.

  // console.log(e.target.classList);
  // if (e.target.classList.contains("fa-trash-can")) {
  //   alert("Cöpe tikladiniz.")
  // }else if(e.target.classList.contains("fa-plus")){
  //   alert("+'ya tikladiniz.")
  // }
  // else if(e.target.classList.contains("fa-minus")){
  //   alert("-'ye tikladiniz.")
  // } else{
  //   console.log("Bosluga tikladiniz.");
  // }

  if (e.target.classList.contains("fa-plus")) {
    //? static olarak kullanırsak hangi + butonuna basılırsa basılsın ilk quantity artar.
    // document.getElementById("quantity").textContent++
    e.target.previousElementSibling.textContent++;
    calculatePrice(e.target);
  } else if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.textContent > 1) {
      e.target.nextElementSibling.textContent--;
    }
    calculatePrice(e.target);
  } else if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest(".product").remove();
  }
});

const calculatePrice = (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price");
  // console.log(discountedPrice.textContent)
  const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price");

  const quantity = btn.parentNode.querySelector("#quantity");

  productPrice.textContent = (
    quantity.textContent * discountedPrice.textContent
  ).toFixed(2);
  totalPrice()
};

const totalPrice = () =>{
  const prices = document.querySelectorAll("#product-price");
  prices.forEach((price)=>{
    console.log(price.textContent);
  })
}

window.addEventListener("load", ()=>{
  totalPrice()
})