import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
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

export const NewFichaButton = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #9e7865;
    align-items: center;
    padding: 5px 20px;
    border-radius: 20px;
`;

export const ListArea = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
`;

const Area = styled.TouchableOpacity`
    background-color: #f7e9d5;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;