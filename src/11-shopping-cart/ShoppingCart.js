import { useState } from "react";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

function ShoppingCart() {
  //  const cart = [{ name: "apple", quantity: 3, price: 0.39 }];
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const cartCopy = [...cart];
    const itemInCart = cartCopy.find((i) => i.name === item.name);
    if (itemInCart) {
      itemInCart.quantity += 1;
      setCart(cartCopy);
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const increment = (name) => {
    const cartCopy = [...cart]
    const itemInCart = cartCopy.find(i => i.name === name)
    itemInCart.quantity += 1;
    setCart(cartCopy)
  }
  const decrement = (name) => {
    const cartCopy = [...cart]
    const itemInCart = cartCopy.find(i => i.name === name)
    if(itemInCart.quantity>1){
      itemInCart.quantity -= 1;
      setCart(cartCopy)
    } else {
      setCart(cartCopy.filter(i=> i.name!==itemInCart.name))
    }
  }
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button
                  onClick={() => {
                    decrement(item.name)
                  }}>
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => {
                    increment(item.name)
                  }}>+</button>
              </p>
              <p>
                Subtotal: ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${cart.reduce((acc,i)=>acc+(i.quantity*i.price),0)}</h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
