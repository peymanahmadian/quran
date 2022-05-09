import {Link} from "react-router-dom";
import icon from "./../../assets/img/download.svg";
import "./suraButton.css";
const SuraButton=(props)=>{
    return(<Link className="suraButton" to={props.to} ><img alt={props.name} src={icon} /><span>{props.name}</span> </Link>)
}
export default SuraButton;