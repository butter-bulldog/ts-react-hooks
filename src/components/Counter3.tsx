/**
 * React Hooks useCallback
 * 
 * 
 * IncrementButtonはmemoでラップされたコンポーネントだが、
 * propsのonClickはParentが描画する度に新しくなる
 * 
 * DoubleButtonは初期描画時に生成した関数を常に返す
 * 親再描画によるDoubleButtonの再描画は発生しない
 */
import React, {useState, useCallback} from 'react'

type ButtonProps = {
  onClick: () => void
}

// 通常の関数コンポーネントでボタンを表示
const DecrementButton = (props: ButtonProps) => {
  const {onClick} = props
  console.log('DecrementButtonが再描画されました')
  return <button onClick={onClick}>Decrement</button>
}

// メモ化した関数コンポーネントでボタンを表示
const IncrementButton = React.memo((props: ButtonProps) => {
  const {onClick} = props
  console.log('IncrementButtonが再描画されました')
  return <button onClick={onClick}>Increment</button>
})

// メモ化した関数コンポーネントでボタンを表示
const DoubleButton = React.memo((props: ButtonProps) => {
  const {onClick} = props
  console.log('DoubleButtonが再描画されｍした')
  return <button onClick={onClick}>Double</button>
})

const Counter３ = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((c) => c - 1)
  }

  const increment = () => {
    setCount((c) => c + 1)
  }

  // 関数をメモ化する
  // 第2引数に空配列を渡すとuseCallbackは常に同じ関数を返す
  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      {/* コンポーネントに関数を渡す*/}
      <DecrementButton onClick={decrement} />
      {/* メモ化コンポーネントに関数を渡す*/}
      <IncrementButton onClick={increment} />
      {/* メモ化コンポーネントにメモ化した関数を渡す*/}
      <DoubleButton onClick={double} />
    </div>
  )
}
export default Counter３