import { Switch } from '@/shared/ui'

export function ReserveToggle({ checked, onToggle, percent }) {
  return (
    <Switch checked={checked} onChange={onToggle} className="mt-4">
      Запас {percent}% на подрезку и бой
    </Switch>
  )
}
