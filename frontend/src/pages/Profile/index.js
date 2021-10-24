import React, {useState, useEffect} from 'react';
import './style.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import api from '../../services/api';

export default function Profile(){
    const history = useHistory();
    const {id} = useParams();
    const initUser = {
        nome:'Nome',
        email:'Email',
        idade: 0,
        empresa:'Empresa'
    }
    const [user, setUser] = useState(initUser);

    useEffect(()=>{
        if(id){
            api.get(`/users/${id}`).then(response=>{
                console.log(response.data)
                setUser(...response.data)
            })
        }
    },[]);

    function onSubmit(ev){
        ev.preventDefault();
        const metodo = id ? 'put' : 'post';
        const url = id ? `/users/${id}` : '/users';
        api[metodo](url, user).then((response)=>{
            history.push('/')
        })
    }

    function onChange(ev){
        const {nome, valor} = ev.target;
        setUser({...user, [nome]:valor});
    }

    return(
        <div id ="profile-container">
            <h1>Cadastro</h1>
            <form onSubmit={onSubmit}>
                <strong> Nome:</strong>
                <input name="nome" onChange={onChange} value={user.nome}/>
                <strong> Email:</strong>
                <input type = "email" name="email" onChange={onChange} value={user.email}/>
                <strong> Idade:</strong>
                <input name="idade" onChange={onChange} value={user.idade}/>
                <strong> Empresa:</strong>
                <input name="empresa" onChange={onChange} value={user.empresa}/>

                <div className="actions">
                    <Link className = "button" to='/'>Voltar</Link>
                    <button className = "button" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
}