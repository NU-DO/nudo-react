import React from 'react'

const InputText = ({ name, value, onChange, onBlur, placeHolder, required, type }) => {

    return (
        <div className="form-group">
            <input
                type={type}
                required={required}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeHolder}
                className="form-control"
            />
        </div>
    )
}

export default InputText