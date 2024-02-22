import React from 'react';
export default (props)=>{
    let style = {
        width: props.w,
        height: props.h
    };
    return <span style={style} onClick={(e)=>{
        if(props.isLoading) return;
        props.onClick(e);
    }}>{props.children}</span>
}