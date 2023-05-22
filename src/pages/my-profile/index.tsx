import {Center, Group, Stack, Text} from "@mantine/core";
import {useAppSelector} from "../../redux/hook/hook";

const MyProfilePage = () => {
    const user = useAppSelector(state => state.user.user)
    console.log(user)
    return (
        <Center mt={'10%'}>
            <Stack>
                <Group>
                    <Text size={30}>Имя профиля:</Text>
                    <Text size={30} color={'green'} underline ff={'cursive'}>{user.username}</Text>
                </Group>
                <Group>
                    <Text size={30}>Электронная почта:</Text>
                    <Text size={30} color={'green'} underline ff={'cursive'}>{user.email}</Text>
                </Group>
            </Stack>
        </Center>
    );
};

export default MyProfilePage;
