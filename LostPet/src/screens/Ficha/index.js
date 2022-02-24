import React, { useState, useEffect } from 'react';
import { Container, Scroller, HeaderArea, HeaderTitle, ListArea, Area } from './style';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Sync from '../../assets/sync.svg'
import Api from '../../Api';
import CardPet from '../../components/CardPet';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import CardVacina from '../../components/CardVacina';

export default props => {
  const [petList, setList] = useState([]);
  const navigation = useNavigation();

  const getPets = async () => {
    let res = await Api.getPets();
    //console.log(res);
    setList(res);
  }

  const handleClick = (item) => {
    navigation.navigate('FichaDetalhe', { ...item})
    console.log("Pet enviado para ficha", item)
  }

  const styles = StyleSheet.create({
    item: {
      alignItems: "center",
      backgroundColor: "#f7e9d5",
      flexGrow: 1,
      margin: 4,
      padding: 20,
      flexBasis: 0
    },
    text: {
      color: "#333333"
    }
  });

  useEffect(() => {
    getPets();
  }, [props.route, props.navigation])

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle>
            Fichas veterinárias
          </HeaderTitle>
          <Sync width="26" height="20" fill="#000000" onPress={() => getPets()}></Sync>
        </HeaderArea>
      </Scroller>
      {/* <ListArea>
                {petList.map((item: pet, index) => (
                    <CardVacina data={item} key={index} />
                ))}
            </ListArea> */}
      <FlatList
        data={petList}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleClick(item)} style={styles.item}>
              <Text style={styles.text}>{item.nome}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
}