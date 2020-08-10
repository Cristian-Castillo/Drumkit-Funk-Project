const COUNT = 'COUNT'
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
    myDisplay:'FOO Stuff'
}
const reducer = (state = defaultState,action) => {

    switch(action.type){
        case COUNT:
            return{
                ...state,
                counter:state.counter+1
            }
    
        default:
            return state

    }
}


export default reducer;
