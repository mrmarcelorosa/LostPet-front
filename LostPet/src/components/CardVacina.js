import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import DeleteIcon from '../../src/assets/trash.svg';
import { View, Button, StyleSheet, Alert } from "react-native";
import Api from '../../src/Api';

const Area = styled.TouchableOpacity`
    background-color: #f7e9d5;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 300,
        height: 300,
        backgroundColor: "red",
        marginBottom: 30,
    },
    text: {
        fontSize: 30,
    },
});


export default props => {

    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('NewPet', { ...props.data, new: false })
        console.log("Pet to edit",props.data)
    }

    return (
        <Area onPress={handleClick}>
            <Avatar source={{ uri: props.data.foto }} />
        </Area>
    );
}