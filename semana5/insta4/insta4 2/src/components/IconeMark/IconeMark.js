import React from 'react'
import './IconeMark.css'

export function IconeMark(props){
    return <div className={'ico-container'}>
        <img alt={'Icone'} src={props.icon} onClick={props.onClickMark}/>
    </div>
}