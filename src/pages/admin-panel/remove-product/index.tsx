import {Select, Stack} from "@mantine/core";

const RemoveProduct = () => {
    return (
        <div>
            <Stack align={'center'}>
                <Select w={300} placeholder="Выберите продукт"
                        data={[
                            { value: '1', label: 'Холодные закуски' },
                            { value: '2', label: 'Паста' },
                            { value: '3', label: 'Салаты' },
                            { value: '4', label: 'Супы' },
                        ]}/>
                <button className={'CartBtn'} style={{backgroundColor: '#c72626', width: 300}}>Удалить продукт</button>
            </Stack>
        </div>
    );
};

export default RemoveProduct;
