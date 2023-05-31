import {Stack, TextInput, Text, Select, FileButton, NumberInput} from "@mantine/core";
import {useState} from "react";
import {$authHost} from "../../../http";

const AddProduct = () => {
    const [typeId, setTypeId] = useState<null | string>(null);
    const [img, setImg] = useState<File | null>(null);
    const [price, setPrice] = useState<number | ''>('');
    const [info, setInfo] = useState('');
    const [name, setName] = useState('');

    const resetFileds = () => {
      setName('')
      setTypeId(null)
      setImg(null)
      setPrice('')
      setInfo('')
    }

    const onSubmit = async () => {
      try {
        if (!img || name.length <=0 || !typeId || info.length <=0 || typeof price !== "number") {
          return alert("Заполните все поля для создания товара")
        }
        const formData = new FormData()
        formData.append("name", name)
        formData.append("img", img)
        formData.append("typeId", typeId)
        formData.append("price", price.toString())
        formData.append("info", JSON.stringify([{title: name, description: info}]))
        await $authHost.post("/api/product/", formData)
        resetFileds()
        alert("Товар успешно создан!")
      } catch (e) {
        resetFileds()
        alert("Произошла ошибка при добавлении товара")
      }
    }
    return (
        <div>
              <Stack align={'center'}>
                   <Text size={30}>Добавление товара</Text>
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
                  <FileButton accept="image/png,image/jpeg" onChange={setImg}>
                    {(props) => <button style={{width: 300}} className={'CartBtn'} {...props}>Загрузить изображение</button>}
                  </FileButton>
                {img?.name && (<Text>
                  Выбранный файл {img.name}
                </Text>)}
                   <TextInput value={name} onChange={(e)=>setName(e.currentTarget.value)} w={300} placeholder={'Введите название продукта'}/>
                   <TextInput value={info} onChange={(e)=>setInfo(e.currentTarget.value)} w={300} placeholder={'Введите описание продукта'}/>
                   <NumberInput w={300} value={price} onChange={(e)=>setPrice(e)} placeholder={'Введите цену продукта'}/>
                   <button  onClick={onSubmit} style={{width: 300}} className={'CartBtn'}>Добавить товар</button>
               </Stack>

        </div>
    );
};

export default AddProduct;
