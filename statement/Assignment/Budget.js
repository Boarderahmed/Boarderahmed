totalBudget.innerHTML = " ";
totalSpent.innerHTML = `$0`;
totalRemain.innerHTML = `$2000`;
bud.style.display = "block";
let budgetData = [];

const Budget = () => {
  let spent = Number(totalSpent.innerHTML.replace("$", ""));
  let newAmount = Number(amount.value);

  spent += newAmount;
  totalSpent.innerHTML = `$${spent}`;

  let remaining = Number(totalBudget.innerHTML.replace("$", "")) - spent;
  totalRemain.innerHTML = `$${remaining}`;

  if (JSON.parse(localStorage.getItem("data"))) {
    budgetData = JSON.parse(localStorage.getItem("data"));
  } else {
    budgetData = [];
  }

  budgetData.push({ amount: newAmount, purpose: purpose.value });
  localStorage.setItem("data", JSON.stringify(budgetData));
  show.innerHTML = " ";

  budgetData.forEach((item, i) => {
    show.innerHTML += `<tr class="hover:bg-gray-50">
                <td class="px py-2 border-b">${i + 1}</td>
               <td class="px py-2 border-b">$${budgetData[i].amount}</td>
               <td class="px py-2 border-b">${budgetData[i].purpose}</td>
           </tr>`;
    amount.value = " ";
    purpose.value = " ";
  });
  const bot = () => {
    bud.style.display = "block";
    totalBudget.style.display = "none";
  };
};
const handleFetch = () => {
  const budgetData = JSON.parse(localStorage.getItem("data"));
  show.innerHTML = "";

  if (budgetData) {
    budgetData.forEach((item, i) => {
      show.innerHTML += `<tr class="hover:bg-gray-50">
                  <td class="px py-2 border-b">${i + 1}</td>
                  <td class="px py-2 border-b">$${item.amount}</td>
                  <td class="px py-2 border-b">${item.purpose}</td>
              </tr>`;
    });
  }
};
if (bud.value !== " ") {
  totalBudget.innerHTML = bud.value;
  bud.style.display = "none";
  totalBudget.style.display = "block";
} else {
}
handleFetch();
