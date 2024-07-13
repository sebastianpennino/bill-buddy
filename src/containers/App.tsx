import React, { useState, useEffect } from 'react';
import App from '../components/app/App';
import keypads, { KeypadType } from '../constants/keypads';
import Decimal from 'decimal.js';

type AppContainerProps = {}

type AppState = {
  displayValue: string;
  currentOutput: Decimal | null;
  currentOperation: string | null;
  resetDisplayValueOnNextKeyPress: boolean;
  mode: string;
  trigUnit: string;
  memory: Decimal | null;
};

const AppContainer: React.FC<AppContainerProps> = () => {
  const [state, setState] = useState<AppState>({
    displayValue: '0',
    currentOutput: null,
    currentOperation: null,
    resetDisplayValueOnNextKeyPress: true,
    mode: 'scientific',
    trigUnit: 'deg',
    memory: null
  });

  useEffect(() => {
    const mobilePortrait = window.matchMedia('(max-width: 450px)');
    const mobileLandscape = window.matchMedia('(max-width: 740px) and (max-height: 450px)');
    const landscape = window.matchMedia('(orientation: landscape)');

    const setMode = (landscape: MediaQueryList) => {
      if (!(mobilePortrait.matches || mobileLandscape.matches)) return;
      setState((prevState) => ({ ...prevState, mode: landscape.matches ? 'scientific' : 'basic' }));
    };
    landscape.addEventListener('change', (event) => setMode(event.target as MediaQueryList));
    setMode(landscape);
  }, []);

  const handleNumberKey = (key: { textContent: string; id: string }) => {
    const { displayValue: prevDisplayValue, resetDisplayValueOnNextKeyPress } = state;
    const number = key.textContent;
    let displayValue = resetDisplayValueOnNextKeyPress ? '' : prevDisplayValue;

    if (key.id === 'decimal' && !displayValue.includes('.')) {
      displayValue = displayValue ? displayValue + '.' : '0.';
    } else if (key.id !== 'decimal') {
      displayValue += number;
    }

    setState((prevState) => ({
      ...prevState,
      displayValue: displayValue.replace(/^0+(?!\.)/, ''),
      resetDisplayValueOnNextKeyPress: false
    }));
  };

  // Add other event handlers and methods here

  const handleClick = (event: React.MouseEvent<HTMLElement>, { type }: { type: string }) => {
    const methodName = `handle${type[0].toUpperCase()}${type.slice(1)}Key`;
    handleMethodCall(methodName, event.currentTarget);
  };

  const handleMethodCall = (methodName: string, target: HTMLElement) => {
    console.log('handleMethodCall');
    console.log('methodName', methodName, 'target', target);
    if(typeof methodName === 'string' && methodName === 'handleNumberKey') {
      // handleNumberKey(target);
      console.log(target, handleNumberKey)
    }
    // if (typeof methodName === 'string' && typeof this[methodName] === 'function') {
    //   this[methodName](target);
    // }
  };

  return (
    <App
      keys={keypads[state.mode as KeypadType]}
      currentOperation={state.currentOperation}
      mode={state.mode}
      displayValue={state.displayValue}
      trigUnit={state.trigUnit}
      memory={state.memory}
      handleClick={handleClick}
    />
  );
};

export default AppContainer;
