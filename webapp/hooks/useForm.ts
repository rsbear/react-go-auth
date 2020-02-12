import React, { useState } from 'react'

export default function (initialValues) {
  const [values, setValues] = useState(initialValues)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return [values, handleChange]
}