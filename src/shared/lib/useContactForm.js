import { useState } from 'react'
import { formatPhone, isPhoneComplete } from './phone'

const INITIAL_VALUES = { name: '', phone: '', comment: '', consent: false }

function validate({ name, phone, consent }) {
  const errors = {}
  if (name.trim().length < 2) errors.name = 'Как к вам обращаться?'
  if (!isPhoneComplete(phone)) errors.phone = 'Введите номер полностью'
  if (!consent) errors.consent = 'Нужно согласие на обработку данных'
  return errors
}

// Ошибки показываем только после первой попытки отправки — не ругаемся на пустую форму
export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const errors = validate(values)

  const setField = (field) => (value) =>
    setValues((current) => ({ ...current, [field]: field === 'phone' ? formatPhone(value) : value }))

  const handleSubmit = (onValid) => (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    if (Object.keys(errors).length === 0) onValid(values)
  }

  const reset = () => {
    setValues(INITIAL_VALUES)
    setIsSubmitted(false)
  }

  return { values, errors: isSubmitted ? errors : {}, setField, handleSubmit, reset }
}
