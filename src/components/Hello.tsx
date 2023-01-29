/**
 * React Hooks useContext
 * 
 * コンテキストから値を参照するためのフック
 * 本サンプルでは親コンポーネントで設定したデータを、孫コンポーネントで使用している
 */
import React, {useContext} from 'react'

type User = {
  id: number
  name: string
}

// ユーザーデータを保持するコンテキストを作成
const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  const user = useContext(UserContext)
  return user !== null ? <p>Hello, {user.name}</p> :null
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      <p>Current: {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  )
}

const Hello = () => {
  const user: User = {
    id: 1,
    name: 'Alice',
  }

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}

export default Hello