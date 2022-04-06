import persianJs from "persianjs";
import "./showNumber.css";
const ShowNumber=(props)=>{

    return(<div className="showNumber">۝<div className="number">{persianJs(props.children.toString()).englishNumber()._str}</div></div>)
}
export default ShowNumber;