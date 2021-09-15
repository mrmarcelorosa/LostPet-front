import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import {
    Container,
    InputArea,
    ConfirmButton,
    ConfirmButtonText,
    CancelButton,
    CancelButtonText,
    TabArea,
    TabItem,
    InputHeader,
    HeaderView,
    ImageButton,
    ImageView,
    ImageBackGround,
    Panel
} from './style';
import InputCustom from '../../components/InputCustom';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import Api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';
import moment from "moment";



export default ({ route, navigation }) => {


    const [pet, setPet] = useState(route.params ? route.params : {})
    const [image, setImage] = useState('');
    const [dataNascimento, setDatanascimento]=useState(!route.params.new ? moment(route.params.dataNascimento.toString(),'YYYY-MM-DD').format('DD/MM/YYYY').toString()  : '')

    const [porteField, setPorteField] = useState(route.params ? route.params.porte : 'p');
    const [sexoField, setSexoField] = useState(route.params ? route.params.sexo : 'm');
    const [castradoField, setCastradoField] = useState(route.params ? route.params.castrado : false);

    //variaveis para controlar as mudanças no componente select
    const [countPorte, setCountPorte] = useState(route.params ? route.params.porte == 'g' ? 2 : route.params.porte == 'm' ? 1 : 0 : 0)
    const [countSexo, setCountSexo] = useState(route.params ? route.params.sexo == 'f' ? 1 : 0 : 0)
    const [countCastrado, setCountCastrado] = useState(route.params ? route.params.castrado == true ? 1 : 0 : 0)


    useEffect(() => {
        setPet(!route.params.new ? route.params : {})
        setImage(!route.params.new ? route.params.foto : '')
        setDatanascimento(!route.params.new ? moment(route.params.dataNascimento.toString(),'YYYY-MM-DD').format('DD/MM/YYYY').toString()  : '')
        setPorteField(!route.params.new ? route.params.porte : 'p')
        setSexoField(!route.params.new ? route.params.sexo : 'm')
        setCastradoField(!route.params.new ? route.params.castrado : false)

        setCountPorte(!route.params.new ? route.params.porte == 'g' ? 2 : route.params.porte == 'm' ? 1 : 0 : 0)
        setCountSexo(!route.params.new ? route.params.sexo == 'f' ? 1 : 0 : 0)
        setCountCastrado(!route.params.new ? route.params.castrado == true ? 1 : 0 : 0)
    }, [route]);

    const changePorte = (cont, value) => {
        setCountPorte(cont);
        setPorteField(value);
    }

    const changeSexo = (cont, value) => {
        setCountSexo(cont);
        setSexoField(value);
    }

    const changeCastrado = (cont, value) => {
        setCountCastrado(cont);
        setCastradoField(value);
    }

    const handleCancelPet = () => {
        navigation.goBack();
    }

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    const styles = StyleSheet.create({
        dateComponente: {
            width: '90%',
            height: 45,
            borderWidth: 2,
            borderColor: "#b48569",
            borderRadius: 10,
            marginBottom: 15,

        }
    });

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            setImage(image.path);
            this.bs.current.snapTo(1);
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            setImage(image.path);
            this.bs.current.snapTo(1);
        });
    }

    const handleCadastrarClick = async () => {

        let user = await Api.getUser()
        if (pet.id) {
            if (pet.nome != '' && pet.raca != '' && dataNascimento != '' && pet.codColeira != '') {
                try {
                    let json = await Api.updatePet(pet.id, image, pet.nome, pet.raca, pet.codColeira, dataNascimento, castradoField, porteField, sexoField, user.id)
                } catch (error) {
                    alert(error);
                }
            } else {
                alert("Preencha os campos!");
            }
        } else {
            if (pet.nome != '' && pet.raca != '' && dataNascimento != '' && pet.codColeira != '') {
                try {
                    let json = await Api.createPet(image, pet.nome, pet.raca, pet.codColeira, dataNascimento, castradoField, porteField, sexoField, user.id)
                } catch (error) {
                    alert(error);
                }
            } else {
                alert("Preencha os campos!");
            }
        }
        goTo('Home');
    }

    renderInner = () => (
        <Panel >
            <InputArea>
                <Text >Upload foto</Text>
                <Text >Escolha sua foto</Text>
            </InputArea>
            <ConfirmButton onPress={takePhotoFromCamera}>
                <ConfirmButtonText>Tirar foto</ConfirmButtonText>
            </ConfirmButton>
            <ConfirmButton onPress={choosePhotoFromLibrary}>
                <ConfirmButtonText>Escolher da galeria</ConfirmButtonText>
            </ConfirmButton>
            <CancelButton onPress={() => this.bs.current.snapTo(1)}>
                <CancelButtonText>Cancelar</CancelButtonText>
            </CancelButton>
        </Panel>
    );

    bs = React.createRef();
    fall = new Animated.Value(1);



    return (
        <Container>
            <BottomSheet
                ref={this.bs}
                snapPoints={[270, 0]}
                renderContent={this.renderInner}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            />
            <Animated.View style={{
                margin: 5,
                opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
            }}></Animated.View>
            <HeaderView >
                <InputHeader >
                    <ImageButton onPress={() => this.bs.current.snapTo(0)}>
                        <ImageView>
                            <ImageBackGround source={{ uri: image, }}
                                imageStyle={{ borderRadius: 15 }}>
                            </ImageBackGround>
                        </ImageView>
                    </ImageButton>
                </InputHeader>
                <InputHeader >
                    <InputCustom
                        placeholder="Nome"
                        value={pet.nome}
                        onChangeText={nome => setPet({ ...pet, nome })}
                    />
                    <InputCustom
                        placeholder="Raça"
                        value={pet.raca}
                        onChangeText={raca => setPet({ ...pet, raca })}
                    />
                    <DatePicker
                        format="DD/MM/YYYY"
                        style={styles.dateComponente}
                        date={dataNascimento}
                        onDateChange={dataNascimento => setDatanascimento(dataNascimento)}
                        showIcon={false}
                    />
                </InputHeader>
            </HeaderView>


            <InputArea>
                <InputCustom
                    placeholder="Código da Coleira"
                    value={pet.codColeira}
                    onChangeText={codColeira => setPet({ ...pet, codColeira })}
                />

                <TabArea>
                    <TabItem onPress={() => changePorte(0, "p")} style={{ backgroundColor: countPorte === 0 ? "#b48569" : "#ffffff" }}>
                        <Text style={{ color: countPorte === 0 ? "#ffffff" : "#000000" }}>Pequeno</Text>
                    </TabItem >
                    <TabItem onPress={() => changePorte(1, "m")} style={{ backgroundColor: countPorte === 1 ? "#b48569" : "#ffffff" }}>
                        <Text style={{ color: countPorte === 1 ? "#ffffff" : "#000000" }}>Médio</Text>
                    </TabItem>
                    <TabItem onPress={() => changePorte(2, "g")} style={{ backgroundColor: countPorte === 2 ? "#b48569" : "#ffffff" }}>
                        <Text style={{ color: countPorte === 2 ? "#ffffff" : "#000000" }}>Grande</Text>
                    </TabItem>
                </TabArea>

                <TabArea>
                    <TabItem onPress={() => changeSexo(0, "m")} style={{ backgroundColor: countSexo === 0 ? "#b48569" : "#ffffff" }}>
                        <Text style={{ color: countSexo === 0 ? "#ffffff" : "#000000" }}>Macho</Text>
                    </TabItem>
                    <TabItem onPress={() => changeSexo(1, "f")} style={{ backgroundColor: countSexo === 1 ? "#b48569" : "#ffffff" }}>
                        <Text style={{ color: countSexo === 1 ? "#ffffff" : "#000000" }}>Fêmea</Text>
                    </TabItem>
                </TabArea>

                <TabArea>
                    <TabItem onPress={() => changeCastrado(0, false)} style={{ backgroundColor: countCastrado === 0 ? "#b48569" : "#ffffff" }}>
                        <Text style={{ color: countCastrado === 0 ? "#ffffff" : "#000000" }}>Não castrado</Text>
                    </TabItem>
                    <TabItem onPress={() => changeCastrado(1, true)} style={{ backgroundColor: countCastrado === 1 ? "#b48569" : "#ffffff" }}>
                        <Text style={{ color: countCastrado === 1 ? "#ffffff" : "#000000" }}>Castrado</Text>
                    </TabItem>
                </TabArea>

                <ConfirmButton onPress={handleCadastrarClick}>
                    <ConfirmButtonText>CONFIRMAR</ConfirmButtonText>
                </ConfirmButton>

                <CancelButton onPress={handleCancelPet}>
                    <CancelButtonText>CANCELAR</CancelButtonText>
                </CancelButton>

            </InputArea>

        </Container>
    );
}