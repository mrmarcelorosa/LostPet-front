import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #f7e9d5;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;