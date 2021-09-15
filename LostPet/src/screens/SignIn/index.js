import React, {useState, useContext} from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 } from './styles';
 import SingInput from '../../components/SignInput';
 import PersonIcon from '../../assets/person.svg';
 import LockIcon from '../../assets/lock.svg';
 import Api from '../../Api';

export default () => {
    const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () =>{
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })

    }

    const handleSignClick = async () =>{
        if(nameField != '' && passwordField != ''){
            try{
                let json = await Api.signIn(nameField, passwordField)
                if(json.token){
                    await AsyncStorage.setItem('token', json.token);                    
                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });
                }else {
                    alert('E-mail ou senha incorretos');
                }
            } catch(error){
            }
        }else{
            alert("Preencha os campos!");
        }
    }


    return (

        <Container>
            <InputArea>
                <SingInput 
                    IconSvg={PersonIcon} 
                    placeholder="Digite seu email" 
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SingInput 
                    IconSvg={LockIcon} 
                    placeholder="Digite sua senha" 
                    value={passwordField} 
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>

    );
}