const POWER = 'POWER'
const QTOUCH = 'QTOUCH'
const WTOUCH = 'WTOUCH'
const ETOUCH = 'ETOUCH'
const ATOUCH = 'ATOUCH'
const STOUCH = 'STOUCH'
const DTOUCH = 'DTOUCH'
const ZTOUCH = 'ZTOUCH'
const XTOUCH = 'XTOUCH'
const CTOUCH = 'CTOUCH'

const defaultState = {
    myDisplay:'FOO',
    powerOn:false,
}

const reducer = (state = defaultState,action) => {

    if(state.powerOn === true){

        switch(action.type){
            case POWER:{
                return{
                    ...state,
                    powerOn:false
                }
            }
            case QTOUCH:
                let audioOne =  new Audio('/crash.mp3')
                audioOne.play()
                return{
                    ...state,
                    myDisplay:QTOUCH
                }
            case WTOUCH:
                const audioTwo = new Audio('/snare.mp3')
                audioTwo.play()
                return{
                    ...state,
                    myDisplay:WTOUCH
                }
            case ETOUCH:
                const audioThree = new Audio('/tom-1.mp3')
                audioThree.play()
                return{
                    ...state,
                    myDisplay:ETOUCH
                }
            case ATOUCH:
                const audioFour = new Audio('/tom-2.mp3')
                audioFour.play()
                return{
                    ...state,
                    myDisplay:ATOUCH
                }
            case STOUCH:
                const audioFive = new Audio('/tom-3.mp3')
                audioFive.play()
                return{
                    ...state,
                    myDisplay:STOUCH
                }
            case DTOUCH:
                const audioSix = new Audio('/tom-4.mp3')
                audioSix.play()
                return{
                    ...state,
                    myDisplay:DTOUCH
                }
            case ZTOUCH:
                return{
                    ...state,
                    myDisplay:ZTOUCH
                }
            case XTOUCH:
                return{
                    ...state,
                    myDisplay:XTOUCH
                }
            case CTOUCH:
                return{
                    ...state,
                    myDisplay:CTOUCH
                }
            default:
                return state
        }
    }else{
        switch(action.type){
            case POWER:{
                return{
                    ...state,
                    powerOn:true
                }
            } 
            default:
                return state
        }
    }
}

export default reducer;
