/**
 * React Hooks useState
 * 状態を扱うためのフック
 */
import {useState} from 'react'

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const {initialValue} = props
  // const [状態, 更新関数] = useState(初期値)
  const [count, setCount] = useState(initialValue)

  // 更新関数を呼び出すと状態が変化し再描画される
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count -1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter