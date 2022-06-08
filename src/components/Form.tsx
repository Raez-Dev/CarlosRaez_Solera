import React, { useEffect, useState } from "react"
import { Services, TypeServices } from "../models";
import { getByIdType } from "../services/getAllTypes";

const INITIAL_STATE_Services: Services = {
    id: 0,
    name: '',
    description: ''
}

interface FormProps {
    serv: Services,
    type: string,
    onCreate: (serv: Services) => void
}

const Form = ({ serv, type, onCreate }: FormProps) => {

    const [inputValues, setInputValues] = useState<Services>(INITIAL_STATE_Services)

    useEffect(() => {
        setInputValues({ ...inputValues, id: serv.id, name: serv.name, description: serv.description, type: serv.type })
    }, [serv])

    useEffect(() => {

        if (type !== '') {
            const _type: TypeServices | undefined = getByIdType(type)

            if (typeof (_type) !== undefined) {
                setInputValues({ ...inputValues, type: _type })
            }
        };
    }, [type])



    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onCreate(inputValues)        
        handleClear();
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputValues({
            ...inputValues,
            [evt.target.name]: evt.target.value
        })
    }

    const handleClear = () => {
        setInputValues(INITIAL_STATE_Services);
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <h3>Servicios</h3>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input onChange={handleChange} type="text" className="form-control" id="name" name="name" value={inputValues.name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descripcion</label>
                        <input onChange={handleChange} type="text" className="form-control" id="description" name="description" value={inputValues.description} />
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-outline-success">Grabar </button>
                    <button type="submit" className="btn btn-outline-danger ms-2">Cancelar </button>
                </div>
            </form>

        </div>
    )
}

export default Form