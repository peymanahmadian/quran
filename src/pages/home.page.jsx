//context
import SuraButton from "../components/suraButton/suraButton";
import {suraList as data} from "./../database/suraList";
import useHezb from "../hooks/hezb.hook";
import useJoz from "../hooks/joz.hook";
import logo from "./../assets/img/logo.png";
import "./../assets/styles/base.scss";
import { useState,useEffect } from "react";
import {useNavigate,Link} from "react-router-dom";
const Home=()=>{
  const navigate=useNavigate();
  const hezbNumber=Array(120).fill().map((i,index)=>index+1);
  const gozNumber=Array(30).fill().map((i,index)=>index+1);
  const heze=useHezb();
  const goz=useJoz();
  const [remember,setRemember]=useState(false);
  
  useEffect(()=>{
    if(localStorage.getItem("quran")){
      setRemember(localStorage.getItem("quran"));

    }
  },[localStorage])
    return(
        <div className="home">

            <div className="head">
              
            </div>
            <div className="navigator">
              <div className="item">
                <div>رفتن به حزب</div>
                <div>
                    <select onChange={(e)=>{heze(e.target.value)}}>
                      <option value=""></option>
                      {hezbNumber.map(item=><option value={item}>حزب {item} </option>)}
                    </select>
                </div>
                </div>
                <div className="item">
                <div>رفتن به جز</div>
                <div>
                    <select onChange={(e)=>{goz(e.target.value)}}>
                      <option value=""></option>
                      {gozNumber.map(item=><option value={item}>جز {item} </option>)}
                    </select>
                </div>
                </div>
                <div className="logo"><img  src={logo} /></div>        

            </div>
            <div className="list">
              {data.list.map(item=><SuraButton to={`/view?id=${item.id}&ayyah=1`} name={item.name} />)}           
            </div> 
            <div className="sticker main">
              {remember && <div id="flag" onClick={()=>{navigate(remember)}} ><div>ادامه قرائت</div></div>}
          </div>
        </div>
    )
}
export default Home;