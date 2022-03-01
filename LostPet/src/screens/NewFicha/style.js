import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #ffffff;
    flex: 1;
`;

export const Scroller = styled.View`
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #9e7865;
`;

export const HeaderView = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
`;

export const InputHeader = styled.View`
    width: 100%;
    align-items: center;
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