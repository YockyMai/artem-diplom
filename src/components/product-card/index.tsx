import "./styles.css"
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {addItem, removeItem} from "../../redux/slices/cartSlice";

export type Props = {
  obj: {
      id: number;
      name: string;
      img?:string;
      description: string
      price: number
      info: {
          description: string;
      }[],
      type: {
          id: number,
          name: string
      }
  },
    toCart?: boolean | undefined
}

const ProductCard = ({obj, toCart}:Props) => {
    const currentAuth = useAppSelector(state => state.isAuth.isAuth)
    const dispatch = useAppDispatch()
    const addToCart = (obj:any) => {
        dispatch(addItem(obj))
    }
    const deleteProduct = (obj: any) => {
        dispatch(removeItem(obj));
    }
  return (
    <div className="card">
      <img alt={"Нет изображения"} src={`http://localhost:7000/${obj.img}`} className="card-image"/>
      <h2 className="card-title">{obj.name}</h2>
      <h3 className="description">
        {obj.info[0].description}
      </h3>
      <div className="price">
          {toCart &&
            <div>
                Всего {obj.count + 1}
            </div>}
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
