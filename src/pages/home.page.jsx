import {Link} from "react-router-dom";
import SuraButton from "../components/suraButton/suraButton";
import data from "./../database/suraList.json";
import "./../assets/styles/base.css";
const Home=()=>{
    return(
        <div>
          <div className="header">لیست سوره ها</div>
          <div className="list">
            {data.list.map(item=><SuraButton to={`/view?id=${item.id}`} name={item.name} />)}           
          </div>
        </div>
    )
}
export default Home;