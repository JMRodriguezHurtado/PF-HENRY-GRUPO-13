import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getAllUsersDeleted  } from "../../redux/actions.js";
import UserInventory from "./Inventory/UserInventory.jsx";

const AdminUser = () => {
    const users = useSelector((state) => state.AllUsers?.results);
    const deletedUsers = useSelector(state => state.deletedUsers?.results)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllUsers())
        dispatch(getAllUsersDeleted())
    },[dispatch])
    return (
        <div>
        
            <UserInventory users={users} title={"Usuarios"}/>
            <UserInventory users={deletedUsers} title={"Productos eliminados"}/>
        </div>
    )
}

export default AdminUser;