import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {removeResult} from "../../redux/slices/searchSlice";
import ProductCard from "../../components/product-card";

const SearchPage = () => {
  const dispatch = useAppDispatch()
  const result = useAppSelector(state => state.search.result)

  useEffect(()=>{

    return () => {
      dispatch(removeResult())
    }
  },[])
  return (
    <div>
      {result.map((product)=>(
        <ProductCard obj={{img: product.img, description: product.info[0].description, price: String(product.price), title: product.name}}/>
      ))}
    </div>
  );
};

export default SearchPage;
