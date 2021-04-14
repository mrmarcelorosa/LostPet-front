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
 import PersonIcon from '../../assets/person.svg';
 import EmailIcon from '../../assets/email.svg';
 import LockIcon from '../../assets/lock.svg';

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

    const handleSignClick = () =>{
        
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
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>

    );
}