import classnames from 'classnames'
import { mainBgColor } from './theme'

function Container({ bgColor = mainBgColor, textColor = 'text-black', className = '', children }) {
  return <div className={classnames(`${bgColor} ${textColor} ${className}`)}>{children}</div>
}

// Voir pour faire une section qui s'adapte selon la taille de la grille.

function Section({ bgColor, textColor, maxSize, rows, cols, children }) {
  return <section className={classnames(`bg-${bgColor} text-${textColor} md:max-w-${maxSize}`)}>{children}</section>
}

export { Container, Section }
