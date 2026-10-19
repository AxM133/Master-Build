import { Link } from 'react-router-dom'

// #id — якорь на текущей странице (обычный <a>), всё остальное — переход через роутер
export function AppLink({ href, children, ...props }) {
  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  )
}
