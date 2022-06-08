import React, { useEffect, useState } from 'react'
import { Form, ListCard } from '../../components'
import { Services } from '../../models'
import { deleteService, getAll, getById, getOneById, postService } from '../../services/getAllServices'

const INITIAL_STATE: Services = {
    id: 0,
    name: '',
    description: ''
}

interface ServicesPageProps {
    type: string
}

function ServicesPage({ type }: ServicesPageProps) {
    const [list, setList] = useState<Array<Services>>([])
    const [serv, setServ] = useState<Services>(INITIAL_STATE)
    
    useEffect(() => {
        getData();
    }, [type])

    const onEdit = (serv: Services): void => {
        postService(serv);
        getData();
    }

    const onDelete = (id: number): void => {
        deleteService(id);
        getData();
    }
    const getData = () => {        
        const newList: Array<Services> = type === 'All' ? getAll() : getById(type);        
        setList(newList)
    }
    const onGetService = (_serv: Services) => {
        const _services: Services | undefined = getOneById(_serv.id);
        setServ({ id: _services!.id, name: _services!.name, description: _services!.description, type: _services!.type })
    }

    return (

        <div className='row'>
            <div className="col-6">
                <ListCard list={list} onEdit={onGetService} onDelete={onDelete} />
            </div>
            <div className="col-6">
                <Form serv={serv} type={type} onCreate={onEdit} />
            </div>
        </div>
    )
}

export default ServicesPage