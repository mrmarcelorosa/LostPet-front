import React from 'react';
import styled from 'styled-components/native';
import HomeIcon from '../assets/homeIcon.svg';
import NewIcon from '../assets/new.svg';
import PetIcon from '../assets/pet.svg';
import PersonIcon from '../assets/person.svg';



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

export default ({state, navigation}) => {

    const goTo = (screenName)=>{
        navigation.navigate(screenName);
    }



    return(
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#9e7865" />
            </TabItem>      
            <TabItem onPress={()=>goTo('NewPet')}>
                <PetIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#9e7865" />
            </TabItem> 
            <TabItem onPress={()=>goTo('Profile')}> 
                <PersonIcon style={{opacity: state.index===2? 1 : 0.5}} width="24" height="24" fill="#9e7865" />
            </TabItem>       
        </TabArea>
    );
}
