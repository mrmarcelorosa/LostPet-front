import React, {useState} from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
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
 import EmailIcon from '../../assets/email.svg';
 import LockIcon from '../../assets/lock.svg';

export default () => {
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () =>{
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })

    }

    const handleSignClick = () =>{
        
    }


    return (

        <Container>
            <InputArea>
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