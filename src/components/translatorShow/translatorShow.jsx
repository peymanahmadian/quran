import { useState } from "react";
import "./translatorShow.scss";
import useTranslate from "./../../hooks/translate.hook";
const TranslatorShow=(props)=>{
    const [translateImg,setTranslateImg]=useState("fa.ansarian")
    const translate=useTranslate();
    const [showText,setShowText]=useState(true);
    return(<div className="translatorShow">
        <div className="avatar" style={{backgroundImage:`url('./translator/${translateImg}.jpg')`}}></div>
        <div className="control">                    
            <span className="caption"> ترجمه: </span>
            <span>
                <select onChange={(e)=>{translate(e.target.value);setTranslateImg(e.target.value)}}>
                    <option value="fa.ansarian">استاد حسین انصاریان</option>
                    <option value="fa.ayati">عبدالمحمد آیتی</option>
                    <option value="fa.bahrampour">استاد بهرام پور</option>
                    <option value="fa.fooladvand">استاد فولاوند</option>
                    <option value="fa.gharaati">استاد قرائتی</option>
                    <option value="fa.ghomshei">استاد قمشه ای</option>
                    <option value="fa.khorramdel">استاد خرمدل</option>
                    <option value="fa.khorramshahi">استاد خرمشاهی</option>
                    <option value="fa.makarem">آیت الله مکارم شیرازی</option>
                    <option value="fa.moezzi">استاد معزی</option>
                    <option value="fa.mojtabavi">استاد مجتبوی</option>
                    <option value="fa.sadeqi">استاد صادقی</option>
                    <option value="fa.safavi">استاد صفوی</option>


                </select>
            </span>
        </div>
        <div><input type="button" onClick={()=>{setShowText(!showText);props.onTranslate()}}  value={showText ? " نمایش ترجمه فارسی " : " نمایش متون اصلی "}/></div>

    </div>)
}
export default TranslatorShow;