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

deleteAllBtn.addEventListener("click",()=>{

products.textContent="No Product";
//console.log(products.classList );
products.classList.add("no-product"); // elemente class ekler.
//console.log(products.classList );

//document.querySelector(".delete-div").style.display="none" display none sadece gizliyor kaldirmiyor. remove() kaldiriyor firekt.
document.querySelector(".delete-div").remove()

})

products.addEventListener("click",(e)=>{
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


  if(e.target.classList.contains("fa-plus")){
    //? static olarak kullanirsak hangi + butonuna basilirsa ilk quantity(miktar) artar.
    //document.getElementById("quantity").textContent++
    e.target.previousElementSibling.textContent++
  }

})