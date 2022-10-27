let items = {
  cart: [],
};

const add_item = () => {
  let input_item = document.getElementById("add_item").value;
  let input_price = Number(document.getElementById("add_price").value);

  items.cart.push({ item: input_item, price: input_price });
  //   alert(input_item + input_price);
  showCart();
  localStorage.setItem("items", JSON.stringify(items));
};

const showCart = () => {
  let x = document.getElementById("items_in_cart");
  let current = "";

  if (items.cart == "") {
    x.innerHTML = "<strong>No items in cart</strong>";
  } else {
    items.cart.forEach((show_item) => {
      current += `<strong>Item: </strong>${show_item.item} <strong>Price: </strong> ${show_item.price} <hr />`;
    });
    x.innerHTML = current;
    document.getElementById("add_item").value = "";
    document.getElementById("add_price").value = "";
  }
};

showCart();
