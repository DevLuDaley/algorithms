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
    //! this is a standard note
    //L this is a note also #4682B4 #1E90FF #D2691E #D8BFD8 #E6E6FA
    //J this is a note also #4682B4 #1E90FF #D2691E #D8BFD8 #E6E6FA
    //JK this is a note also #4682B4 #1E90FF #D2691E #D8BFD8 #E6E6FA
    //? this is a note also #4682B4
    //+ this is an important note
    //p this is a note #00FFFF
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