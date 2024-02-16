
const allBtn=document.getElementsByClassName('add-btn')
let count =0
for(const btn of allBtn){
   btn.addEventListener('click',function halnDle (e){
    count +=1
    setInnerText('cart-count',count)
    const selectedContainer=document.getElementById('selected-place-container')
    const li =document.createElement('li')
    const p1=document.createElement("p")
    const p2 =document.createElement('p')
    li.appendChild(p1)
    li.appendChild(p2)
    selectedContainer.appendChild(li)
    // Place Name 
    const placeName=e.target.parentNode.childNodes[1].innerText
     p1.innerText=placeName

    //  Price 
    const price =e.target.parentNode.childNodes[3].childNodes[1].innerText
    p2.innerText=price

    // total cost 
    // let sum =0
    // const totalcost=document.getElementById('total-cost')

// totalPrice('total-cost',total)
// let total=0;
// const totalPrice=document.getElementById('total-cost').innerText
// const totalcost=parseInt(total)+parseInt(totalPrice);
// console.log(totalcost.innerText)

totalPrice("total-cost",price)
  
  
    
    

    
   })
}


// Total Price 
function totalPrice(id,value){
    const totalCost=document.getElementById(id).innerText;
    const total =parseInt(totalCost)+parseInt(value)
    document.getElementById(id).innerText=total

}

// Set InnerText 
function setInnerText(id,value){
    document.getElementById(id).innerText=value

}

