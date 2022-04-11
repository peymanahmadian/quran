const convertNumbers=(param)=>{    
    let digit=param.toString();
    if(digit.length===3)  return digit
    if(digit.length===2)  return "0"+digit
    if(digit.length===1)  return "00"+digit
  }
  export default convertNumbers;