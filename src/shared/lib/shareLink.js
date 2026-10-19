import { toast } from './toast'

// Системное меню «Поделиться» на телефонах, копирование ссылки — на десктопе
export async function shareLink({ title, url = window.location.href }) {
  if (navigator.share) {
    try {
      await navigator.share({ title, url })
    } catch {
      // пользователь закрыл меню — ничего не делаем
    }
    return
  }

  try {
    await navigator.clipboard.writeText(url)
    toast({ title: 'Ссылка скопирована', description: title })
  } catch {
    toast({ title: 'Не удалось скопировать ссылку', description: url })
  }
}
