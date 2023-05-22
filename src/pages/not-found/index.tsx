import {Link} from "react-router-dom";
import {Center, Stack, Text} from "@mantine/core";

const NotFoundPage = () => {
    return (
        <Center mt={'10%'}>
            <Stack>
                <Text size={20}>
                    Страница на которую вы хотите попасть не найдена
                </Text>
                <Link to={'/'}>
                    <button className={'CartBtn'}>
                        На главную
                    </button>
                </Link>
            </Stack>
        </Center>
    );
};

export default NotFoundPage;
