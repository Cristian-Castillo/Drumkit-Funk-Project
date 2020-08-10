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
    counter:0,
    myDisplay:'FOO',
    powerOn:false
}
const reducer = (state = defaultState,action) => {

    if(state.powerOn === true){
        console.log('IS ON')
        switch(action.type){
            case POWER:{
                return{
                    ...state,
                    powerOn:false
                }
            }
            case QTOUCH:
                console.log('thats q')
                return{
                    ...state,
                    myDisplay:QTOUCH
                }
            case WTOUCH:
                return{
                    ...state,
                    myDisplay:WTOUCH
                }
            case ETOUCH:
                return{
                    ...state,
                    myDisplay:ETOUCH
                }
            case ATOUCH:
                return{
                    ...state,
                    myDisplay:ATOUCH
                }
            case STOUCH:
                return{
                    ...state,
                    myDisplay:STOUCH
                }
            case DTOUCH:
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

