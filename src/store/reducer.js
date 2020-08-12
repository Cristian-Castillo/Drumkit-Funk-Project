/* Action types & Action Creators */
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

const QLETTER = 'QLETTER'
const WLETTER = 'WLETTER'
const ELETTER = 'ELETTER'
const ALETTER = 'ALETTER'
const SLETTER = 'SLETTER'
const DLETTER = 'DLETTER'
const ZLETTER = 'ZLETTER'
const XLETTER = 'XLETTER'
const CLETTER = 'CLETTER'

/* Default State */
const defaultState = {
    myDisplay:'POWER OFF',
    powerOn:false,
}

const reducer = (state = defaultState,action) => {

    /* If the power is on then you can play sound */
    if(state.powerOn === true){
        switch(action.type){
            case POWER:{
                return{
                    ...state,
                    powerOn:false,
                }
            }
            case QTOUCH:
                let audioOneQ =  new Audio('/crash.mp3')
                audioOneQ.play()
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Crash'
                }
            case QLETTER:{
                if(action.qSound === 'q' || action.qSound === 'Q'){
                    let audioOneQ =  new Audio('/crash.mp3')
                    audioOneQ.play()
                }
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Crash'
                }
            }
            case WLETTER:{
                if(action.wSound === 'w' || action.wSound === 'W'){
                    let audioOneW =  new Audio('/kick-bass.mp3')
                    audioOneW.play()
                }
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Kick-Bass'
                }
            }
            case WTOUCH:
                let audioOneW =  new Audio('/kick-bass.mp3')
                audioOneW.play()
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Kick-Bass'
                }
            case ELETTER:{
                if(action.eSound === 'e' || action.eSound === 'E'){
                    let audioOneE =  new Audio('/tom-1.mp3')
                    audioOneE.play()
                }
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Snare'
                }
            }
            case ETOUCH:
                let audioOneE =  new Audio('/tom-1.mp3')
                audioOneE.play()
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Snare'
                }
            case ALETTER:{
                if(action.aSound === 'a' || action.aSound === 'A'){
                    let audioOneA =  new Audio('/tom-2.mp3')
                    audioOneA.play()
                }
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Tom-1'
                }
            }
            case ATOUCH:
                let audioOneA =  new Audio('/tom-2.mp3')
                audioOneA.play()
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Tom-1'
                }
            case SLETTER:{
                if(action.sSound === 's' || action.sSound === 'S' ){
                    let audioOneS =  new Audio('/tom-3.mp3')
                    audioOneS.play()
                }
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Tom-2'
                }
            }
            case STOUCH:
                let audioOneS = new Audio('/tom-3.mp3')
                audioOneS.play()
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Tom-2'
                }
            case DLETTER:{
                if(action.dSound === 'd' || action.dSound === 'D'){
                    let audioOneD =  new Audio('/tom-4.mp3')
                    audioOneD.play()
                }
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Tom-3'
                }
            }
            case DTOUCH:
                const audioSix = new Audio('/tom-4.mp3')
                audioSix.play()
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Tom-3'
                }
            case ZTOUCH:
                return{
                    ...state,
                    myDisplay:state.myDisplay = 'Snare'
                }
                case ZLETTER:{
                    if(action.zSound === 'z' || action.zSound === 'Z'){
                        let audioOneZ =  new Audio('/tom-1.mp3')
                        audioOneZ.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Snare'
                    }
                }
            case XTOUCH:
                return{
                    ...state,
                    myDisplay:XTOUCH
                }
                case XLETTER:{
                    if(action.xSound === 'x' || action.xSound === 'X'){
                        let audioOneX =  new Audio('/tom-2.mp3')
                        audioOneX.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Tom-Bass'
                    }
                }
            case CTOUCH:
                return{
                    ...state,
                    myDisplay:CTOUCH,
                    myDisplay:state.myDisplay = 'Tom-Bass'
                }
                case CLETTER:{
                    if(action.cSound === 'c' || action.cSound === 'C'){
                        let audioOneC =  new Audio('/tom-3.mp3')
                        audioOneC.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Bass-1'
                    }
                }
            default:
                return state
        }
    }else{
        switch(action.type){
            case POWER:{
                return{
                    ...state,
                    powerOn:true,
                    myDisplay:state.myDisplay = 'Begin DJ'
                }
            } 
            default:
                return {
                    ...defaultState
                }
        }
    }
}

export default reducer;
