/**
 * React Hooks useImperativeHandle
 * 
 * コンポーネントにrefが渡されたときに、親のrefに代入される値を設定するのに使う
 * useImperativeHandleを使うことで、子コンポーネントが持つデータを参照したり、
 * 子コンポーネントで定義されている関数を親から呼んだりできる
 */
import React, {useState, useRef, useImperativeHandle} from 'react'

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)

  // 親のrefから参照できる値を指定
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello, it's ${date.toLocaleString()} now`
      setMessage(message)
    },
  }))
  return <div>{message !== null ? <p>{message}</p> : null}</div>
})

const Hello2 = () => {
  const childRef = useRef<{showMessage: () => void}>(null)
  const onClick = () => {
    if (childRef.current !== null) {
      // 子のuseImperativeHandleで指定した値を参照
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </div>
  )
}

export default Hello2