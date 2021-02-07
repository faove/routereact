//rafc
import React,{useState} from 'react'
import {Link} from 'react-router-dom'

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
                    <li key={item.id}>
                        <Link to= {`/nosotros/${item.id}`}>
                        {item.name} - {item.email}
                        </Link>
                    </li>
                    )) 
                }
            </ul>
        </div>
    )
}

export default Nosotros;
