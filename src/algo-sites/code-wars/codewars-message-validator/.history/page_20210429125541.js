import isAValidMessage from './isAValidMessage'

const page = () => {

    const btn = document.getElementById('btn')
    btn.onClick = () => { isAValidMessage('3hey5hello2hi')

    }
}

export default page;