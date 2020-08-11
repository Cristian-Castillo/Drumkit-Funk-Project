import React, { Component } from 'react'
import {connect} from 'react-redux'
import DrumkitStyle from './DrumkitStyle.css'
import Audio from './Audio';

class Drumkit extends React.Component{

    /* Event Listener for background button to highlight upon click */
    changeBackgroundHandler = () => {

    let newBackground = []

        for(let i = 0; i < document.getElementsByTagName('button').length;i++){
            newBackground[i] = document.getElementsByTagName('button')[i];
            newBackground[i].style.backgroundColor = '#a846a0'
            newBackground[i].addEventListener('click',this.revertBackgroundColorHandler)
        }
    }

    revertBackgroundColorHandler = () => {
    
        let newBackground = []

        for(let i = 0; i < document.getElementsByTagName('button').length;i++){
            newBackground[i] = document.getElementsByTagName('button')[i];
        }

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
            }
        }
    }

    render() {
        /* Mapping dispatch drum*/
        const qButton = this.props.qButton;
        const wButton = this.props.wButton;
        const eButton = this.props.eButton;
        const aButton = this.props.aButton;
        const sButton = this.props.sButton;
        const dButton = this.props.dButton;
        const zButton = this.props.zButton;
        const xButton = this.props.xButton;
        const cButton = this.props.cButton;
        const seeDisplay = this.props.myDisplay;

        return(
                <div>
                    <div className = 'container-fluid'>
                        <h1 className ='logo-drumkitfont'>The DrumKit Funk</h1>
                    </div>
                     {/* Power & Bank Button */}
                    <div className = 'container-fuild'>
                        <div className ='row powerButton'>
                            <div className ='col-3'>
                            <h6>BANK</h6>
                            <label className = 'switch'>
                                <input type = 'checkbox' />
                                <span className ='slider round' />
                            </label>
                            </div>
                            <div className = 'col-3'>
                                <h6>POWER</h6>
                                <label className = 'switch'>
                                    <input onClick = {this.props.powerButton} type = 'checkbox'/>
                                    <span className ='slider round' />
                                </label>
                            </div>
                        </div>
                        {/* Display Panel of type of sound */}
                        <div className='row'>
                            <h3 className = 'displayBeat'>Display</h3>
                        </div>
                        {/* Audio Bar */}
                        <div className ='row'>
                            <h3 className='audioStyle'><Audio /></h3>
                        </div>
                        {/* Buttons */}
                        <div className = 'row'>
                            <div className='col-3'><button className ='buttonStyle' id='qBackground1' onMouseLeave= {this.changeBackgroundHandler} onMouseDown = {this.changeBackgroundHandler} onClick = {qButton}>Q</button></div>
                            <div className='col-3'><button className ='buttonStyle' id='qBackground2' onMouseLeave= {this.changeBackgroundHandler} onMouseDown = {this.changeBackgroundHandler} onClick = {wButton}>W</button></div>
                            <div className='col-3'><button className ='buttonStyle' id='qBackground3' onMouseLeave= {this.changeBackgroundHandler} onMouseDown = {this.changeBackgroundHandler} onClick = {eButton}>E</button></div>
                            </div>
                            <div className = 'row'>
                            <div className='col-3'><button className ='buttonStyle' id='qBackground4' onMouseLeave= {this.changeBackgroundHandler} onMouseDown = {this.changeBackgroundHandler} onClick = {aButton}>A</button></div>
                            <div className='col-3'><button className ='buttonStyle' id='qBackground5' onMouseLeave= {this.changeBackgroundHandler} onMouseDown = {this.changeBackgroundHandler} onClick = {sButton}>S</button></div>
                            <div className='col-3'><button className ='buttonStyle' id='qBackground6' onMouseLeave= {this.changeBackgroundHandler} onMouseDown = {this.changeBackgroundHandler} onClick = {dButton}>D</button></div>
                        </div>
                        <div className = 'row'>
                            <div className='col-3'><button className ='buttonStyle' id='qBackground7' onMouseLeave= {this.changeBackgroundHandler} onMouseDown = {this.changeBackgroundHandler} onClick = {zButton}>Z</button></div>
                            <div className='col-3'><button className ='buttonStyle' id='qBackground8' onMouseLeave= {this.changeBackgroundHandler} onMouseDown = {this.changeBackgroundHandler} onClick = {xButton}>X</button></div>
                            <div className='col-3'><button className ='buttonStyle' id='qBackground9' onMouseLeave= {this.changeBackgroundHandler} onMouseDown = {this.changeBackgroundHandler} onClick = {cButton}>C</button></div>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        qButton:() => dispatch({type:'QTOUCH'}),
        wButton:() => dispatch({type:'WTOUCH'}),
        eButton:() => dispatch({type:'ETOUCH'}),
        aButton:() => dispatch({type:'ATOUCH'}),
        sButton:() => dispatch({type:'STOUCH'}),
        dButton:() => dispatch({type:'DTOUCH'}),
        zButton:() => dispatch({type:'ZTOUCH'}),
        xButton:() => dispatch({type:'XTOUCH'}),
        cButton:() => dispatch({type:'CTOUCH'}),
        powerButton:() => dispatch({type:'POWER'}),
        changeBackgroundHandler:() => dispatch({type:'BACK'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Drumkit);
