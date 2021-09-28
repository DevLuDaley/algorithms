function isAValidMessage(message){
  const str = message.split(/[0-9]/g).filter((elm) => elm !== '');
  const num = message.split(/[a-zA-Z]/g).filter((elm) => elm !== '');
  let result;

  if (message === "") {
    return true;
  }

//! if element is a number return true
  if (/\s/.test(message)) {
    console.log('MESSAGE STR=> ',str);
    console.log('MESSAGE num=> ',num);
      return false;
    }

//! if element is a letter return true
    if (/[a-zA-Z]/.test(message[0])) {
      console.log('MESSAGE STR=> ',str);
      console.log('MESSAGE num=> ',num);
      // console.log('MESSAGE=> ',/\s/.test(message));
      // console.log('MESSAGE=> ',/[a-zA-Z]/.test(message[0]));
    return false;
  }

  for (let i = 0; i < Math.min(str.length, num.length); i += 1) {
    if (str[i].length !== +num[i] || num.length !== str.length) {
      console.log('str[i]=> ', str[i]);
      console.log('str[i].length=> ', str[i].length);
      console.log('num=> ', num);
      console.log('+num[i]=> ', +num[i]);
      console.log('num.length=> ', num.length);
      console.log('str.length=> ', str.length);
      result = false;
    } else {
      result = true;
    }
  }
  console.log(message)
  return result;
}

export default isAValidMessage;


    //! this is a standard note
    //+ this is a heading note
    //h this is an important note
    //m this is a misc note
