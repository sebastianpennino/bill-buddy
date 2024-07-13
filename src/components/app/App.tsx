import React from 'react'
import Keypad from '../keypad/Keypad'
import Display from '../display/Display'
import './App.css'
import Decimal from 'decimal.js';
import { type KeyProps } from '../key/Key';

export interface AppProps {
  displayValue: string;
  mode: string;
  trigUnit: string;
  keys: KeyProps[][];
  handleClick: (event: React.MouseEvent<HTMLElement>, keyProps: KeyProps) => void;
  currentOperation: string | null;
  memory: Decimal | null;
}

const App: React.FC<AppProps> = ({ displayValue, mode, trigUnit, keys, handleClick, currentOperation, memory }) => (
  <div className="App">
    <div className={`calculator ${mode}`}>
      <Display trigUnit={trigUnit} value={displayValue} mode={mode} />
      <Keypad trigUnit={trigUnit} keys={keys} handleClick={handleClick} currentOperation={currentOperation} memory={memory} />
    </div>
  </div>
)

export default App
