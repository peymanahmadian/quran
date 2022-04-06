import {useState,useRef,useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import SoundPlayer from "../components/soundPlayer/soundPlayer";
import TranslatorShow from "../components/translatorShow/translatorShow";
import ShowText from "./../components/showText/showText";
const Text=()=>{
    const [sel,setSel]=useState(1);
    const [selAye,setSelAye]=useState(1);
    const [searchParams] = useSearchParams();
    const [soundSelect,setSoundSelect]=useState(1);
    return(<div>
        <div className="footer">
            <SoundPlayer sura={searchParams.get("id")}  ayyah={selAye} onSelectAyyah={(e)=>setSoundSelect(e)} />
            <TranslatorShow/>
        </div>
        <ShowText index={searchParams.get("id")} readingText={soundSelect}  selectSound={(e)=>setSelAye(e)}/>
        
    </div>)
}
export default Text;