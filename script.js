let selectedProduct="";
let selectedPrice=0;
let selectedImage="";

function showSection(id){
document.getElementById("about").style.display="none";
document.getElementById("market").style.display="none";
document.getElementById(id).style.display="block";
}

function logout(){
window.location.href="index.html";
}

function goJual(){
window.location.href="jual.html";
}

let products=[
["Ebook Premium",50000,"1512820790803-83ca734da794"],
["Template Website",100000,"1498050108023-c5249f4df085"],
["Aplikasi Kasir",150000,"1556740749-887f6717d7e4"],
["Desain Logo",80000,"1626785774573-4b799315345d"],
["Preset Foto",60000,"1500530855697-b586d89ba3ee"],
["Script Bot",90000,"1519389950473-47ba0277781c"],
["UI Kit",120000,"1559027615-cd4628902d4a"],
["Game Assets",110000,"1511512578047-dfb367046420"],
["Font Premium",40000,"1586717799252-bd134ad00e26"],
["Ebook Bisnis",75000,"1521587760476-6c12a4b040da"],
["Video Editing Pack",95000,"1574717024453-3540560d5f14"],
["Music Pack",70000,"1508704019882-f9cf40e475b4"],
["Icon Set",30000,"1545235617-9465d2a55698"],
["Landing Page Kit",85000,"1509395176047-4a66953fd231"],
["AI Tools Bundle",200000,"1677442136019-21780ecad995"]
];

let list=document.getElementById("productList");

if(list){
products.forEach(p=>{
let div=document.createElement("div");
div.className="product";

div.innerHTML=`
<img src="https://images.unsplash.com/photo-${p[2]}?w=300">
<p>${p[0]}</p>
<small>Rp${p[1]}</small>
`;

div.onclick=function(){showProduct(p[0],p[1],p[2]);};
list.appendChild(div);
});
}

function showProduct(n,p,img){
selectedProduct=n;
selectedPrice=p;
selectedImage=img;

document.getElementById("popup").style.display="flex";
document.getElementById("productName").innerText=n;
document.getElementById("price").innerText="Rp"+p;
document.getElementById("productImage").src="https://images.unsplash.com/photo-"+img+"?w=500";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

function beli(){
window.open("https://wa.me/6285708829924?text=Saya ingin membeli "+selectedProduct);
}

