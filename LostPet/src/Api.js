import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";
import { ThemeConsumer } from "styled-components/native";

const BASE_API = 'http://172.17.1.187:8000';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = await req.json();
        return json;
    },

    //função para logar usuario 
    signIn: async (username, password) => {
        const req = await fetch(`${BASE_API}/api/login/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const json = await req.json();
        return json;
    },

    //função para cadastrar usuario
    signUp: async (username, email, password) => {
        const req = await fetch(`${BASE_API}/api/register/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        const json = await req.json(username, email, password);
        return json;
    },

    createPet: async (foto, nome, raca, codColeira, dataNascimento, castrado, porte, sexo, user) => {
        let formdata = new FormData();

        formdata.append("foto", { uri: foto, name: 'image.jpg', type: 'image/jpeg' })
        formdata.append("nome", nome)
        formdata.append("raca", raca)
        formdata.append("codColeira", codColeira)
        formdata.append("dataNascimento", moment(dataNascimento.toString(),'DD/MM/AAAA').format('YYYY-MM-DD').toString())
        formdata.append("castrado", castrado)
        formdata.append("porte", porte)
        formdata.append("sexo", sexo)
        formdata.append("user", user)
        
        fetch(`${BASE_API}/api/pets/`, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formdata,
        }).then((resp)=>{alert('Pet cadastrado com sucesso')}).catch((error)=> {alert(Error)})
    },

    updatePet: async (id, foto, nome, raca, codColeira, dataNascimento, castrado, porte, sexo, user) => {
        let formdata = new FormData();

        formdata.append("id", id)
        formdata.append("foto", { uri: foto, name: 'image.jpg', type: 'image/jpeg' })
        formdata.append("nome", nome)
        formdata.append("raca", raca)
        formdata.append("codColeira", codColeira)
        formdata.append("dataNascimento", moment(dataNascimento.toString(),'DD/MM/AAAA').format('YYYY-MM-DD').toString())
        formdata.append("castrado", castrado)
        formdata.append("porte", porte)
        formdata.append("sexo", sexo)
        formdata.append("user", user)
        
        fetch(`${BASE_API}/api/pets/`+id+'/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formdata,
        }).then((resp)=>{alert('Pet alterado com sucesso')}).catch((error)=> {alert(Error)})
    },

    getPets: async () => {
        const req = await fetch(`${BASE_API}/api/pets/`);
        const json = await req.json();
        return json;
    },

    deletePet: async (id) => {
        const req = await fetch(`${BASE_API}/api/pets/` + id + '/', {
            method: 'DELETE'
        });
    },

    getUser: async () => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/api/user/`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token,
            },
        });
        const json = await req.json();
        return json;
    },

}