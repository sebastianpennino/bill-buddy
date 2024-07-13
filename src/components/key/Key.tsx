import React from 'react'
import './Key.css'

export interface KeyProps {
  type: string;
  id: string;
  handleClick: (event: React.MouseEvent<HTMLElement>, keyProps: KeyProps) => void;
  active: boolean;
  trigUnit: string;
  label: string;
}

const Key: React.FC<KeyProps> = ({
  type,
  id,
  handleClick,
  active,
  trigUnit,
  label,
  ...props
}): JSX.Element => {
  const text = id === 'trigUnit' ? (trigUnit === 'deg' ? 'rad' : 'deg') : label
  return (
    <button
      id={id}
      className={`Key ${type} ${active ? 'active' : ''}`}
      onClick={(event) => handleClick(event, { type, id, handleClick, active, trigUnit, label })}
      {...props}>
      <span className="Key-label" dangerouslySetInnerHTML={{ __html: text }} />
    </button>
  )
}



export default Key
