import React from 'react'

export default function BorderedImage(props){
    return (<img src={props.ImageFile} style = {{'border': '4px solid red'}}/>)
  }