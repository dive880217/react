import { useEffect, useState } from 'react'

function FCLifecycle() {
  const [total, setTotal] = useState(0)

  // 模擬didMount
  // 注意在18版後會呼叫2次(因index.js中StrictMode的關係，只有開發期間)
  // https://github.com/arifszn/gitprofile/issues/70
  // https://github.com/facebook/react/issues/24746
  useEffect(() => {
    console.log('模擬didMount')
  }, [])

  // 模擬didUpdate + didMount (因為初始化也算更動到total)
  useEffect(() => {
    // 當total(放在相依性陣列中的狀態) 有改變時，會執行這裡面的程式碼
    console.log('模擬didUpdate + didMount')
  }, [total]) // 相依性陣列填入兩種: 1.元件自己本身的state 2.元件接收的props

  // 只模擬didUpdate(用初始值判斷)
  useEffect(() => {
    // total的初始值是0
    if (total !== 0) {
      console.log('只模擬didUpdate(用初始值判斷)')
    }
  }, [total])

  // 模擬willUnmount
  useEffect(() => {
    return () => {
      console.log('模擬willUnmount')
    }
  }, [])

  return (
    <>
      {console.log('render')}
      <h1>useEffect與生命周期</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FCLifecycle
