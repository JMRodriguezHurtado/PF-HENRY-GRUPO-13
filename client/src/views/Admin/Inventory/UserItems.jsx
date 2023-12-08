import UserItem from "./UserItem"

const UserItems = ({users}) => {
    return(
        <tbody>
            {users?.map((user, index) => <UserItem key={index} product={user}/>)
            }
        </tbody>
    )
}

export default UserItems