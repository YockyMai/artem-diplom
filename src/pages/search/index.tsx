import {useAppSelector} from "../../redux/hook/hook";
import ProductCard from "../../components/product-card";
import "./styles.css"

const SearchPage = () => {
  const result = useAppSelector(state => state.search.result)

  return (
    <div>

      {result.length > 0 ?
        <>
          <h2 style={{textAlign: "center"}}>
            Результаты поиска
          </h2>
          <div className={"searchItems"}>
            {result.map((product)=>(
              <ProductCard obj={{img: `http://localhost:7000/${product.img}`, description: product.info[0].description, title: product.name, price: String(product.price)}}/>
            ))}
          </div>
        </> :
        <div>
          <h2 style={{textAlign: "center"}}>
            Нет результатов
          </h2>
        </div>
      }
    </div>
  );
};

export default SearchPage;
