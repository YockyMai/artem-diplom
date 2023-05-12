import "./styles.css"

type Props = {
  title: string;
  img?:string;
  description: string
  price: string
}

const ProductCard = ({title,img,description,price}:Props) => {
  return (
    <div className="card">
      <img alt={"Нет изображения"} src={img} className="card-image"/>
      <h2 className="card-title">{title}</h2>
      <h3 className="description">
        {description}
      </h3>
      <div className="price">
        {price} ₽
      </div>
      <div className="card-container">
        <button type="button" className="CartBtn">В корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;
