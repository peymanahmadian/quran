import "./translatorShow.css";
const TranslatorShow=(props)=>{
    return(<div className="translatorShow">
        <div className="avatar" style={{backgroundImage:"url('./translator/ansarian.jpg')"}}></div>
        <div>                    
            <span> ترجمه: </span>
            <span>استاد حسین انصاریان</span>
        </div>

    </div>)
}
export default TranslatorShow;