import { useEffect, useState,useContext } from "react";
import persianJs from "persianjs";
import textContext from "../../context/text.context";
import translateContext from "../../context/translate.context";
//import {text} from "./../../database/text";
//import {translate} from "./../../database/translate/fa.ansarian";
import ShowNumber from "./../showNumber/showNumber";
import convertNumbers from "../../common/convertNumber";
import headerImg from "./../../assets/img/suratitle.png";
import {findHezb,findJoz} from "../../common/find";
import "./showText.scss";
const ShowText = (props) => {
  const {text}=useContext(textContext);
  const {translate}=useContext(translateContext);
  let id = parseInt(props.id);
  let ayyah = parseInt(props.ayyah);
  let secondId = parseInt(props.secondId);
  let secondAyyah = parseInt(props.secondAyyah);
  //array to show
  const [ayaShow, setAyaShow] = useState([]);
  const [ayaTransShow, setAyaTransShow] = useState([]);

  useEffect(() => {
    debugger;
    let textShow = [];
    let textTranslateShow = [];
    let suraData = null;
    let translateData = null;
    if(text){
         if(id===secondId){
        suraData = JSON.parse(text).quran.sura[id-1];
        //suraData = JSON.parse(JSON.stringify(text.quran.sura[id - 1]));
        suraData.aya = suraData.aya.slice(ayyah - 1,secondAyyah);
        textShow.push(suraData);
        //
        //translateData = JSON.parse(JSON.stringify(translate.quran.sura[id - 1]));
        translateData = JSON.parse(translate).quran.sura[id-1];
        translateData.aya = translateData.aya.slice(ayyah - 1,secondAyyah);
        textTranslateShow.push(translateData);
      }
      else if (secondId) {
        for (let count = id; count <= secondId; count++) {
          if (count === id) {

            //suraData = JSON.parse(JSON.stringify(text.quran.sura[count - 1]));
            suraData = JSON.parse(text).quran.sura[count-1];
            suraData.aya = suraData.aya.splice(ayyah - 1);
            //
            translateData = JSON.parse(translate).quran.sura[count-1];
            //translateData = JSON.parse(JSON.stringify(translate.quran.sura[count - 1]));
            translateData.aya = translateData.aya.splice(ayyah - 1);
          } else if (count === secondId) {
            suraData = JSON.parse(text).quran.sura[count-1]
            //suraData = JSON.parse(JSON.stringify(text.quran.sura[count - 1]));
            suraData.aya = suraData.aya.slice(0, secondAyyah);
            //
            translateData = JSON.parse(translate).quran.sura[count-1]
            //translateData = JSON.parse(JSON.stringify(translate.quran.sura[count - 1]));
            translateData.aya = translateData.aya.slice(0, secondAyyah);
          } else {
            suraData=JSON.parse(text).quran.sura[count-1];
            //suraData = JSON.parse(JSON.stringify(text.quran.sura[count - 1]));
            //
            translateData = JSON.parse(translate).quran.sura[count-1];
            //translateData = JSON.parse(JSON.stringify(translate.quran.sura[count - 1]));
          }
          textShow.push(suraData);
          textTranslateShow.push(translateData);
        }
      } 
      else {
        suraData=JSON.parse(text).quran.sura[id-1];
        //suraData = JSON.parse(JSON.stringify(text.quran.sura[id - 1]));
        suraData.aya = suraData.aya.splice(ayyah - 1);
        textShow.push(suraData);
        //
        translateData=JSON.parse(translate).quran.sura[id-1];
        //translateData = JSON.parse(JSON.stringify(translate.quran.sura[id - 1]));
        translateData.aya = translateData.aya.splice(ayyah - 1);
        textTranslateShow.push(translateData);
      }
      setAyaShow(textShow);
      setAyaTransShow(textTranslateShow);
    }
  }, [id, ayyah,text,translate]);

  return (
    <div className="showText">
      <div dir="rtl">
        <div className="stage">
          {ayaShow.map((suraItem, suraIndex) => (
            <>
              <div className="title">
                {suraIndex === 0 && (
                  <div className="hezbTitle">
                    <img alt="شماره حزب" src={headerImg} />
                    <span>حزب {persianJs(findHezb(props.readingText).toString()).englishNumber()._str}</span>
                  </div>
                )}

                <div className="suraTitle">
                  <img alt="نام سوره" src={headerImg} />
                  <span>سورة {suraItem?.name.name} </span>
                </div>
                {suraIndex === 0 && (
                  <div className="jozTitle">
                    <img alt="نام جز" src={headerImg} />
                    <span>جز  {persianJs(findJoz(props.readingText).toString()).englishNumber()._str} </span>
                  </div>
                )}
              </div>
              <div className="content">
                {!props.showTranslate
                  ? suraItem.aya &&
                    suraItem.aya.map((item, index) => (
                      <span
                        className={
                          props.readingText ===
                          `${convertNumbers(suraItem.name.index)}${convertNumbers(
                            item.name.index
                          )}`
                            ? "arabicTextRed"
                            : "arabicText"
                        }
                        onClick={() => {
                          props.selectSound(
                            `${convertNumbers(suraItem.name.index)}${convertNumbers(
                              item.name.index
                            )}`
                          );
                        }}
                      >
                        
                        <ShowNumber>{item.name.index}</ShowNumber>
                        <span> {item.name.text}</span>
                      </span>
                    ))
                  : ayaTransShow[suraIndex].aya &&
                    ayaTransShow[suraIndex].aya.map((item, index) => (
                      <span
                        className={
                          props.readingText ===
                          `${convertNumbers(suraItem.name.index)}${convertNumbers(
                            item.name.index
                          )}`
                            ? "arabicTextRed"
                            : "arabicText"
                        }
                        onClick={() => {
                          props.selectSound(
                            `${convertNumbers(suraItem.name.index)}${convertNumbers(
                              item.name.index
                            )}`
                          );
                        }}
                      >
                        <ShowNumber>{item.name.index}</ShowNumber>
                        <span> {item.name.text}</span>{" "}
                      </span>
                    ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShowText;
