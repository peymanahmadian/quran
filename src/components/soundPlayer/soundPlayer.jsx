import {useEffect,useRef,useState} from "react";
import text from "./../../database/text.json";
import img from "./../../assets/img/narriator/abdulbaset.png";
import playImg from "./../../assets/img/play.png";
import pauseImg from "./../../assets/img/pause.png";
import "./soundPlayer.css";
const SoundPlayer=(props)=>{
    const [play,setPlay]=useState(true);
    const convertNumbers=(param)=>{    
        let digit=param.toString();
        if(digit.length===3)  return digit
        if(digit.length===2)  return "0"+digit
        if(digit.length===1)  return "00"+digit
      }
    const audioRef=useRef();
    const [currentAyyahArray,setCurrentAyyahArray]=useState([]);
    const [currentAyyah,setCurrentAyyah]=useState(null);
    const incrementAyyah=()=>{
        let counter=JSON.parse(JSON.stringify(currentAyyah));
        if(currentAyyah<currentAyyahArray.length)
        setCurrentAyyah(counter+1)
       
    }
    useEffect(()=>{
        
        if(currentAyyah!==null && currentAyyah < currentAyyahArray.length){
            let str=currentAyyahArray[currentAyyah].split("/");
            str=str[str.length-1];            
            props.onSelectAyyah(parseInt(str.substr(3,3)));        
            audioRef.current.src=currentAyyahArray[currentAyyah];
            audioRef.current.play();
        }
    },[currentAyyah,currentAyyahArray])
    useEffect(()=>{
        //find number of ayyah
        debugger;
        let ayyahNumber=text.quran.sura[parseInt(props.sura)-1].aya.length;
        let fileArray=[];
        for(let count=props.ayyah ? props.ayyah : 1;count<= ayyahNumber;count++){
            let item=`http://www.everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${convertNumbers(props.sura)}${convertNumbers(count)}.mp3`;
            fileArray.push(item);
        }
        setCurrentAyyahArray(fileArray);
        setCurrentAyyah(0);
      

    },[props.ayyah]);
    return(<div className="soundPlayer">
                    <div><img src={img}/></div>
                    <div>
                        <b>قاری:</b>
                        <span>شیخ عبدالباسط عبدالصمد</span>
                    </div>
                    {play ? 
                    <div className="play"><img  src={playImg} onClick={()=>{audioRef.current.play();setPlay(false)}}/></div> : 
                    <div  className="pause"><img src={pauseImg} onClick={()=>{audioRef.current.pause();setPlay(true)}}/></div>}
                    <audio onEnded={incrementAyyah} onPlay={()=>setPlay(false)} onPause={()=>setPlay(true)} ref={audioRef} />
                </div>)
}
export default SoundPlayer;