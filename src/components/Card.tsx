import React from 'react'
import { Services } from '../models'


interface CardProps {
    id: number, 
    name: string, 
    description: string,
    onEdit: (serv: Services) => void,
    onDelete: (id: number) => void
}

function Card({ id, name, description,onEdit,onDelete }: CardProps) {


    const handleOnEdit = (id: number, evt: React.MouseEvent<HTMLElement>) => {
        evt.preventDefault();
        onEdit({ id, name, description });
    }
    const handleOnEliminar = (id: number, evt: React.MouseEvent<HTMLElement>) => {
        evt.preventDefault();
        onDelete(id);
    }

    return (
        <div className='col'>

            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-body">
                    <a onClick={(e) => handleOnEdit(id, e)} className="card-link">Editar</a>
                    <a onClick={(e) => handleOnEliminar(id, e)} className="card-link">Eliminar</a>
                </div>
            </div>
        </div>
    )
}

export default Card