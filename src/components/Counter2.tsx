/**
 * React Hooks useReducer
 * 
 * 配列やオブジェクトなどの複数のデータをまとめたものを状態として扱う場合に用いられる
 * useStateは更新関数に次の状態を渡すが、
 * useReducerでは更新関数にデータを渡し、そのデータをreducer関数で処理し次の状態を決定する
 */
import {useReducer} from 'react'

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// reducer関数
// reducer(現在の状態, action) {
//   return 次の状態
// }
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

type CounterProps = {
  initialValue: number
}

const Counter2 = (props: CounterProps) => {
  const {initialValue} = props

  // const [現在の状態, 更新関数] = useReducer(reducer関数, reducerに渡される初期状態)
  const [count, dispatch] = useReducer(reducer, initialValue)

  // 更新関数を呼び出すと、reducer関数により状態を変化させ再描画される
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch('DECREMENT')}>-</button>
      <button onClick={() => dispatch('INCREMENT')}>+</button>
      <button onClick={() => dispatch('DOUBLE')}>x2</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default Counter2