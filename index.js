const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function halnDle(e) {
    count += 1;
    setInnerText("cart-count", count);
    const selectedContainer = document.getElementById(
      "selected-place-container"
    );
    const li = document.createElement("li");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    li.appendChild(p1);
    li.appendChild(p2);
    selectedContainer.appendChild(li);
    // Place Name
    const placeName = e.target.parentNode.childNodes[1].innerText;
    p1.innerText = placeName;

    //  Price
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    p2.innerText = price;

    totalPrice("total-cost", price);
    totalPrice("grand-total", price);

    const budget=getValue('budget')
    setInnerText('budget',budget-parseInt(price))
    if(budget-parseInt(price)<=0){
        alert('No Perses')
        return
    }
  });
}

// Total Price
function totalPrice(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById(id).innerText = total;
  grandTotal("other");
}
// Gran Total
function grandTotal(category) {
  const converter = getValue("total-cost");
  console.log(converter);
  if (category === "bus") {
    setInnerText("grand-total", converter + 100);
  } else if (category === "train") {
    setInnerText("grand-total", converter - 200);
  }
  else if(category ==='flight'){
    setInnerText("grand-total",converter + 500)
  }
  else{
    setInnerText("grand-total",converter)
  }
}

function getValue(id) {
  const budgetInnerText = document.getElementById(id).innerText;
  const budget = parseInt(budgetInnerText);
  return budget;
}

// Set InnerText
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
