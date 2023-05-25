import {Select, Stack} from "@mantine/core";
import {useEffect, useState} from "react";
import {getAllProduct, removeProduct} from "../../../http/productAPI.ts";

const RemoveProduct = () => {
    const [check, setCheck] = useState<any>('')
    const [productData, setProductData] = useState<any>([]);
    useEffect(() => {
        const data = getAllProduct().then((data) => setProductData(data))
    }, [])
    const deleteProduct = async () => {
        if (check === '') alert('Выберите продукт')
        else try{
            const response = removeProduct(check)
        }catch(e){
            alert('Ошибка удаления продукта')
        }
    }
    return (
        <div>
            <Stack align={'center'}>
                <Select w={300} placeholder="Выберите продукт" value={check} onChange={(value) => setCheck(value)}
                        data={[
                            { value: '1', label: 'Холодные закуски' },
                            { value: '2', label: 'Паста' },
                            { value: '3', label: 'Салаты' },
                            { value: '4', label: 'Супы' },
                        ]}/>
                <button onClick={() => deleteProduct()} className={'CartBtn'} style={{backgroundColor: '#c72626', width: 300}}>Удалить продукт</button>
            </Stack>
        </div>
    );
};

export default RemoveProduct;
