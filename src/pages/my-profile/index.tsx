import {Center, Container, Group, Image, Stack, Text} from "@mantine/core";
import {useAppSelector} from "../../redux/hook/hook";
import iconUser from '../../assets/icon_user.svg'
import iconEmail from '../../assets/mailUser.png'

const MyProfilePage = () => {
    const user = useAppSelector(state => state.user.user)
    if (!user) return null
    return (
        <Container sx={() => ({
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '1.2em',
            paddingTop: '1%',
            paddingBottom: '5%'
        })} mt={'6%'}>
            <Center mt={'10%'}>
                <Stack>
                    <Group>
                        <Image src={iconUser} width={150}/>
                        <Text size={30}>Имя профиля:</Text>
                        <Text size={30} color={'green'} underline ff={'cursive'}>{user.username}</Text>
                    </Group>
                    <Group>
                        <Image src={iconEmail} width={150}/>
                        <Text size={30}>Электронная почта:</Text>
                        <Text size={30} color={'green'} underline ff={'cursive'}>{user.email}</Text>
                    </Group>
                </Stack>
            </Center>
        </Container>
    );
};

export default MyProfilePage;
