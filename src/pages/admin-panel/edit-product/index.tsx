import {FileButton, NumberInput, Select, Stack, Text, TextInput} from "@mantine/core";
import {useEffect, useState} from "react";
import {$authHost, $host} from "../../../http";

const EditProduct = () => {
    const [productData, setProductData] = useState<any[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

    const [typeId, setTypeId] = useState<null | string>(null);
    const [img, setImg] = useState<File | null>(null);
    const [price, setPrice] = useState<number | ''>('');
    const [info, setInfo] = useState('');
    const [name, setName] = useState('');
    useEffect(() => {
      $host.get("/api/product/getAll").then(({data}:any)=>{
        setProductData(data.rows)
      })
    }, [])

    useEffect(()=>{
      if (selectedProductId) {
        const product = productData.find((el)=>el.id === Number(selectedProductId))
        setTypeId(product.type.id)
        setPrice(product.price)
        setInfo(product.info[0].description)
        setName(product.name)
      }
    },[selectedProductId])


    const resetFields = () => {
      $host.get("/api/product/getAll").then(({data}:any)=>{
        setProductData(data.rows)
      })
      setSelectedProductId(null)
      setName('')
      setTypeId(null)
      setImg(null)
      setPrice('')
      setInfo('')
    }

    const onSubmit = async () => {
      try {
        if (name.length <= 0 || !typeId || info.length <=0 || typeof price !== "number" || !selectedProductId) {
          return alert("Заполните все поля для изменения товара")
        }
        const formData = new FormData()
        formData.append("name", name)
        formData.append("productId", selectedProductId)
        if (img) formData.append("img", img)
        formData.append("typeId", typeId)
        formData.append("price", price.toString())
        formData.append("info", JSON.stringify([{title: name, description: info}]))
        await $authHost.post("/api/product/edit", formData)
        resetFields()
        alert("Товар изменен!")
      } catch (e) {
        resetFields()
        alert("Произошла ошибка при изменение товара")
      }
    }

    return (
        <div>
            <Stack align={'center'}>
                <Text size={30}>Редактирование товара</Text>
              <Select w={300} placeholder="Выберите продукт" value={selectedProductId} onChange={(value) => setSelectedProductId(value)}
                      data={productData.map((obj: any) => ({value: `${obj.id}`, label: `${obj.name}`}))}/>
              {selectedProductId && (
                <>
                  <Select
                    w={300}
                    value={typeId}
                    onChange={setTypeId}
                    placeholder="Выберите тип продукта"
                    data={[
                      { value: '1', label: 'Холодные закуски' },
                      { value: '2', label: 'Паста' },
                      { value: '3', label: 'Салаты' },
                      { value: '4', label: 'Супы' },
                    ]}
                  />

                  <TextInput value={name} onChange={(e)=>setName(e.currentTarget.value)} w={300} placeholder={'Введите название продукта'}/>
                  <TextInput value={info} onChange={(e)=>setInfo(e.currentTarget.value)} w={300} placeholder={'Введите описание продукта'}/>
                  <NumberInput w={300} value={price} onChange={(e)=>setPrice(e)} placeholder={'Введите цену продукта'}/>
                  <FileButton accept="image/png,image/jpeg" onChange={setImg}>
                    {(props) => <button style={{width: 300}} className={'CartBtn'} {...props}>Загрузить изображение</button>}
                  </FileButton>
                  <button  onClick={onSubmit} style={{width: 300}} className={'CartBtn'}>Редактировать товар</button>
                </>
              )}
            </Stack>
        </div>
    );
};

export default EditProduct;
