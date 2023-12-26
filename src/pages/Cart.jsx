import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Cart = () => {

    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0) );
    }, [cart])

 return(
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    {
      cart.length > 0 ?
      (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5">
          <div> 
            {
              cart.map((item , index) =>{
                return <CartItem key={item.id} item = {item} itemIndex={index} />
              } )
            }
          </div>
          <div> 
            <div className="text-xl font-bold mb-8 right-6"> Your cart</div>
            <div className="bg-white rounded-lg p-5 shadow-lg">
              <div className="text-lg font-bold mb-6"> Summary </div>
              <p className="text-gray-500">
                <span>Total Items: {cart.length} </span>
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-5 shadow-lg">
              <p className="text-2xl font-bold mb-5">Total Amount : ${totalAmount}</p>
              <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded-md"> Checkout Now</button>
            </div>
          </div>
        </div>
      ):
        ( <div>
          <h1 className="text-4xl font-bold text-center mb-5"> Cart Empty </h1>
          <Link to={"/"}>
          <button className="bg-blue-500 text-white font-bold px-8 py-5 right-10 rounded-md">
          Shop Now
          </button>
          </Link>
          </div>)
        }
   </div>
 );
};

export default Cart;