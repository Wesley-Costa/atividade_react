import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import './style.css';
import {Link, useHistory} from 'react-router-dom';



export default function User(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        api.get('users').then(response =>{
            setUsers(response.data);
        })
        console.log(users, "...")
    }, [users])
    console.log(users, "...")
    const history = useHistory();

    return(
        <div id = "user-container">
            <h1>
               List de usuários 
            </h1>
            <Link className = "button" id="create-link" to='/create'>Criar</Link>
            {/* <Link className = "button" id="create-link" onClick={()=>history.push('/create')}>Criar</Link> */}
            <ul className="user-list">
                {users.map(user => (
                    <li key = {users.id}>
                        <strong>Nome</strong>
                        <p>{user.name} </p>
                        <strong>Email</strong>
                        <p>{user.email} </p>
                        <strong>Idade</strong>
                        <p>{user.idade} </p>
                        <strong>Empresa</strong>
                        <p>{user.empresa} </p>
                        <div className="actions">
                            <button className = "button" type="button">Deletar</button>
                            <button className = "button" type="button">Acessar</button>
                        </div>
                    </li>
                ))}
            </ul>   
        </div>
    )
}