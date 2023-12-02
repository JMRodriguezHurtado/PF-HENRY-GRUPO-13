import TxtBtn from "./TxtBtn"
import ImgBtn from "./imgBtn"

const NavButton = ({name}) => {
    const {to, content} = name
    return(
        <>
            {content.includes("/")
            ? <ImgBtn to={to} content={content}/>
            : <TxtBtn to={to} content={content}/>}
        </>
        
    )
}

export default NavButton