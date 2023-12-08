import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteProduct } from "../../../redux/actions"


const PublicToggle = ({id}) => {
    const [toggleSwitch, setToggleSwitch] = useState(true)
    const dispatch = useDispatch()
    const handleClick = () => {
        setToggleSwitch(!toggleSwitch)
        dispatch(deleteProduct(id))
    }
    return(
        <button onClick={handleClick}>
            {toggleSwitch ? "Public" : "Private"}
        </button>
    )
}

export default PublicToggle