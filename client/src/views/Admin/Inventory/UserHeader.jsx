import UserTitle from "./UserTitle"

const UserHeader = ({ titles }) => {
    return (
        <thead className="bg-gray-100">
            <tr>
                {titles.map((title, index) => (
                    <UserTitle key={index} title={title}/>
                ))}
            </tr>
        </thead>
    )
}

export default UserHeader