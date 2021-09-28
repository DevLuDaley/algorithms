function isAValidMessage(message){
  // your code
  const str = message.split(/[0-9]/g).filter((elm) => elm !== '');
  const num = message.split(/[a-zA-Z]/g).filter((elm) => elm !== '');
  let result;

  if (message === "") {
    return true;
  }
  
  if (/\s/.test(message)) {
      return false;
    }
    
    //@param myParam
    //!
    //cool if the first element is a letter
    if (/[a-zA-Z]/.test(message[0])) {
      console.log('MESSAGE=> ',/\s/.test(message));
      console.log('MESSAGE=> ',/[a-zA-Z]/.test(message[0]));
    return false;
  }
  
  
  
  for (let i = 0; i < Math.min(str.length, num.length); i += 1) {
    if (str[i].length !== +num[i] || num.length !== str.length) {
      result = false;
    } else {
      result = true;
    }
  }
  console.log(message)
  return result;
}

export default isAValidMessage;