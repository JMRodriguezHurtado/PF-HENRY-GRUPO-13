import { useNavigate } from "react-router-dom"
import { btnNvImg } from "./style"


const ImgBtn = ({to, content}) =>{
    const navigate = useNavigate()
    return(
        <button onClick={()=>navigate(`${to}`)}>
            <img
                className={btnNvImg}
                src={content}
                alt={content}
            />
        </button>
    )
}

export default ImgBtn