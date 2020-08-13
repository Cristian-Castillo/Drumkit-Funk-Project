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

/* Switch Bank Music */
const SWITCHMUSIC = 'SWITCHMUSIC'

/* Default State */
const defaultState = {
    myDisplay:'POWER OFF',
    powerOn:false,
    bank:false
}

const reducer = (state = defaultState,action) => {

    /* If the power is on then you can play sound */
    if(state.powerOn === true){

            if(state.powerOn === true && state.bank === true){

                switch(action.type){

                case POWER:{
                    return{
                        ...defaultState,
                    }
                }
                case QTOUCH:
                    let audioOneQ =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
                    audioOneQ.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Heater 1',
                    }
                case QLETTER:{
                    if(action.qSound === 'q' || action.qSound === 'Q'){
                        let audioOneQ =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
                        audioOneQ.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Heater 1',
                    }
                }
                case WLETTER:{
                    if(action.wSound === 'w' || action.wSound === 'W'){
                        let audioOneW =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
                        audioOneW.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Heater 2'
                    }
                }
                case WTOUCH:
                    let audioOneW =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
                    audioOneW.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Heater 2'
                    }
                case ELETTER:{
                    if(action.eSound === 'e' || action.eSound === 'E'){
                        let audioOneE =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
                        audioOneE.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Heater 3'
                    }
                }
                case ETOUCH:
                    let audioOneE =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
                    audioOneE.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Heater 3'
                    }
                case ALETTER:{
                    if(action.aSound === 'a' || action.aSound === 'A'){
                        let audioOneA =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
                        audioOneA.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Heater 4'
                    }
                }
                case ATOUCH:
                    let audioOneA =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
                    audioOneA.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Heater 4'
                    }
                case SLETTER:{
                    if(action.sSound === 's' || action.sSound === 'S' ){
                        let audioOneS =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
                        audioOneS.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Clap'
                    }
                }
                case STOUCH:
                    let audioOneS = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
                    audioOneS.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Clap'
                    }
                case DLETTER:{
                    if(action.dSound === 'd' || action.dSound === 'D'){
                        let audioOneD =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')
                        audioOneD.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Open HH'
                    }
                }
                case DTOUCH:
                    const audioSix = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')
                    audioSix.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Open HH'
                    }
                case ZTOUCH:
                    const audioSixZ = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
                    audioSixZ.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Kick n\' Hat\''
                    }
                    case ZLETTER:{
                        if(action.zSound === 'z' || action.zSound === 'Z'){
                            let audioOneZ =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
                            audioOneZ.play()
                        }
                        return{
                            ...state,
                            myDisplay:state.myDisplay = 'Kick n\' Hat\''
                        }
                    }
                case XTOUCH:
                    let audioOneX =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
                    audioOneX.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Kick'
                    }
                    case XLETTER:{
                        if(action.xSound === 'x' || action.xSound === 'X'){
                            let audioOneX =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
                            audioOneX.play()
                        }
                        return{
                            ...state,
                            myDisplay:state.myDisplay = 'Kick'
                        }
                    }
                case CTOUCH:
                    let audioOneC =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
                    audioOneC.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Closed HH',
                    }
                    case CLETTER:{
                        if(action.cSound === 'c' || action.cSound === 'C'){
                            let audioOneC =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
                            audioOneC.play()
                        }
                        return{
                            ...state,
                            myDisplay:state.myDisplay = 'Closed HH'
                        }
                    }
                    default:
                        return {
                            ...state,
                            bank:state.bank = false
                        }
                }
                /* End of bank sound */
            }
            /* drum and chords */
            switch(action.type){

                case POWER:{
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'POWER OFF',
                        powerOn:state.powerOn = false,
                        bank:state.bank = false
                    }
                }
                case SWITCHMUSIC:{

                    if(state.powerOn === true){
                        if(state.bank === false){
                            return{
                                ...state,
                                bank:state.bank = !false,
                                myDisplay:state.myDisplay = '- BANK REMIX -'
                            }
                        }
                    }
                    else{
                        return{...defaultState}
                    }
                }
                case QTOUCH:
                    let audioOneQ =  new Audio('/crash.mp3')
                    audioOneQ.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Crash',
                    }
                case QLETTER:{
                    if(action.qSound === 'q' || action.qSound === 'Q'){
                        let audioOneQ =  new Audio('/crash.mp3')
                        audioOneQ.play()
                    }
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Crash',
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
                    const audioSixZ = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3')
                    audioSixZ.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Chord-1'
                    }
                    case ZLETTER:{
                        if(action.zSound === 'z' || action.zSound === 'Z'){
                            let audioOneZ =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3')
                            audioOneZ.play()
                        }
                        return{
                            ...state,
                            myDisplay:state.myDisplay = 'Chord-1'
                        }
                    }
                case XTOUCH:
                    let audioOneX =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')
                    audioOneX.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Chord-2'
                    }
                    case XLETTER:{
                        if(action.xSound === 'x' || action.xSound === 'X'){
                            let audioOneX =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')
                            audioOneX.play()
                        }
                        return{
                            ...state,
                            myDisplay:state.myDisplay = 'Chord-2'
                        }
                    }
                case CTOUCH:
                    let audioOneC =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')
                    audioOneC.play()
                    return{
                        ...state,
                        myDisplay:state.myDisplay = 'Chord-3',
                    }
                    case CLETTER:{
                        if(action.cSound === 'c' || action.cSound === 'C'){
                            let audioOneC =  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')
                            audioOneC.play()
                        }
                        return{
                            ...state,
                            myDisplay:state.myDisplay = 'Chord-3'
                        }
                    }
                default:
                    return{...defaultState}
            }
        }
        else{
            switch(action.type){
                case POWER:{
                    return{
                        ...state,
                        powerOn:state.powerOn = true,
                        myDisplay:state.myDisplay = 'Begin DJ',
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
