import React from 'react';
import styled from 'styled-components/native';
import HomeIcon from '../assets/homeIcon.svg';
import NewIcon from '../assets/newIcon.svg';
import PetIcon from '../assets/pet.svg';
import PersonIcon from '../assets/person.svg';
import MensageIcon from '../assets/mensagem.svg';
import VacinaIcon from '../assets/vacina.svg';



const TabArea = styled.View`
    height: 60px;
    background-color: #f7e9d5;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 35px;
    border: 3px solid #9e7865;
    margin-top: -10px;
`

export default ({state, navigation}) => {

    const goTo = (screenName)=>{
        console.log("index"+ state.index)
        navigation.navigate(screenName);
    }



    return(
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: 1}} width="24" height="24" fill="#9e7865" />
            </TabItem>   
            <TabItem onPress={()=>goTo('Profile')}>
                <MensageIcon style={{opacity: 1}} width="24" height="24" fill="#9e7865" />
            </TabItem>     
            <TabItemCenter onPress={()=>goTo('Home')}>
                <PetIcon width="32" height="32" fill="#9e7865" />
            </TabItemCenter> 
            <TabItem onPress={()=>goTo('Ficha')}> 
                <VacinaIcon style={{opacity: 1}} width="24" height="24" fill="#9e7865" />
            </TabItem>   
            <TabItem onPress={()=>goTo('Profile')}> 
                <PersonIcon style={{opacity: 1}} width="24" height="24" fill="#9e7865" />
            </TabItem>     
        </TabArea>
    );
}
