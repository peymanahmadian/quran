import {useContext} from "react";
import translateContext from "../context/translate.context";
const useTranslate=()=>{
    const {setTranslate}=useContext(translateContext);
    const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
    return (name)=>{
        fetch(`/database/translate/${name}.json`, requestOptions)
        .then((response) => response.text())
        .then((result) => {setTranslate(result)})
        .catch((error) => console.log("error", error));
    }
}
export default useTranslate;