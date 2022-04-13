import SuraButton from "../components/suraButton/suraButton";
import {suraList as data} from "./../database/suraList";
import useHezb from "../hooks/hezb.hook";
import useJoz from "../hooks/joz.hook";
import "./../assets/styles/base.scss";
const Home=()=>{
  const hezbNumber=Array(120).fill().map((i,index)=>index+1);
  const gozNumber=Array(30).fill().map((i,index)=>index+1);
  const heze=useHezb();
  const goz=useJoz();
    return(
        <div className="home">
            <div className="head"></div>
          <div className="navigator">
            <div className="item">
              <div>رفتن به حزب</div>
              <div>
                  <select onChange={(e)=>{heze(e.target.value)}}>
                    <option value=""></option>
                    {hezbNumber.map(item=><option value={item}>{item} حزب</option>)}
                  </select>
                </div>
              </div>
              <div className="item">
              <div>رفتن به جز</div>
              <div>
                  <select onChange={(e)=>{goz(e.target.value)}}>
                    <option value=""></option>
                    {gozNumber.map(item=><option value={item}>{item} جز</option>)}
                  </select>
                </div>
              </div>
          </div>
          <div className="list">
            {data.list.map(item=><SuraButton to={`/view?id=${item.id}&ayyah=1`} name={item.name} />)}           
          </div> 
        </div>
    )
}
export default Home;