import React from 'react'
import cx from 'classnames'
import styles from './tooltip.module.scss'

interface Props {
  children?: any
  content?: any
  position?: 'top' | 'right' | 'left' | 'bottom'
  className?: string
}

const Tooltip = ({ children, content, position, className }: Props) => {
  const positionObj = {
    top: styles.top,
    bottom: styles.bottom,
    right: styles.right,
    left: styles.left,
  }

  return (
    <div className={cx(styles.tooltip, className)}>
      {children}
      <span className={cx(styles.tooltipContent, positionObj[position])}>{content}</span>
    </div>
  )
}

export default Tooltip
