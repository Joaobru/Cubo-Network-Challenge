import './styles.css'

import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name:string;
  slug:string;
  value:string;
  type:string;
  setValue: Function;
}

const Input = ({ name, slug, value, setValue, type }:InputProps) => {
  return (
      <input value={value} onChange={(e) => { setValue(e.target.value) }} className="inputNav" placeholder={slug} name={name} type={type}/>
  )
}

export default Input
