import React, {useState} from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
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
 import EmailIcon from '../../assets/email.svg';
 import LockIcon from '../../assets/lock.svg';
 import Api from '../../Api';


export default () => {
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    

    const handleMessageButtonClick = () =>{
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })

    }

    const handleSignClick = async () =>{
        
        if(nameField != '' && passwordField != '' && emailField != ''){
            try{
                let json = await Api.signUp(nameField, emailField, passwordField)
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
                    placeholder="Digite seu nome" 
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />


                <SingInput 
                    IconSvg={EmailIcon} 
                    placeholder="Digite seu e-mail" 
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SingInput 
                    IconSvg={LockIcon} 
                    placeholder="Digite sua senha" 
                    value={passwordField} 
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>SIGN IN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>

    );
}