import SuraButton from "../components/suraButton/suraButton";
import {suraList as data} from "./../database/suraList";
import "./../assets/styles/base.scss";
const Home=()=>{
    return(
        <div className="home">
            <div className="head"></div>
          <div className="list">
            {data.list.map(item=><SuraButton to={`/view?id=${item.id}&ayyah=1`} name={item.name} />)}           
          </div> 
        </div>
    )
}
export default Home;