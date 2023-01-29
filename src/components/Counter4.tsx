/**
 * React Hooks useMemo
 * 
 * 値のメモ化をする
 * 不必要な計算を削減する場合など
 */
import React, {useState, useMemo} from 'react'

const Counter4 = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text]
    })
    setText('')
  }

  // items関係なしに再描画の度に実行して結果を得る
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)

  // itemsが新しくなった時だけメモを更新する
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0)
  }, [items])

  return (
    <div>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}

export default Counter4