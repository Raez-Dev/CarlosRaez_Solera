import { useEffect } from "react"
import { Services } from "../models"
import Card from "./Card"

interface ListCardProps {
    list: Array<Services>,
    onEdit: (serv: Services) => void,
    onDelete: (id: number) => void

}
const ListCard = ({ list, onEdit, onDelete }: ListCardProps) => {
    
    const onEditL = (serv: Services): void => {
        onEdit(serv);
    }

    const onDeleteL = (id: number): void => {
        onDelete(id)
    }


    // const renderList = (): Array<JSX.Element> => {

    // }

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {/* {renderList()} */}
            {list.map(sub => {
                return (
                    <Card key={sub.id} id={sub.id} name={sub.name} description={sub.description} onEdit={onEditL} onDelete={onDeleteL} />
                )
            })}
        </div>
    )
}

export default ListCard;