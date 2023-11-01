const arr=["Women's wear","Men's wear","Jwellery","Fashion","cosmetic","Electronic","Watches","Glasses","Diwali Dhamaka","Happy New Year"]

const navDiv=document.getElementById("nav");

arr.forEach((item)=>{
    const btn=document.createElement("button");
    btn.innerText=item;
    navDiv.appendChild(btn);
})

 
const jwels=["Rings","Diamond","Earing","coins","Necklace","Bangles"]

const ol=document.createElement("ol")

jwels.forEach((item)=>{
    const li=document.createElement("li");
    li.innerText=item;
    li.setAttribute("type","a")
    ol.appendChild(li);
})

const mainDiv=document.getElementById("main");
  mainDiv.appendChild(ol);
  
  const mens=["Shirts","T-shirt","pants","Belts","formal Dress"];

  const olmens=document.createElement("ol");

  mens.forEach((item)=>{
    const li=document.createElement("li");
    li.innerText=item;
    li.setAttribute("type","i");
    olmens.appendChild(li);
  })

  mainDiv.appendChild(olmens);

  const womens=["Plazo","Kurti","Top","Night Dress"]

  const olwomens=document.createElement("ol");

  womens.forEach((item)=>{
    const li=document.createElement("li");
    li.innerText=item;
    li.setAttribute("type","A");
    olwomens.appendChild(li);
})
 mainDiv.appendChild(olwomens)

 const fashion=["popular","fashion","western","footwear"]
  
 const olfashion = document.createElement("ol");
 
 fashion.forEach((item)=>{
    const li=document.createElement("li");
    li.innerText=item;
    li.setAttribute("type","1");
    olfashion.appendChild(li);
 })
 mainDiv.appendChild(olfashion)

 const cosmetic=["Mascara","Blushes","Lipsticks","Foundation"]

 const olcosmetic = document.createElement("ol");

 cosmetic.forEach((item)=>{
    const li=document.createElement("li");
    li.innerText=item;
    li.setAttribute("type","I");
    olcosmetic.appendChild(li);
 })
 mainDiv.appendChild(olcosmetic);

const Electronic=["T.V","Mobile","Mixer","A.C"]

const olElectronic=document.createElement("ol");

Electronic.forEach((item)=>{
    const li=document.createElement("li");
    li.innerText=item;
    li.setAttribute("type","a"),
    olElectronic.appendChild(li);
})
mainDiv.appendChild(olElectronic);

const watch=["smart","Titan","Sonata","Appel"]

const olwatch=document.createElement("ol");

watch.forEach((item)=>{
    const li=document.createElement("li");
    li.innerText=item;
    li.setAttribute("type","A");
    olwatch.appendChild(li);
})
mainDiv.appendChild(olwatch)

const Glass=["lenskart","UV Rays","Black","Cat Eyes"]

const olGlass = document.createElement("ol");

Glass.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item ;
    li.setAttribute("type","i");
    olGlass.appendChild(li);
});
mainDiv.appendChild(olGlass);