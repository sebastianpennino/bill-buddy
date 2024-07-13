import { FC } from 'react'
import { ReactElement } from 'react'
import scaleDisplayFontSize from '../../utils/scaleDisplayFontSize'
import './Display.css'

/**
 * Renders the display component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.value - The current display value.
 * @param {string} props.trigUnit - The unit of measurement for trigonometric functions.
 * @param {string} props.mode - The calculator mode (basic|scientific).
 * @returns {ReactElement} The rendered display component.
 */
const Display: FC<{
  value?: string
  trigUnit: string
  mode: string
}> = ({ value = '0', trigUnit, mode }): ReactElement => {
  // scales fontSize based on length of display value
  const fontSize = scaleDisplayFontSize(value, mode)
  return (
    <section className="Display">
      {mode === 'scientific' && (
        <div className="Display-unit">{trigUnit}</div>
      )}
      <div className="Display-value" style={{ fontSize }}>
        {value}
      </div>
    </section>
  )
}

export default Display
