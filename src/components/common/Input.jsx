import React, { forwardRef, useId } from 'react'

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId()
  return (
    <div className='w-full'>
      {label && (
        <label className='block text-gray-700 font-medium mb-2' htmlFor={id}>{label}</label>
      )}
      <input type={type} className={`w-full p-2 border border-gray-300 rounded-md ${className}`} {...props} ref={ref} id={id} />
    </div>
  )
}

export default forwardRef(Input)