import React, {useContext} from 'react'
import ShoppingContext from "../context/shopping/shoppingContext";

const CheckoutProduct = ({id, image, title, rating, price, hideButton}) => {
     const shoppingContext = useContext(ShoppingContext);
      const { reomveFromBasket } = shoppingContext;
    
  
  const removeFromBasketHandler = () => {
      removeFromBasket({id: id})
  };
    return (
    <div className="checkout_product">
      <img className="checkout_product_image"src={image} alt="" />
      <div className="checkout_product_info">
        <p className="checkout_product">{title}</p>
        <div className="checkout_product_rating">
          {[...Array(Number(rating) > 0 ? Math.floor(rating) : 0)].map((i) => (
            <p key={i}>⭐</p>
          ))}
        </div>

        <p className="checkout_product_price">
            <small>$</small>
            <strong>{price}</strong>
           </p>
            <!hideButton && (
        <button onClick={removeFromBasketHandler}
        >Remove From Basket</button>
      </div>
     
</div>
  )
}

export default CheckoutProduct