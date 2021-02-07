import React,{useState} from 'react'
import {useParams} from 'react-router-dom'

const User = () => {

    const {id} = useParams()
    console.log('valor de id:')
    console.log(id)
    

    const [usuario, setUsuario] = useState([]); 

    React.useEffect( () => {
        //console.log('object')
        const obtenerDatos = async () => {
        // const data = await fetch(`http://localhost:8000/api/users/${id}`)
        const data = await fetch(`http://localhost:8000/api/gets/${id}`)
        const users = await data.json()
        console.log(users)
        setUsuario(users)
        }

        obtenerDatos()
    },[id])


    return (
        <div>
            <h3>{usuario.name}</h3>
        </div>
    )
}

export default User
