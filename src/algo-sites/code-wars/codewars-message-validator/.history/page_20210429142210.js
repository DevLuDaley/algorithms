import isAValidMessage from './isAValidMessage'

// const page = () => {
class Page {
    // constructor(height, width) {
    constructor() {
    // this.height = height;
    // this.width = width;
    this.btn = document.getElementById('btn');
  }

  btnClicked(){

    
    //   this.btn.onClick = () => { console.log('3hey5hello2hi has been entered');
      console.log('3hey5hello2hi has been entered');
      isAValidMessage('3hey5hello2hi')
    }
}

export default page;