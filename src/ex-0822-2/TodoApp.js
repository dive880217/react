import { useState } from 'react'
import AddTodo from './AddTodo'
import EditTodo from './EditTodo'
import TodoItem from './TodoItem'

function TodoApp() {
  // 文字輸入框用state
  const [inputValue, setInputValue] = useState('')

  // 編輯單一筆todo用
  const [editedTodo, setEditedTodo] = useState('')

  // 待辨事項用state
  // [{
  //  id: 1,
  //  text: '買牛奶',
  //  completed: false,
  //  editing: false  //切換編輯框用
  // }]
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: true,
      editing: false,
    },
    { id: 2, text: '學react', completed: false, editing: false },
  ])

  // 新增todo
  // params: e 事件物件
  const addTodo = (e) => {
    // 如果沒輸入值，就中止之後的程式執行
    if (inputValue === '') return

    // 如果按下Enter鍵或click按鈕
    if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click') {
      // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
      // 2. 在新的變數值(陣列/物件)上作處理
      // 3. 設定回原本的狀態中

      // 建立要加入的新物件
      const newObj = {
        id: +new Date(),
        text: inputValue,
        completed: false,
        editing: false,
      }

      // 把inputValue加到todos陣列最前面
      const newTodos = [newObj, ...todos]

      setTodos(newTodos)

      // 清空原本的文字輸入框
      setInputValue('')
    }
  }

  // 刪除todo
  // params: id 目前要刪除的資料id
  const deleteTodo = (id) => {
    // 刪除這個id的資料 相當於 回傳一個新的陣列不包含此id的資料
    const newTodos = todos.filter((v2, i2) => {
      return id !== v2.id
    })

    setTodos(newTodos)
  }

  // 更新todo
  // params:
  // id 目前要更新的資料id
  // valueObject: object  ex. { text:'abc' }
  const updateTodo = (id, valueObject) => {
    const newTodos = todos.map((v2, i2) => {
      return id === v2.id ? { ...v2, ...valueObject } : { ...v2 }
    })

    setTodos(newTodos)
  }

  const editTodo = (id, text) => {
    // 拷貝出目前所有todos狀態
    // 將所有其它的項目editing設為false
    // 將目前的項目editing設為true
    const newTodos = todos.map((v2, i2) => {
      return id === v2.id ? { ...v2, editing: true } : { ...v2, editing: false }
    })

    setTodos(newTodos)

    // 將editedTodo設為v.text，準備進行編輯
    setEditedTodo(text)
  }

  return (
    <>
      <h1>待辨事項</h1>
      <hr />
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
      />
      <ul>
        {todos.map((v, i) => {
          return v.editing ? (
            <EditTodo
              key={v.id}
              editedTodo={editedTodo}
              setEditedTodo={setEditedTodo}
              updateTodo={updateTodo}
              v={v}
            />
          ) : (
            <TodoItem
              key={v.id}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              v={v}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
