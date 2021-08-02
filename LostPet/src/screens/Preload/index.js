import React, {useEffect} from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'


import Logo from '../../assets/logo.svg'
import homeIcon from '../../assets/homeIcon.svg';


export default () => {

    const navigation = useNavigation();
    
    useEffect(()=>{
        const checkToken = async ()=>{
            const token = await AsyncStorage.getItem('token')
            if(token){
                //validar o token
                /*navigation.reset({
                    routes:[{name:'MainTab'}]
                });*/
                navigation.navigate('SignIn')
            }else{
                //redireciona para o login
                navigation.navigate('SignIn')

            }

        }
        checkToken();
    },[]);

    return (
        <Container>
            <Logo width="100%" height="160"></Logo>    
           
            <LoadingIcon size="large" color="#FFFFFF"/> 

        </Container>
        
    );
}   