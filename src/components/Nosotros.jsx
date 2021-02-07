//rafc
import React,{useState} from 'react'

const Nosotros = () => {

    const [equipo, setEquipo] = useState([]);

    React.useEffect( () => {
        //console.log('object')
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:8000/api/gets')
        const users = await data.json()
        console.log(users)
        setEquipo(users)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => (
                    <li key={item.id}>{item.name} - {item.email}</li>
                    )) 
                }
            </ul>
        </div>
    )
}

export default Nosotros;
