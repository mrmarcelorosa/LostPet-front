import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle } from './style';

export default ({ route, navigation }) => {

    const [pet, setPet] = useState(route.params)
    const [image, setImage] = useState(route.params.foto);

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
        },
        tinyLogo: {
            width: 120,
            height: 120,
            borderRadius: 20,
        },
        logo: {
            width: 66,
            height: 58,
        },
        dadosPet: {
            borderRadius: 20,
            marginTop: 10,
            backgroundColor: '#f7e9d5',
            flexDirection: 'row',
        },
        info: {
            flex:1,
            alignItems:'center',  
        },
        textInfo:{
            color:'#9e7865',
            fontSize:18,
            fontWeight:'bold',
        },

    });



    useEffect(() => {
        console.log("Pet vacina", route.params)
        setPet(route.params)
        setImage(route.params.foto)
    }, [route]);


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
                        <Text style={styles.textInfo}>{pet.sexo=="m"? 'Macho': 'Femêa'}</Text>
                        <Text style={styles.textInfo}>{pet.castrado? 'Castrado': 'Não castrado'}</Text>
                        <Text style={styles.textInfo}>{pet.dataNascimento}</Text>
                    </View>

                </View>
            </Scroller>

        </Container>
    );
}