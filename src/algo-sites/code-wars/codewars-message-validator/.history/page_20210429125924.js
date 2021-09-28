import isAValidMessage from './isAValidMessage'

// const page = () => {
class Page {

    const btn = document.getElementById('btn')
    btn.onClick = () => { console.log('3hey5hello2hi has been entered');
        isAValidMessage('3hey5hello2hi')

    }
}

export default page;