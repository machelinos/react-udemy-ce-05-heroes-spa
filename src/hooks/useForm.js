import { useState } from 'react'

export const useForm = (formValues = {}) => {
  const [formState, setFormState] = useState(formValues)

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleResetClick = () => {
    setFormState(formValues)
  }

  return {
    ...formState,
    formState,
    handleInputChange,
    handleResetClick,
  }
}
