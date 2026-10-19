import { Checkbox } from './Checkbox'
import { TextField } from './TextField'

// Поля имени/телефона/согласия для форм заявки и обратного звонка. Работает с useContactForm из shared/lib
export function ContactFormFields({ form, withComment = false }) {
  const { values, errors, setField } = form

  return (
    <div className="space-y-4">
      <TextField label="Имя" value={values.name} onChange={setField('name')} error={errors.name} placeholder="Иван" autoComplete="name" />
      <TextField
        label="Телефон"
        type="tel"
        inputMode="tel"
        value={values.phone}
        onChange={setField('phone')}
        error={errors.phone}
        placeholder="+7 (___) ___-__-__"
        autoComplete="tel"
      />
      {withComment && (
        <TextField
          label="Комментарий"
          multiline
          value={values.comment}
          onChange={setField('comment')}
          placeholder="Адрес доставки, удобное время звонка…"
        />
      )}
      <Checkbox checked={values.consent} onChange={setField('consent')} error={errors.consent}>
        Согласен на обработку персональных данных
      </Checkbox>
    </div>
  )
}
