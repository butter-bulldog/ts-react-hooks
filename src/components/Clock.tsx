/**
 * React Hooks useEffect
 * 
 * 副作用を実行するためのフック
 * useEffectを使うとpropsやstateが更新され、再描画が終わった後に処理を実行する
 * 特定のデータが変化した時だけ処理を行うように設定できる
 */
import React, {useState, useEffect} from 'react'

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  // タイマーのセットをするための副作用
  // 空配列を渡した場合は初期描画が終わった直後にのみ実行され、その後の再描画では実行されない
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    // クリーンアップ関数
    // タイマー設定を解除
    return () => {
      clearInterval(timer)
    }

  }, [])


  // ローカルストレージから値を読み込むための副作用
  // 空配列を渡した場合は初期描画が終わった直後にのみ実行され、その後の再描画では実行されない
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale != null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  // localeが変化した際に、localstorageに値を保存するための副作用
  // 描画毎に保存する必要はなく、ドロップダウンメニューを選択してlocaleが更新された時だけ保存されるようにするために
  // 依存配列にlocaleを渡す
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
  }, [locale])


  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>    
      </p>
    </div>
  )
}

export default Clock