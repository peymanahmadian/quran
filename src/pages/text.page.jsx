import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import SoundPlayer from "../components/soundPlayer/soundPlayer";
import TranslatorShow from "../components/translatorShow/translatorShow";
import ShowText from "./../components/showText/showText";
const Text=()=>{
    const [selAye,setSelAye]=useState(null);
    const [searchParams] = useSearchParams();
    const [soundSelect,setSoundSelect]=useState(1);
    const [showTranslate,setShowTranslate]=useState(false);
    return(<div>
        <div className="footer">
            <SoundPlayer 
                sura={searchParams.get("id")}  
                ayyah={searchParams.get("ayyah")} 
                secondSura={searchParams.get("secondId")}
                secondAyyah={searchParams.get("secondAyyah")}
                onSelectAyyah={(e)=>setSoundSelect(e)} 
                currentAyyah={selAye}
                />
                
            <TranslatorShow onTranslate={()=>setShowTranslate(!showTranslate)}/>
        </div>
        <ShowText 
            showTranslate={showTranslate}
            ayyah={searchParams.get("ayyah")}
            id={searchParams.get("id")}
            secondId={searchParams.get("secondId")}
            secondAyyah={searchParams.get("secondAyyah")}
            readingText={soundSelect}
            selectSound={(e)=>{setSelAye(e)}}/>
        
    </div>)
}
export default Text;