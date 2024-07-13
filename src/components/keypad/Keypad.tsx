import React from 'react'
import Key, { KeyProps } from '../key/Key'
import './Keypad.css'
import Decimal from 'decimal.js';

export interface KeypadProps {
  keys: KeyProps[][];
  handleClick: (event: React.MouseEvent<HTMLElement>, keyProps: KeyProps) => void;
  currentOperation: string | null;
  trigUnit: string;
  memory: Decimal | null;
}

const Keypad: React.FC<KeypadProps> = ({
  keys: rows,
  handleClick,
  currentOperation,
  trigUnit,
  memory
}) => (
  <section className="Keypad">
    {rows.map((keys, index) => (
      <div className="Keypad-row" key={`row${index}`}>
        {keys.map(keyProps => (
          <Key
            key={keyProps.id}
            {...keyProps}
            handleClick={handleClick}
            active={
              currentOperation === keyProps.id ||
              ('memoryRecall' === keyProps.id && memory !== null)
            }
            trigUnit={trigUnit}
          />
        ))}
      </div>
    ))}
  </section>
)

export default Keypad
