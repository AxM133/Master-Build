const MAX_DIGITS = 11

// Маска +7 (XXX) XXX-XX-XX; 8 в начале заменяется на 7
export function formatPhone(input) {
  let digits = input.replace(/\D/g, '')
  if (!digits) return ''

  if (digits[0] === '8') digits = `7${digits.slice(1)}`
  if (digits[0] !== '7') digits = `7${digits}`
  const rest = digits.slice(1, MAX_DIGITS)

  let result = '+7'
  if (rest.length > 0) result += ` (${rest.slice(0, 3)}`
  if (rest.length > 3) result += `) ${rest.slice(3, 6)}`
  if (rest.length > 6) result += `-${rest.slice(6, 8)}`
  if (rest.length > 8) result += `-${rest.slice(8, 10)}`

  return result
}

export const isPhoneComplete = (value) => value.replace(/\D/g, '').length === MAX_DIGITS
