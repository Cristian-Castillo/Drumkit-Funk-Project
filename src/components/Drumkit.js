import React from 'react'
import {connect} from 'react-redux'
import DrumkitStyle from './DrumkitStyle.css'

class Drumkit extends React.Component{

    /* Event Listener for background button to highlight upon click */
    changeBackgroundHandler = () => {
        
        let newBackground = []

        for(let i = 0; i < document.getElementsByTagName('button').length;i++){
            newBackground[i] = document.getElementsByTagName('button')[i];
            newBackground[i].style.backgroundColor = '#a846a0'
            newBackground[i].addEventListener('click',this.revertBackgroundColorHandler)
            newBackground[i].addEventListener('keydown',this.handleKeyPress)
        }
    }

    revertBackgroundColorHandler = () => {
        
        let newBackground = []

        for(let i = 0; i < document.getElementsByTagName('button').length;i++){
            newBackground[i] = document.getElementsByTagName('button')[i];
        }
        /* if display is not POWER OFF, then power must be on 
        enable click on features to change button background color*/
        if(this.props.display !== 'POWER OFF'){

        for(let i = 0; i < document.getElementsByTagName('button').length;i++){
            
                if(newBackground[i] === newBackground[0]){
                    newBackground[i].addEventListener('click',foo)
                }
                else if(newBackground[i] === newBackground[1]){
                    newBackground[i].addEventListener('click',foo)
                }
                else if(newBackground[i] === newBackground[2]){
                    newBackground[i].addEventListener('click',foo)
                }
                else if(newBackground[i] === newBackground[3]){
                    newBackground[i].addEventListener('click',foo)
                }
                else if(newBackground[i] === newBackground[4]){
                    newBackground[i].addEventListener('click',foo)
                }
                else if(newBackground[i] === newBackground[5]){
                    newBackground[i].addEventListener('click',foo)
                }
                else if(newBackground[i] === newBackground[6]){
                    newBackground[i].addEventListener('click',foo)
                }
                else if(newBackground[i] === newBackground[7]){
                    newBackground[i].addEventListener('click',foo)
                }
                else if(newBackground[i] === newBackground[8]){
                    newBackground[i].addEventListener('click',foo)
                }
                /* Foo changes button back to normal color upon leaving click */
                function foo(){
                    newBackground[i].style.backgroundColor = '#ef72e4'
                    newBackground[i].removeEventListener('click',foo)
                }
            }
        }
    }

    render() {

        /* Mapping dispatch drum for clicks*/
        const qButton = this.props.qButton;
        const wButton = this.props.wButton;
        const eButton = this.props.eButton;
        const aButton = this.props.aButton;
        const sButton = this.props.sButton;
        const dButton = this.props.dButton;
        const zButton = this.props.zButton;
        const xButton = this.props.xButton;
        const cButton = this.props.cButton;

        /* Mapping dispatch drum for keyboard events*/
        const qButtonLetter = this.props.qButtonLetter;
        const wButtonLetter = this.props.wButtonLetter;
        const eButtonLetter = this.props.eButtonLetter;
        const aButtonLetter = this.props.aButtonLetter;
        const sButtonLetter = this.props.sButtonLetter;
        const dButtonLetter = this.props.dButtonLetter;
        const zButtonLetter = this.props.zButtonLetter;
        const xButtonLetter = this.props.xButtonLetter;
        const cButtonLetter = this.props.cButtonLetter;

        /* Display to screen*/
        const seeDisplay = this.props.display

        return(
            <div>
                <div className = 'container-fluid'>
                    <h1 className ='logo-drumkitfont'>The DrumKit Funk</h1>
                </div>
                    {/* Power & Bank Button */}
                <div className = 'container-fuild'>
                    <div className ='row powerButton'>
                        <div className ='col-3'>
                        <h6 className ='powerStyle'>BANK</h6>
                        <label className = 'switch'>
                            <input onClick = {this.props.bankMusic} type = 'checkbox' />
                            <span className ='slider round' />
                        </label>
                        </div>
                        <div className = 'col-3'>
                            <h6 className = 'powerStyle'>POWER</h6>
                            <label className = 'switch'>
                                <input onClick = {this.props.powerButton} type = 'checkbox'/>
                                <span className ='slider round' />
                            </label>
                        </div>
                    </div>
                    {/* Display Panel of type of sound */}
                    <div className='row'>
                        <h3 className = 'displayBeat'>{seeDisplay}</h3>
                    </div>
                    {/* Buttons */}
                    <div className = 'row'>
                        <div className='col-3'>
                            <button className ='buttonStyle' id='qBackground1' 
                            onMouseLeave= {this.changeBackgroundHandler} 
                            onMouseDown = {this.changeBackgroundHandler} 
                            onClick = {qButton} 
                            onKeyPress = {document.addEventListener('keypress',function(event){
                                let letter = event.key
                                if(letter === 'q' || letter === 'Q'){
                                    qButtonLetter(letter)
                                }
                            })}>Q</button>
                        </div>
                        <div className='col-3'>
                            <button className ='buttonStyle' id='qBackground2' 
                            onMouseLeave= {this.changeBackgroundHandler} 
                            onMouseDown = {this.changeBackgroundHandler} 
                            onClick = {wButton} 
                            onKeyPress = {document.addEventListener('keypress',function(event){
                                let letter = event.key
                                if(letter === 'w' || letter === 'W'){
                                    wButtonLetter(letter)
                                }
                            })}>W</button>
                        </div>
                        <div className='col-3'>
                            <button className ='buttonStyle' id='qBackground3' 
                            onMouseLeave= {this.changeBackgroundHandler} 
                            onMouseDown = {this.changeBackgroundHandler} 
                            onClick = {eButton}  
                            onKeyPress = {document.addEventListener('keypress',function(event){
                                let letter = event.key
                                if(letter === 'e' || letter === 'E'){
                                    eButtonLetter(letter)
                                }
                            })}>E</button>
                    </div>
                    </div>
                        <div className = 'row'>
                        <div className='col-3'>
                            <button className ='buttonStyle' id='qBackground4' 
                            onMouseLeave= {this.changeBackgroundHandler} 
                            onMouseDown = {this.changeBackgroundHandler} 
                            onClick = {aButton} 
                            onKeyPress = {document.addEventListener('keypress',function(event){
                                let letter = event.key
                                if(letter === 'a' || letter === 'A'){
                                    aButtonLetter(letter)
                                }
                            })}>A</button>
                        </div>
                        <div className='col-3'>
                            <button className ='buttonStyle' id='qBackground5' 
                            onMouseLeave= {this.changeBackgroundHandler} 
                            onMouseDown = {this.changeBackgroundHandler} 
                            onClick = {sButton}  
                            onKeyPress = {document.addEventListener('keypress',function(event){
                                let letter = event.key
                                if(letter === 's' || letter === 'S'){
                                    sButtonLetter(letter)
                                }
                            })}>S</button>
                        </div>
                        <div className='col-3'><button className ='buttonStyle' id='qBackground6' 
                            onMouseLeave= {this.changeBackgroundHandler} 
                            onMouseDown = {this.changeBackgroundHandler} 
                            onClick = {dButton}  
                            onKeyPress = {document.addEventListener('keypress',function(event){
                                    let letter = event.key
                                    if(letter === 'd' || letter === 'D'){
                                        dButtonLetter(letter)
                                    }
                                })}>D</button>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className='col-3'><button className ='buttonStyle' id='qBackground7' 
                            onMouseLeave= {this.changeBackgroundHandler} 
                            onMouseDown = {this.changeBackgroundHandler} 
                            onClick = {zButton}  
                            onKeyPress = {document.addEventListener('keypress',function(event){
                                    let letter = event.key
                                    if(letter === 'z' || letter === 'Z'){
                                        zButtonLetter(letter)
                                    }
                                })}>Z</button>
                        </div>
                        <div className='col-3'><button className ='buttonStyle' id='qBackground8' 
                            onMouseLeave= {this.changeBackgroundHandler} 
                            onMouseDown = {this.changeBackgroundHandler} 
                            onClick = {xButton}  
                            onKeyPress = {document.addEventListener('keypress',function(event){
                                    let letter = event.key
                                    if(letter === 'x' || letter === 'X'){
                                        xButtonLetter(letter)
                                    }
                            })}>X</button>
                        </div>
                        <div className='col-3'><button className ='buttonStyle' id='qBackground9' 
                            onMouseLeave= {this.changeBackgroundHandler} 
                            onMouseDown = {this.changeBackgroundHandler} 
                            onClick = {cButton}  
                            onKeyPress = {document.addEventListener('keypress',function(event){
                                    let letter = event.key
                                    if(letter === 'c' || letter === 'C'){
                                        cButtonLetter(letter)
                                    }
                            })}>C</button>
                        </div>
                    </div>
                </div>
                <div className = 'container-fluid'>
                    <div className ='authorLayout'>
                    <h5>Design and Coded By</h5>
                    <h5>Cristian C. Castillo</h5>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        display:state.myDisplay,
        powerButton:state.powerOn,
        myFlag:state.flag
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        qButton:() => dispatch({type:'QTOUCH'}),
        qButtonLetter:(letter) => dispatch({type:'QLETTER',qSound:letter}),
        wButton:() => dispatch({type:'WTOUCH'}),
        wButtonLetter:(letter) => dispatch({type:'WLETTER',wSound:letter}),
        eButton:() => dispatch({type:'ETOUCH'}),
        eButtonLetter:(letter) => dispatch({type:'ELETTER',eSound:letter}),
        aButton:() => dispatch({type:'ATOUCH'}),
        aButtonLetter:(letter) => dispatch({type:'ALETTER',aSound:letter}),
        sButton:() => dispatch({type:'STOUCH'}),
        sButtonLetter:(letter) => dispatch({type:'SLETTER',sSound:letter}),
        dButton:() => dispatch({type:'DTOUCH'}),
        dButtonLetter:(letter) => dispatch({type:'DLETTER',dSound:letter}),
        zButton:() => dispatch({type:'ZTOUCH'}),
        zButtonLetter:(letter) => dispatch({type:'ZLETTER',zSound:letter}),
        xButton:() => dispatch({type:'XTOUCH'}),
        xButtonLetter:(letter) => dispatch({type:'XLETTER',xSound:letter}),
        cButton:() => dispatch({type:'CTOUCH'}),
        cButtonLetter:(letter) => dispatch({type:'CLETTER',cSound:letter}),
        powerButton:() => dispatch({type:'POWER'}),
        bankMusic:() => dispatch({type:'SWITCHMUSIC'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Drumkit);
