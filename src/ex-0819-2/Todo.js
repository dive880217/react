import { useState } from 'react'

function Todo() {
  // 文字輸入框用state
  const [inputValue, setInputValue] = useState('')

  // 待辨事項用state
  // [{
  //  id: 1,
  //  text: '買牛奶',
  //  completed: false,
  // }]
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: true,
    },
    { id: 2, text: '學react', completed: false },
  ])

  const handleCompleted = () => {}

  return (
    <>
      <h1>待辨事項</h1>
      <hr />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          // 如果沒輸入值，就中止之後的程式執行
          if (inputValue === '') return

          // 如果按下Enter鍵，把inputValue加到todos陣列最前面
          if (e.key === 'Enter') {
            // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
            // 2. 在新的變數值(陣列/物件)上作處理
            // 3. 設定回原本的狀態中

            // 建立要加入的新物件
            const newObj = {
              id: +new Date(),
              text: inputValue,
              completed: false,
            }

            const newTodos = [newObj, ...todos]
            // 也可以用: const newTodos = [e.target.value, ...todos]
            setTodos(newTodos)

            // 清空原本的文字輸入框
            setInputValue('')
          }
        }}
      />
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          // 如果沒輸入值，就中止之後的程式執行
          if (inputValue === '') return

          // 建立要加入的新物件
          // +new Date()相當於 Number(new Date())
          const newObj = { id: +new Date(), text: inputValue, completed: false }

          const newTodos = [newObj, ...todos]
          // 也可以用: const newTodos = [e.target.value, ...todos]
          setTodos(newTodos)

          // 清空原本的文字輸入框
          setInputValue('')
        }}
      >
        加入
      </button>
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  // 拷貝+改變目前的這個id資料的completed
                  const newTodos = todos.map((v2, i2) => {
                    return v2.id === v.id
                      ? { ...v2, completed: !v2.completed }
                      : { ...v2 }
                  })

                  //設定回todos狀態
                  setTodos(newTodos)
                }}
              />
              {v.completed ? <del>{v.text}</del> : v.text}
              <button
                onClick={() => {
                  // 刪除這個id的資料 相當於 回傳一個新的陣列不包含此id的資料
                  const newTodos = todos.filter((v2, i2) => {
                    return v.id !== v2.id
                  })

                  setTodos(newTodos)
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Todo
