import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input({ ...props }: InputProps): JSX.Element {
  return (
    <div className="flex flex-col text-left">
      {!(props.label == null) && (
        <>
          <label
            htmlFor={props.id}
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            {props.label}
          </label>
          <div className="mt-2.5" />
        </>
      )}
      <input
        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        {...props}
      />
    </div>
  )
}
