import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    HeaderView,
    InputHeader,
    TabArea,
    TabItem,
    ConfirmButtonText,
    CancelButton,
    CancelButtonText,
    ConfirmButton
} from './style';
import InputCustom from '../../components/InputCustom';
import DatePicker from 'react-native-datepicker';
import Api from '../../Api';
import moment from "moment";


export default ({ route, navigation }) => {

    const [pet, setPet] = useState(route.params)
    const [ficha, setFicha] = useState({})
    const [data, setData] = useState('')
    const [tipoField, setTipoField] = useState('v');
    const [countTipo, setCountTipo] = useState(0)

    const changeTipo = (cont, value) => {
        setCountTipo(cont);
        setTipoField(value);
    }

    const handleClick = async () => {

        if (tipoField != '' && data != '' && ficha.nome != '') {
            ficha.tipo = tipoField;
            ficha.data = data;
            ficha.pet = pet.id;
            try {
                let json = await Api.createFicha(ficha.nome, ficha.tipo, ficha.data, ficha.pet)
            } catch (error) {
                alert(error);
            }
        } else {
            alert("Preencha os campos!");
        }
        navigation.navigate('FichaDetalhe', { ...pet});
    }

    const handleClickCancel = () => {
        navigation.navigate('FichaDetalhe', { ...pet});
    }




    const styles = StyleSheet.create({
        dateComponente: {
            width: '90%',
            height: 45,
            borderWidth: 2,
            borderColor: "#b48569",
            borderRadius: 10,
            marginBottom: 15,
        },
        btnArea: {
            alignItems: 'center',
        },
    });

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>
                        Novo item
                    </HeaderTitle>
                </HeaderArea>
            </Scroller>
            <HeaderView>
                <InputHeader >
                    <InputCustom
                        placeholder="Nome"
                        value={ficha.nome}
                        onChangeText={nome => setFicha({ ...ficha, nome })}
                    />
                    <TabArea>
                        <TabItem onPress={() => changeTipo(0, "v")} style={{ backgroundColor: countTipo === 0 ? "#b48569" : "#ffffff" }}>
                            <Text style={{ color: countTipo === 0 ? "#ffffff" : "#000000" }}>Vacina</Text>
                        </TabItem >
                        <TabItem onPress={() => changeTipo(1, "p")} style={{ backgroundColor: countTipo === 1 ? "#b48569" : "#ffffff" }}>
                            <Text style={{ color: countTipo === 1 ? "#ffffff" : "#000000" }}>Cirurgia</Text>
                        </TabItem>
                        <TabItem onPress={() => changeTipo(2, "c")} style={{ backgroundColor: countTipo === 2 ? "#b48569" : "#ffffff" }}>
                            <Text style={{ color: countTipo === 2 ? "#ffffff" : "#000000" }}>Observações</Text>
                        </TabItem>
                    </TabArea>
                    <DatePicker
                        format="DD/MM/YYYY"
                        style={styles.dateComponente}
                        date={data}
                        onDateChange={data => setData(data)}
                        showIcon={false}
                    />

                    <ConfirmButton onPress={() => handleClick()}>
                        <ConfirmButtonText>CONFIRMAR</ConfirmButtonText>
                    </ConfirmButton>

                    <CancelButton onPress={() => handleClickCancel()}>
                        <CancelButtonText>CANCELAR</CancelButtonText>
                    </CancelButton>
                </InputHeader>

            </HeaderView>
        </Container>
    );
}