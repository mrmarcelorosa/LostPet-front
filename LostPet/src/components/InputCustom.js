import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 90%;
    height: 45px;
    background-color: #ffffff;
    flex-direction: row;
    border-color: #b48569;
    border-width: 2px;
    border-radius: 10px;
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

export default ({ placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            
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