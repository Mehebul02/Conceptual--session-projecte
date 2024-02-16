
const allBtn=document.getElementsByClassName('add-btn')
let count =0
for(const btn of allBtn){
   btn.addEventListener('click',function(){
    count +=1
    setInnerText('cart-count',count)
    const selectedContainer=document.getElementById('selected-place-container')
    

    
   })
}


// Set InnerText 
function setInnerText(id,value){
    document.getElementById(id).innerText=value

}

