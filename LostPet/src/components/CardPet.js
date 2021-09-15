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

const InfoArea = styled.View`
    width: 180px;
    height: 88px;
    padding: 0px 10px;
`;

const PetName = styled.Text`
    font-weight: bold;
    font-size: 15px;
`;

const DeleteButton = styled.TouchableOpacity`
    background-color: #9e7865;
    align-items: center;
    border-radius: 20px;
    width: 26px;
    height: 26px;
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

    const handleClickDelete = async () => {
        let res = await Api.deletePet(props.data.id);
        //navigation.navigate('NewPet', {...props.data, new:false})
    }

    const showConfirmDialog = () => {
        return Alert.alert(
            "Tem certeza?",
            "Deseja excluir esse pet?",
            [
                // The "Yes" button
                {
                    text: "Sim",
                    onPress: () => {handleClickDelete()},
                },
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                    text: "Não",
                },
            ]
        );
    };

    return (
        <Area onPress={handleClick}>
            <Avatar source={{ uri: props.data.foto }} />
            <InfoArea>
                <PetName>{props.data.nome}</PetName>
                <PetName>{props.data.raca}</PetName>
            </InfoArea>
            <DeleteIcon width="36" height="30" fill="#000000" onPress={showConfirmDialog}>
            </DeleteIcon>

        </Area>
    );
}