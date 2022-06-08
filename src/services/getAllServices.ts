import { Services } from "../models"

let List: Array<Services> = [{
    id: 1,
    name: 'Electricidad',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    type: {
        id: 1,
        name: 'Home'
    }
}, {
    id: 2,
    name: 'Auxilio mecanico',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    type: {
        id: 2,
        name: 'Cars'
    }
}, {
    id: 3,
    name: 'Medico a domicilio',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    type: {
        id: 3,
        name: 'Health'
    }
}, {
    id: 4,
    name: 'Ambulancia',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    type: {
        id: 3,
        name: 'Health'
    }
}]

export const getAll = (): Services[] => {            
    let filterList = List.filter((service: Services) => service);
    return filterList;
}

export const getById = (typeName: string): Services[] => {    
    let filterList = List.filter((service: Services) => service.type?.name === typeName);
    return filterList;
}

export const getOneById = (id: number): Services | undefined => {
    let filterList = List.find((service: Services) => service.id === id);
    return filterList;
}

export const postService = (service: Services): void => {

    if (service.id === 0) {
        //Create
        const newId = Math.max(...List.map((serv: Services) => serv.id)) + 1;        
        List.push({ ...service, id: newId });

    } else {
        //Edit
        let newList: Services[] = List.filter((serv: Services) => {
            return serv.id !== service.id
        })
        newList.push(service)
        List = newList
    }
}

export const deleteService = (id: number): void => {

    let newList: Services[] = List.filter((serv: Services) => {
        return serv.id !== id
    })
    List = newList
}