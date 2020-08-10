import React, { Component } from 'react'
import {connect} from 'react-redux'
import DrumkitStyle from './DrumkitStyle.css'
import Audio from './Audio';

class Drumkit extends React.Component{
    

    render() {
        /* Keyboard press control drum*/
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
                                <input type = 'checkbox' />
                                <span className ='slider round' />
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        <h3 className = 'displayBeat'>Display</h3>
                    </div>
                    <div className ='row'>
                        <h3 className='audioStyle'><Audio /></h3>
                    </div>
                    <div className = 'row'>
                        <div className='col-3'><button className ='buttonStyle' onClick = {qButton}>Q</button></div>
                        <div className='col-3'><button className ='buttonStyle' onClick = {wButton}>W</button></div>
                        <div className='col-3'><button className ='buttonStyle' onClick = {eButton}>E</button></div>
                        </div>
                    <div className = 'row'>
                        <div className='col-3'><button className ='buttonStyle' onClick = {aButton}>A</button></div>
                        <div className='col-3'><button className ='buttonStyle' onClick = {sButton}>S</button></div>
                        <div className='col-3'><button className ='buttonStyle' onClick = {dButton}>D</button></div>
                    </div>
                    <div className = 'row'>
                        <div className='col-3'><button className ='buttonStyle' onClick = {zButton}>Z</button></div>
                        <div className='col-3'><button className ='buttonStyle' onClick = {xButton}>X</button></div>
                        <div className='col-3'><button className ='buttonStyle' onClick = {cButton}>C</button></div>
                    </div>
                </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        counterState:state.counter,
        display:state.myDisplay
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        counterAction:()=> {dispatch({type:'COUNT'})},
        qButton:()=> {dispatch({type:'QTOUCH'})},
        wButton:()=> {dispatch({type:'WTOUCH'})},
        eButton:()=> {dispatch({type:'ETOUCH'})},
        aButton:()=> {dispatch({type:'ATOUCH'})},
        sButton:()=> {dispatch({type:'STOUCH'})},
        dButton:()=> {dispatch({type:'DTOUCH'})},
        zButton:()=> {dispatch({type:'ZTOUCH'})},
        xButton:()=> {dispatch({type:'XTOUCH'})},
        cButton:()=> {dispatch({type:'CTOUCH'})},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Drumkit);
