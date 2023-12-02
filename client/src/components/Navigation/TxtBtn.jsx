import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { txtBtn } from "./style";

const TxtBtn = ({to, content}) => {
    const navigate = useNavigate()
    return(
        <Button className={txtBtn} type="primary" onClick={()=>navigate(`${to}`)}>{content}</Button>
    )
}

export default TxtBtn