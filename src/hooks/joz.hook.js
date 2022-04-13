import {useNavigate} from "react-router-dom";
const useJoz=()=>{
    const navigate=useNavigate();
    const joz=[
        {id:1,ayyah:1,secondId:2,secondAyyah:141},//1
        {id:2,ayyah:142,secondId:2,secondAyyah:252},//2
        {id:2,ayyah:253,secondId:3,secondAyyah:91},//3
        {id:3,ayyah:92,secondId:4,secondAyyah:23},//4
        {id:4,ayyah:24,secondId:4,secondAyyah:147},//5
        {id:4,ayyah:148,secondId:5,secondAyyah:81},//6
        {id:5,ayyah:82,secondId:6,secondAyyah:111},//7
        {id:6,ayyah:112,secondId:7,secondAyyah:88},//8
        {id:7,ayyah:89,secondId:8,secondAyyah:40},//9
        {id:8,ayyah:41,secondId:9,secondAyyah:92},//10
        {id:9,ayyah:93,secondId:11,secondAyyah:5},//11
        {id:11,ayyah:6,secondId:12,secondAyyah:53},//12
        {id:12,ayyah:54,secondId:14,secondAyyah:52},//13
        {id:15,ayyah:1,secondId:16,secondAyyah:128},//14
        {id:17,ayyah:1,secondId:18,secondAyyah:74},//15
        {id:18,ayyah:75,secondId:20,secondAyyah:135},//16
        {id:21,ayyah:1,secondId:22,secondAyyah:78},//17
        {id:23,ayyah:1,secondId:25,secondAyyah:20},//18
        {id:25,ayyah:21,secondId:27,secondAyyah:55},//19
        {id:27,ayyah:56,secondId:29,secondAyyah:45},//20
        {id:29,ayyah:46,secondId:33,secondAyyah:30},//21
        {id:33,ayyah:31,secondId:36,secondAyyah:27},//22
        {id:36,ayyah:28,secondId:39,secondAyyah:31},//23
        {id:39,ayyah:32,secondId:41,secondAyyah:46},//24
        {id:41,ayyah:47,secondId:45,secondAyyah:37},//25
        {id:46,ayyah:1,secondId:51,secondAyyah:30},//26
        {id:51,ayyah:31,secondId:57,secondAyyah:29},//27
        {id:58,ayyah:1,secondId:66,secondAyyah:12},//28
        {id:67,ayyah:1,secondId:77,secondAyyah:50},//29
        {id:78,ayyah:1,secondId:114,secondAyyah:6},//29
    ];
        return (number)=>{
            let item=joz[number-1];
            navigate(`/view?id=${item.id}&ayyah=${item.ayyah}&secondId=${item.secondId}&secondAyyah=${item.secondAyyah}`);
        }
    

}
export default useJoz;