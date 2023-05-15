import "./styles.css"
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {addItem, removeItem} from "../../redux/slices/cartSlice";
import {isAuth} from "../../redux/slices/isAuthSlice";

type Props = {
  obj: [{
      title: string;
      img?:string;
      description: string
      price: string
  }],
    toCart?: boolean | undefined
}

const ProductCard = ({obj, toCart}:Props) => {
    console.log(toCart)
    const currentAuth = useAppSelector(state => state.isAuth.isAuth)
    const dispatch = useAppDispatch()
    const addToCart = (obj) => {
        dispatch(addItem(obj))
    }
    const deleteProduct = (obj: any) => {
        dispatch(removeItem(obj));
        console.log('click')
    }
  return (
    <div className="card">
      <img alt={"Нет изображения"} src={obj.img} className="card-image"/>
      <h2 className="card-title">{obj.title}</h2>
      <h3 className="description">
        {obj.description}
      </h3>
      <div className="price">
        {obj.price} ₽
      </div>
        {currentAuth ? toCart === undefined ?
            <div className="card-container">
            <button  type="button" className="CartBtn" onClick={() => addToCart(obj)}>В корзину</button>
            </div> : '' : ''
        }
        {toCart && <button style={{backgroundColor: "#c72626"}} className={'CartBtn'} onClick={() => deleteProduct(obj)}>Убрать</button>}
    </div>
  );
};

export default ProductCard;
