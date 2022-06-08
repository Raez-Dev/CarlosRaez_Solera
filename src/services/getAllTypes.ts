import { TypeServices } from "../models"

let List: Array<TypeServices> = [
    {
        id: 1,
        name: 'Home'

    }, {
        id: 2,
        name: 'Cars'
    }
    , {
        id: 3,
        name: 'Health'
    }]

export const getAllTypes = (): TypeServices[] => {
    return List
}

export const getByIdType = (typeName: string): TypeServices | undefined => {
    let filterList = List.find((type: TypeServices) => type.name === typeName);
    return filterList;
}