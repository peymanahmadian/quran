import { useState } from "react";
import "./translatorShow.scss";
const TranslatorShow=(props)=>{
    const [showText,setShowText]=useState(true);
    return(<div className="translatorShow">
        <div className="avatar" style={{backgroundImage:"url('./translator/ansarian.jpg')"}}></div>
        <div>                    
            <span> ترجمه: </span>
            <span>استاد حسین انصاریان</span>
        </div>
        <div><input type="button" onClick={()=>{setShowText(!showText);props.onTranslate()}}  value={showText ? " نمایش ترجمه فارسی " : " نمایش متون اصلی "}/></div>

    </div>)
}
export default TranslatorShow;