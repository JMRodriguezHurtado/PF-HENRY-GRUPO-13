import Title from "./Title"


const Header = ({titles}) => {
    return(
        <thead>
            <tr>
                {titles.map((title, index)=><Title key={index} title={title}/>)}
            </tr>
        </thead>
    )
}

export default Header