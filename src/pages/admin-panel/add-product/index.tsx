import React, {useRef} from 'react';
import {Center, Stack, TextInput, Text, Select} from "@mantine/core";
import {Dropzone} from "@mantine/dropzone";

const AddProduct = () => {
    const openRef = useRef<() => void>(null);
    return (
        <div>
               <Stack align={'center'}>
                   <Text size={30}>Добавление товара</Text>
                   <Select
                       w={300}
                       placeholder="Выберите тип продукта"
                       data={[
                           { value: '1', label: 'Холодные закуски' },
                           { value: '2', label: 'Паста' },
                           { value: '3', label: 'Салаты' },
                           { value: '4', label: 'Супы' },
                       ]}
                   />
                   <Dropzone w={300} openRef={openRef}
                             onDrop={() => {}}
                             activateOnClick={false}
                             styles={{ inner: { pointerEvents: 'all' } }}>
                       <button className={'CartBtn'} onClick={() => openRef.current()}>Выберите картинку</button>
                   </Dropzone>
                   <TextInput w={300} placeholder={'Введите название продукта'}/>
                   <TextInput w={300} placeholder={'Введите описание продукта'}/>
                   <TextInput w={300} placeholder={'Введите цену продукта'}/>
                   <button style={{width: 300}} className={'CartBtn'}>Добавить товар</button>
               </Stack>

        </div>
    );
};

export default AddProduct;
