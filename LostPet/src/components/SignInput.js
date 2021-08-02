import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    flex-direction: row;
    border-color: #b48569;
    border-width: 2px;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #7a7a78;
    margin-left: 10px

`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="20" height="20" fill="#7a7a78" />
            <Input 
                placeholder = {placeholder} 
                placeholderTextColor="#7a7a78" 
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>

    );
}
