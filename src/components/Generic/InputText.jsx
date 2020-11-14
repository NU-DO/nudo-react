import React from 'react'

const InputText = ({ name, value, onChange, onBlur, placeHolder, required, type }) => {

    return (
        <div class="form-group">
            <input
                type={type}
                required={required}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeHolder={placeHolder}
                className="form-control"
            />
        </div>
    )
}

export default InputText