import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, ConfirmButtonText, CancelButton, CancelButtonText, ConfirmButton } from './style';

export default ({ route, navigation }) => {

    const [pet, setPet] = useState(route.params)
    const [image, setImage] = useState(route.params.foto);

    const styles = StyleSheet.create({
        tinyLogo: {
            width: 120,
            height: 120,
            borderRadius: 20,
        },
        dadosPet: {
            borderRadius: 20,
            marginTop: 10,
            backgroundColor: '#f7e9d5',
            flexDirection: 'row',
        },
        info: {
            flex: 1,
            alignItems: 'center',
        },
        textInfo: {
            color: '#9e7865',
            fontSize: 18,
            fontWeight: 'bold',
        },
        itensArea: {
            height: '48%',
            marginBottom: '2%',
        },
        btnArea: {
            alignItems: 'center',
        },

    });



    useEffect(() => {
        console.log("Pet vacina", route.params)
        setPet(route.params)
        setImage(route.params.foto)
    }, [route]);

    const handleClick = (item) => {
        navigation.navigate('NewFicha', { ...item});
    }

    const handleVoltar = () => {
        navigation.navigate('Ficha');
    }


    return (
        // <Text>{pet.nome}</Text>
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>
                        Ficha Veterinária
                    </HeaderTitle>

                </HeaderArea>

                <View style={styles.dadosPet}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: image,
                        }}
                    />
                    <View style={styles.info}>
                        <Text style={styles.textInfo}>{pet.nome}</Text>
                        <Text style={styles.textInfo}>{pet.sexo == "m" ? 'Macho' : 'Femêa'}</Text>
                        <Text style={styles.textInfo}>{pet.castrado ? 'Castrado' : 'Não castrado'}</Text>
                        <Text style={styles.textInfo}>{pet.dataNascimento}</Text>
                    </View>
                </View>
            </Scroller>
            <Scroller style={styles.itensArea}>

            </Scroller>
            <View style={styles.btnArea}>
                <ConfirmButton onPress={() => handleClick(pet)}>
                    <ConfirmButtonText>NOVO ITEM</ConfirmButtonText>
                </ConfirmButton>

                <CancelButton onPress={() => handleVoltar()} >
                    <CancelButtonText>VOLTAR</CancelButtonText>
                </CancelButton>
            </View>



        </Container>
    );
}