const BASE_API = 'http://172.17.1.187:8000';

export default {
    checkToken: async (token) =>{
        const req = await fetch(`${BASE_API}/auth/refresh`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },

    //função para logar usuario 
    signIn: async (username, password) =>{
        console.log(JSON.stringify({username, password}));
        const req = await fetch(`${BASE_API}/api/login/`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });
        const json = await req.json();
        return json;
    },

    //função para cadastrar usuario
    signUp: async (username, email, password) =>{
        const req = await fetch(`${BASE_API}/api/register/`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        });
        const json = await req.json(username, email, password);
        return json;
    }

}