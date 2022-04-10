import {useEffect, useState} from "react";
import text from "./../../database/text.json";
import translate from "./../../database/translate/fa.ansarian.json";
import ShowNumber from "./../showNumber/showNumber";
import headerImg from "./../../assets/img/suratitle.png";
import "./showText.scss";
const ShowText=(props)=>{
    const [sura,setSura]=useState(null);
    const [aya,setAya]=useState(null);
    const [ayaTrans,setAyaTrans]=useState(null);
    useEffect(()=>{
        let suraData=text.quran.sura[props.index-1];
        let translateData=translate.quran.sura[props.index-1];
        setSura(suraData?.name.name);
        setAya(suraData?.aya);
       setAyaTrans(translateData?.aya);
    },[props.index])

    return(<div className="showText">
        <div  dir="rtl">
            <div className="stage">
               <div className="title">
                    <div className="hezbTitle"><img alt="شماره حزب" src={headerImg}/><span>---</span></div>
                    <div className="suraTitle"><img alt="نام سوره" src={headerImg}/><span>سورة  {sura} </span></div>
                    <div className="jozTitle"><img alt="نام جز" src={headerImg}/><span>---</span></div>
                </div>
                <div className="content">
                {
                    !props.showTranslate ?
                    aya && aya.map((item,index)=>
                        <span  className={(props.readingText===index+1) ? "arabicTextRed" : "arabicText"} onClick={()=>{props.selectSound(item.name.index)}}><ShowNumber>{item.name.index}</ShowNumber><span> {item.name.text}</span> </span>
                    )
                    :
                    ayaTrans && ayaTrans.map((item,index)=> <span  className={(props.readingText===index+1) ? "arabicTextRed" : "arabicText"} onClick={()=>{props.selectSound(item.name.index)}}><ShowNumber>{item.name.index}</ShowNumber><span> {item.name.text}</span> </span>
                    )
                }
                </div> 
            </div>

         </div>
         </div>)
}
export default ShowText;