import { useEffect, useState } from "react";
import {
  useSearchParams,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import SoundPlayer from "../components/soundPlayer/soundPlayer";
import TranslatorShow from "../components/translatorShow/translatorShow";
import ShowText from "./../components/showText/showText";
import settingImg from "./../assets/img/setting.svg";
//
//palletes
import pallete_1 from "./../assets/img/pallets/1.png";
import pallete_2 from "./../assets/img/pallets/2.png";
import pallete_3 from "./../assets/img/pallets/3.png";
import pallete_4 from "./../assets/img/pallets/4.png";
import pallete_5 from "./../assets/img/pallets/5.png";
import pallete_6 from "./../assets/img/pallets/6.png";
import "animate.css";
const Text = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selAye, setSelAye] = useState(null);
  const [searchParams] = useSearchParams();
  const [soundSelect, setSoundSelect] = useState(1);
  const [showTranslate, setShowTranslate] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);
  const [showModal, setShowModal] = useState("none");
  //style
  const [fontSize, setFontSize] = useState(26);
  const [lineHeigth, setLineHeigth] = useState(46);
  const [color, setColor] = useState({
    backgroundColor: "white",
    color: "#353434",
  });
  //
  const resize = () => {
    if (window.innerWidth <= 768) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  };
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const changeModal = () => {
    if (showModal === "none" || showModal === "animate__fadeOutDown") {
      setShowModal("animate__fadeInUp");
    } else {
      setShowModal("animate__fadeOutDown");
    }
  };
  const saveCurrent = () => {
    let item = `view${location.search}&current=${soundSelect}`;
    localStorage.setItem("quran", item);
  };
  useEffect(() => {
    let current = searchParams.get("current");
    if (current) {
      setSelAye(current);
      setSoundSelect(current);
    }
  }, [searchParams]);
  return (
    <div>
      <div className="setting">
        <img className="btn" src={settingImg} height={45} />
        <div className="popup">
          <div className="fontSize">
            <div>
              <input
                type="button"
                value="+"
                onClick={() => {
                  setFontSize(fontSize + 1);
                }}
              />
            </div>
            <div>اندازه فونت</div>
            <div>
              <input
                type="button"
                value="-"
                onClick={() => {
                  setFontSize(fontSize - 1);
                }}
              />
            </div>
          </div>
          <div className="palleteTitle">رنگ بندی متن و زمینه</div>
          <div className="pallete">
            <div>
              <img
                src={pallete_1}
                alt="1"
                onClick={() =>
                  setColor({ backgroundColor: "#353434", color: "white" })
                }
              />
            </div>
            <div>
              <img
                src={pallete_2}
                alt="2"
                onClick={() =>
                  setColor({ backgroundColor: "white", color: "#353434" })
                }
              />
            </div>
            <div>
              <img
                src={pallete_3}
                alt="3"
                onClick={() =>
                  setColor({ backgroundColor: "#1d1868", color: "#fcff29" })
                }
              />
            </div>
            <div>
              <img
                src={pallete_4}
                alt="4"
                onClick={() =>
                  setColor({ backgroundColor: "#07052a", color: "#29fff5" })
                }
              />
            </div>
            <div>
              <img
                src={pallete_5}
                alt="5"
                onClick={() =>
                  setColor({ backgroundColor: "white", color: "#178b5b" })
                }
              />
            </div>
            <div>
              <img
                src={pallete_6}
                alt="6"
                onClick={() =>
                  setColor({ backgroundColor: "#ddc3c3", color: "#931b5d" })
                }
              />
            </div>
          </div>
          <div className="fontSize">
            <div>
              <input
                type="button"
                value="+"
                onClick={() => {
                  setLineHeigth(lineHeigth + 1);
                }}
              />
            </div>
            <div>فاصله خطوط</div>
            <div>
              <input
                type="button"
                value="-"
                onClick={() => {
                  setLineHeigth(lineHeigth - 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {mobileMode && (
        <div className={`modal animate__animated animate__faster ${showModal}`}>
          <div className="modalTitle">تنظیمات</div>
          <div className="soundContainer">
            <SoundPlayer
              sura={searchParams.get("id")}
              ayyah={searchParams.get("ayyah")}
              secondSura={searchParams.get("secondId")}
              secondAyyah={searchParams.get("secondAyyah")}
              onSelectAyyah={(e) => setSoundSelect(e)}
              currentAyyah={selAye}
            />
          </div>
          <div className="translateContainer">
            <TranslatorShow
              onTranslate={() => setShowTranslate(!showTranslate)}
            />
          </div>
          <div className="popup">
            <div className="fontSize">
              <div>
                <input
                  type="button"
                  value="+"
                  onClick={() => {
                    setFontSize(fontSize + 1);
                  }}
                />
              </div>
              <div>اندازه فونت</div>
              <div>
                <input
                  type="button"
                  value="-"
                  onClick={() => {
                    setFontSize(fontSize - 1);
                  }}
                />
              </div>
            </div>
            <div className="palleteTitle">رنگ بندی متن و زمینه</div>
            <div className="pallete">
              <div>
                <img
                  src={pallete_1}
                  alt="1"
                  onClick={() =>
                    setColor({ backgroundColor: "#353434", color: "white" })
                  }
                />
              </div>
              <div>
                <img
                  src={pallete_2}
                  alt="2"
                  onClick={() =>
                    setColor({ backgroundColor: "white", color: "#353434" })
                  }
                />
              </div>
              <div>
                <img
                  src={pallete_3}
                  alt="3"
                  onClick={() =>
                    setColor({ backgroundColor: "#1d1868", color: "#fcff29" })
                  }
                />
              </div>
              <div>
                <img
                  src={pallete_4}
                  alt="4"
                  onClick={() =>
                    setColor({ backgroundColor: "#07052a", color: "#29fff5" })
                  }
                />
              </div>
              <div>
                <img
                  src={pallete_5}
                  alt="5"
                  onClick={() =>
                    setColor({ backgroundColor: "white", color: "#178b5b" })
                  }
                />
              </div>
              <div>
                <img
                  src={pallete_6}
                  alt="6"
                  onClick={() =>
                    setColor({ backgroundColor: "#ddc3c3", color: "#931b5d" })
                  }
                />
              </div>
            </div>
            <div className="fontSize">
              <div>
                <input
                  type="button"
                  value="+"
                  onClick={() => {
                    setLineHeigth(lineHeigth + 1);
                  }}
                />
              </div>
              <div>فاصله خطوط</div>
              <div>
                <input
                  type="button"
                  value="-"
                  onClick={() => {
                    setLineHeigth(lineHeigth - 1);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="sticker up">
        <div id="flag" onClick={() => saveCurrent()}>
          <div>ذخیره حالت فعلی</div>
        </div>
        <Link to="/" id="home">
          صفحه اصلی
        </Link>
      </div>
      {!mobileMode && (
        <div className="footer">
          <SoundPlayer
            sura={searchParams.get("id")}
            ayyah={searchParams.get("ayyah")}
            secondSura={searchParams.get("secondId")}
            secondAyyah={searchParams.get("secondAyyah")}
            onSelectAyyah={(e) => setSoundSelect(e)}
            currentAyyah={selAye}
          />

          <TranslatorShow
            onTranslate={() => setShowTranslate(!showTranslate)}
          />
        </div>
      )}

      <ShowText
        fontSize={fontSize}
        fontColor={color}
        lineHeigth={lineHeigth}
        showTranslate={showTranslate}
        ayyah={searchParams.get("ayyah")}
        id={searchParams.get("id")}
        secondId={searchParams.get("secondId")}
        secondAyyah={searchParams.get("secondAyyah")}
        readingText={soundSelect}
        selectSound={(e) => {
          setSelAye(e);
        }}
      />
      <div className="navbar">
        <div onClick={() => navigate("/", { replace: true })}>صفحه اصلی</div>
        <div className="center" onClick={() => changeModal()}>
          <img src={settingImg} height="64" />
        </div>
        <div onClick={() => saveCurrent()}>ذخیره حالت جاری</div>
      </div>
    </div>
  );
};
export default Text;
