import {Input} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";
import {useState} from "react";
import {$host} from "../../http";
import {removeResult, setResult} from "../../redux/slices/searchSlice";
import {useAppDispatch} from "../../redux/hook/hook";
import {useNavigate} from "react-router-dom";

const SearchCatalog = () => {
  const [searchValue,setSearchValue] = useState("")
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getItems = async () => {
    try{
      const res = await $host.get("/api/product/search", {
        params: {
          query: searchValue
        }
      })
      setSearchValue("")
      dispatch(setResult(res.data));
      navigate("/search")
    }catch (e) {
      dispatch(removeResult());
    }
  }

  const search = () => {
    getItems()
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) return
    getItems()
  }

  return (
    <div>
      <Input onKeyDown={onKeyDown} value={searchValue} onChange={(e)=>{setSearchValue(e.currentTarget.value)}} size={"md"} rightSection={<IconSearch onClick={search} style={{marginBottom: -42}}/>} placeholder={"Введите название блюда"}/>
    </div>
  );
};

export default SearchCatalog;
