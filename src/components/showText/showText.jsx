import {useEffect, useState} from "react";
import text from "./../../database/text.json";
import translate from "./../../database/translate/fa.ansarian.json";
import ShowNumber from "./../showNumber/showNumber";
import "./showText.css";
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
            <div className="title">{sura}</div>
             {aya && aya.map((item,index)=><div key={item.name.index}>
                 <div  className={(props.readingText===index+1) ? "arabicTextRed" : "arabicText"} onClick={()=>{props.selectSound(item.name.index)}}><ShowNumber>{item.name.index}</ShowNumber><div> {item.name.text}</div> </div>
                <div className="persianText">{ayaTrans[index].name.text}</div>
            </div>)}
         </div>
         {/* <div dir="rtl">
            <div>{suraTrans}</div>
             {ayaTrans.map(item=><div>{item.name.index} {item.name.text} </div>)}
         </div> */}
         </div>)
}
export default ShowText;