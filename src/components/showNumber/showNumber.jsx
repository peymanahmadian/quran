import persianJs from "persianjs";
import "./showNumber.scss";
const ShowNumber=(props)=>{

    return(<span className="showNumber">۝<span className="number">{persianJs(props.children.toString()).englishNumber()._str}</span></span>)
}
export default ShowNumber;