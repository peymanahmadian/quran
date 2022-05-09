import {useEffect,useRef,useState} from "react";
import {text} from "./../../database/text";
import playImg from "./../../assets/img/play.png";
import pauseImg from "./../../assets/img/pause.png";
import convertNumbers from "./../../common/convertNumber";
import "./soundPlayer.scss";
const SoundPlayer=(props)=>{
    const [play,setPlay]=useState(true);
    const [urlSound,setUrlSound]=useState("AbdulBasit");
    const audioRef=useRef();
    const [currentAyyahArray,setCurrentAyyahArray]=useState([]);
    const [currentAyyah,setCurrentAyyah]=useState(null);
    //get range from url
    let sura=parseInt(props.sura);
    let ayyah=parseInt(props.ayyah);
    let secondSura=parseInt(props.secondSura);
    let secondAyyah=parseInt(props.secondAyyah);
    //create playlist from props
    useEffect(()=>{
        let fileArray=[];
        if(secondSura){
            for(let count=sura;count<=secondSura;count++){
                if(count===sura){
                    let ayyahNumber=text.quran.sura[parseInt(count)-1].aya.length;                    
                    for(let countAyyah=ayyah;countAyyah<= ayyahNumber;countAyyah++){
                        let item=`/database/sounds/${urlSound}/${convertNumbers(count)}${convertNumbers(countAyyah)}.mp3`;
                        fileArray.push(item);
                    }
                }else if(count == secondSura){
                    for(let countAyyah=1;countAyyah<= secondAyyah;countAyyah++){
                        let item=`/database/sounds/${urlSound}/${convertNumbers(count)}${convertNumbers(countAyyah)}.mp3`;
                        fileArray.push(item);
                    }
                }else{
                    let ayyahNumber=text.quran.sura[parseInt(count)-1].aya.length;                    
                    for(let countAyyah=1;countAyyah<= ayyahNumber;countAyyah++){
                        let item=`/database/sounds/${urlSound}/${convertNumbers(count)}${convertNumbers(countAyyah)}.mp3`;
                        fileArray.push(item);
                    }
                }
            }
        }else{
            let ayyahNumber=text.quran.sura[parseInt(props.sura)-1].aya.length;
            for(let count=props.ayyah ? props.ayyah : 1;count<= ayyahNumber;count++){
                let item=`/database/sounds/${urlSound}/${convertNumbers(props.sura)}${convertNumbers(count)}.mp3`;
                fileArray.push(item);
            }
        }
        setCurrentAyyahArray(fileArray);
        setCurrentAyyah(props.currentAyyah ? parseInt(props.currentAyyah.substr(3))-1 : 0);    
    },[props.ayyah,props.sura,props.secondAyyah,props.secondSura,urlSound]);
    //change current song
    useEffect(()=>{
        props.currentAyyah && currentAyyahArray.forEach((item,index)=>{
            if(item.substr(item.length-10).slice(0,6)===props.currentAyyah){
                setCurrentAyyah(index);
            }
        })
        console.log(currentAyyahArray);
    },[props.currentAyyah]);
    //fill playlist and play first list
    useEffect(()=>{
        
        if(currentAyyah!==null && currentAyyah < currentAyyahArray.length){
            let str=currentAyyahArray[currentAyyah].split("/");
            str=str[str.length-1];       
            props.onSelectAyyah((str.substr(0,6)));        
            audioRef.current.src=currentAyyahArray[currentAyyah];
            audioRef.current.play();
        }
    },[currentAyyah,currentAyyahArray])
    //handling next song
    const incrementAyyah=()=>{
        let counter=JSON.parse(JSON.stringify(currentAyyah));
        if(currentAyyah<currentAyyahArray.length)
        setCurrentAyyah(counter+1)       
    }
    return(<div className="soundPlayer">
                    <div><div  style={{backgroundImage:`url('./reader/${urlSound}.jpg')`}} className="avatar" /></div>
                    <div>
                        <b> قاری: </b>
                        <span>
                            <select onChange={(e)=>{setUrlSound(e.target.value)}}>
                                <option value="AbdulBasit">شیخ عبدالباسط عبدالصمد</option>
                                <option value="karimMansoori">کریم منصوری</option>
                                <option value="shahriarParhizgar">شهریار پرهیزگار</option>
                            </select>
                        </span>
                    </div>
                    {play ? 
                    <div className="play"><img  src={playImg} onClick={()=>{audioRef.current.play();setPlay(false)}}/></div> : 
                    <div  className="pause"><img src={pauseImg} onClick={()=>{audioRef.current.pause();setPlay(true)}}/></div>}
                    <audio onEnded={incrementAyyah} onPlay={()=>setPlay(false)} onPause={()=>setPlay(true)} ref={audioRef} />
                </div>)
}
export default SoundPlayer;