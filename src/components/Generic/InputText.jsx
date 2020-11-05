import React from 'react'
import './InputText.scss'

const InputText = ({ name, value, onChange, onBlur, placeHolder, required, type }) => {
    
    return (
        <div>
            <input 
                type={type}
                required={required}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeHolder={placeHolder}
                className='InputText'
            />
        </div>
    )
}

export default InputText