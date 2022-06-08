import { TypeServices } from "./type-services";

export interface Services {
    id:number,
    name: string,
    description: string,    
    type?:TypeServices
}