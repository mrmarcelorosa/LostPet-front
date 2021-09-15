import React, { useState, useEffect } from 'react';
import { Text,} from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, NewPetButton, ListArea, Area } from './style';
import NewIcon from '../../assets/plus.svg';
import PetIcon from '../../assets/pet.svg'
import Sync from '../../assets/sync.svg'
import Api from '../../Api';
import CardPet from '../../components/CardPet';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default props => {

    const [petList, setList] = useState([]);


    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('NewPet', { new: true });
    }

    const getPets = async () => {
        let res = await Api.getPets();
        setList(res);
    }

    

    useEffect(() => {
        getPets();
    }, [props.route, props.navigation])

    




    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>
                        Seus pets
                    </HeaderTitle>
                    <Sync width="26" height="20" fill="#000000" onPress={() => getPets()}></Sync>
                    <NewPetButton onPress={() => handleClick()}>
                        <NewIcon width="26" height="20" fill="#ffffff" ></NewIcon>
                        <PetIcon width="26" height="26" fill="#ffffff"></PetIcon>
                    </NewPetButton>
                </HeaderArea>
            </Scroller>
            <ListArea>
                {petList.map((item: pet, index) => (
                    <CardPet data={item} key={index} />
                ))}
            </ListArea>
        </Container>
    );
}