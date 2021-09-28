    //h important note
    //+ standard note
    //! heading note
    //m this is a misc note

//h Remember to use the containers that are available to you. put things into containers to process them

function isAValidMessage(message){
  // ! filter strings and numbers into variables str && num
  const str = message.split(/[0-9]/g).filter((elm) => elm !== '');
  const num = message.split(/[a-zA-Z]/g).filter((elm) => elm !== '');
  let result;

  // ! return true if message is blank
  if (message === "") {
    return true;
  }

//!  return true if element is a number 
  if (/\s/.test(message)) {
    console.log('MESSAGE STR=> ',str);
    console.log('MESSAGE num=> ',num);
      return false;
    }

//! return true if element is a letter
    if (/[a-zA-Z]/.test(message[0])) {
      console.log('MESSAGE STR=> ',str);
      console.log('MESSAGE num=> ',num);
      // console.log('MESSAGE=> ',/\s/.test(message));
      // console.log('MESSAGE=> ',/[a-zA-Z]/.test(message[0]));
    return false;
  }

  // ! us Math.min to loop-over/compare if num.length !== str.length
  // ! rt true if num.length == str.length or if ...
  for (let i = 0; i < Math.min(str.length, num.length); i += 1) {
    if (str[i].length !== +num[i] 
      // || num.length !== str.length
      ) 
    {
      // console.log('str[i]=> ', str[i]);
      // console.log('str[i].length=> ', str[i].length);
      // console.log('num=> ', num);
      // console.log('+num[i]=> ', +num[i]);
      // console.log('num.length=> ', num.length);
      // console.log('str.length=> ', str.length);
      result = false;
    } else {
      // result = true;
    }
  }
  // console.log('message=>>>> ',message)
  // console.log(`🚀 ~ file: isAValidMessage.js ~ line 53 ~ isAValidMessage ~ result`, result)
  return result;
}

export default isAValidMessage;

