import {Select, Stack} from "@mantine/core";
import {useEffect, useState} from "react";
import {getAllProduct, removeProduct} from "../../../http/productAPI.ts";

const RemoveProduct = () => {
    const [check, setCheck] = useState<any>('')
    const [productData, setProductData] = useState<any>([]);
    useEffect(() => {
        getAllProduct().then((data) => setProductData(data))
    }, [])
    const deleteProduct = async () => {
        if (check === '') alert('Выберите продукт')
        else try {
            await removeProduct(check)
            setCheck('')
            getAllProduct().then((data) => setProductData(data))
            alert('Удаление продукта прошло успешно!')
        } catch (e) {
            alert('Ошибка удаления продукта')
        }
    }
    return (
        <div>
            <Stack align={'center'}>
                <Select w={300} placeholder="Выберите продукт" value={check} onChange={(value) => setCheck(value)}
                        data={productData.map((obj: any) => ({value: `${obj.id}`, label: `${obj.name}`}))}/>
                <button onClick={() => deleteProduct()} className={'CartBtn'}
                        style={{backgroundColor: '#c72626', width: 300}}>Удалить продукт
                </button>
            </Stack>
        </div>
    );
};

export default RemoveProduct;
