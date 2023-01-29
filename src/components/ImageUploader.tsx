/**
 * React Hooks useRef
 * 
 * useStateやuseReducerは状態が更新されると再描画が発生するが
 * refオブジェクトに保存された値を更新しても再描画が発生しない
 * そのため描画に関係ないデータを保持するのに使われる
 * 
 * refには大きくわけて2つの使い方がある
 * 「データ」の保持、DOMの参照
 *  「データ」はref.currentから読み出したり書き換えたりする
 * DOMの参照はrefをコンポーネントに渡すと要素がマウントされたときにref.currentにDOMの参照がセットされ、DOMの関数などを呼び出すことができる
 */

import React, {useState, useRef} from 'react'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 2000

const ImageUploader = () => {

  // 隠されたinput要素にアクセスするためのrefを作成
  const inputImageRef = useRef<HTMLInputElement | null>(null)

  // 選択されたファイルデータを保持するrefを作成
  const fileRef = useRef<File | null>(null)

  const [message, setMessage] = useState<string | null>('')

  const onClickText = () => {
    if (inputImageRef.current !== null) {
      // 見えない要素をクリックしている
      inputImageRef.current.click()
    }
  }

  // ファイルが選択された後に呼ばれるコールバック
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files !== null && files.length > 0) {
      // fileRef.currentが変化しても再描画は発生しない
      fileRef.current = files[0]
    }
  }

  // アップロードボタンがクリックされた時に呼ばれるコールバック
  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      await sleep(UPLOAD_DELAY)
      setMessage(`${fileRef.current.name} has been successfully uploaded`)
    } else {
      setMessage('画像を選択してください')
    }
  }

  return (
    <div>
      <p style={{ textDecoration: 'underline'}} onClick={onClickText}>
        1. 画像を選択
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        // 見えないようにしている
        style={{visibility: 'hidden'}}
      />
      <br />
      <button onClick={onClickUpload}>2. アップロードする</button>
      {message !== null && <p>{message}</p>}
    </div>
  )
}

export default ImageUploader