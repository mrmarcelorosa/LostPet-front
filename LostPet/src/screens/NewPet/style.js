import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #ffffff;
    flex: 1;
    align-items: center;
`;
export const InputArea = styled.View`
    width: 100%;
    align-items: center;
`;

export const InputHeader = styled.View`
    width: 50%;
    align-items: center;
`;

export const HeaderView = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
`;

export const ConfirmButton = styled.TouchableOpacity`
    height: 60px;
    width: 85%;
    background-color: #9e7865;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px
`;
export const ConfirmButtonText = styled.Text`
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
`;

export const CancelButton = styled.TouchableOpacity`
    height: 60px;
    width: 85%;
    background-color: #ffffff;
    border-radius: 30px;
    border-color: #9e7865;
    border-width: 2px;
    justify-content: center;
    align-items: center;
`;
export const CancelButtonText = styled.Text`
    font-size: 18px;
    color: #9e7865;
    font-weight: bold;
`;

export const TabArea = styled.View`
    height: 45px;
    width: 90%;
    background-color: #ffffff;
    flex-direction: row;
    border-color: #b48569;
    border-width: 2px;
    border-radius: 10px;
    margin-bottom: 15px;
`;

export const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    border-color: #b48569;
    border-width: 1px;
`;

export const ImageButton = styled.TouchableOpacity`
    border-radius: 15px;
    border-color: #b48569;
    border-width: 2px;

`;

export const ImageView = styled.View`
    height: 160px;
    width: 130px;
    border-radius: 15px;
    justify-content: center;
    align-items: center; 
`;

export const ImageBackGround = styled.ImageBackground`
    height: 160px;
    width: 130px;
    border-radius: 15px;
    justify-content: center;
    align-items: center; 
`;

export const Panel = styled.View`
    padding: 20px;
    background-color: #ffffff;
    padding-top: 20px;
    align-items: center; 
`;


