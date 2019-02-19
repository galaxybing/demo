import * as React from 'react';
// import * as PropTypes from 'prop-types';

import './Hello.css';

//function noop() {
//}

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

class Hello extends React.Component<Props, object> {
  constructor(props:any) { // 修复：Argument of type 'typeof Hello' is not assignable to parameter of type 'ComponentType<...
                           // 即，按类的形式定义模块时，需要调用 super ,不然导出后类型会无法匹配
    super(props);
  }
  
  render() {
    const {name, enthusiasmLevel = 1, onIncrement, onDecrement} = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic.');
    }
    
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}


/*
function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}
*/

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
