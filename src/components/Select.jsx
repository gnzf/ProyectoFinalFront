import React from 'react'
import "./Select.css"

function Select({placeholder,children,value,onSelect,required,name}) {
  return (



    <div className={'select-wrapper ' + (!value? 'empty' : "")}>
        <span>{placeholder}</span>
        <select {... {onSelect,value, required, name}}> {/* es lo mismo que hacer value={value} o required={required} */}
            {children}
        </select>

    </div>
  )
}

export default Select;