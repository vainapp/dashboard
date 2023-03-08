import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  widthFull: boolean
}

export default function Button({ ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
        props.widthFull ? 'w-full' : ''
      }`}
      {...props}
    >
      {props.label}
    </button>
  )
}
