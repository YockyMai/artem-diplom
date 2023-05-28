import {Select, Stack, Text, TextInput} from "@mantine/core";

const EditProduct = () => {
    return (
        <div>
            <Stack align={'center'}>
                <Text size={30}>Редактирование товара</Text>
                <Select
                    w={300}
                    placeholder="Выберите продукт"
                    data={[
                        {value: '1', label: 'Холодные закуски'},
                        {value: '2', label: 'Паста'},
                        {value: '3', label: 'Салаты'},
                        {value: '4', label: 'Супы'},
                    ]}
                />
                <Select
                    w={300}
                    placeholder="Выберите тип продукта"
                    data={[
                        {value: '1', label: 'Холодные закуски'},
                        {value: '2', label: 'Паста'},
                        {value: '3', label: 'Салаты'},
                        {value: '4', label: 'Супы'},
                    ]}
                />
                <TextInput w={300} placeholder={'Введите название продукта'}/>
                <TextInput w={300} placeholder={'Введите описание продукта'}/>
                <TextInput w={300} placeholder={'Введите цену продукта'}/>
                <button style={{width: 300}} className={'CartBtn'}>Изменить товар</button>
            </Stack>
        </div>
    );
};

export default EditProduct;
