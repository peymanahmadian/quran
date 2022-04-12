import SuraButton from "../components/suraButton/suraButton";
import {suraList as data} from "./../database/suraList";
import useHezb from "../hooks/hezb.hook";
import "./../assets/styles/base.scss";
const Home=()=>{
  const heze=useHezb();
    return(
        <div className="home">
            <div className="head"></div>
              <div><input type="button" onClick={()=>heze(2)} value="حزب 2" /></div>
          <div className="list">
            {data.list.map(item=><SuraButton to={`/view?id=${item.id}&ayyah=1`} name={item.name} />)}           
          </div> 
        </div>
    )
}
export default Home;