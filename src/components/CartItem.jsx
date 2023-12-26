import {toast} from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item, itemIndex}) => {

      const dispatch = useDispatch();

      const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("item Remove");
      }
    



return (
  <div className="flex flex-col items-center justify-between 
  hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10  rounded-xl outline">
    <div className="p-4">
      <img className="w-24 h-25 object-cover mx-auto overflow-auto" src={item.image} alt={item.title} />
      <h1 className="text-gray-700 font-semibold text-lg mt-2 overflow-auto">{item.title}</h1>
      <p className="text-gray-400 font-normal text-sm overflow-auto">{item.description.split("").slice(0, 10).join("") + "..."}</p>
      <div className="flex items-center justify-between mt-4 overflow-auto">
        <p className="text-green-600 font-semibold overflow-auto">${item.price}</p>
        <div onClick={removeFromCart}>
          <FcDeleteDatabase className="text-gray-500 text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
);
};


export default CartItem;
