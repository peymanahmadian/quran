import SuraButton from "../components/suraButton/suraButton";
import data from "./../database/suraList.json";
import "./../assets/styles/base.scss";
const Home=()=>{
    return(
        <div className="home">
            <div className="head"></div>
          <div className="list">
            {data.list.map(item=><SuraButton to={`/view?id=${item.id}`} name={item.name} />)}           
          </div> 
        </div>
    )
}
export default Home;