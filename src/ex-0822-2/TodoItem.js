function TodoItem({ updateTodo, deleteTodo, editTodo, v }) {
  return (
    <>
      <li key={v.id}>
        {/* 勾選完成/未完成用 */}
        <input
          type="checkbox"
          checked={v.completed}
          onChange={() => {
            // 拷貝+改變目前的這個id資料的completed
            updateTodo(v.id, { completed: !v.completed })
          }}
        />
        {v.completed ? <del>{v.text}</del> : v.text}
        <button
          onClick={() => {
            deleteTodo(v.id)
          }}
        >
          刪除
        </button>
        <button
          onClick={() => {
            editTodo(v.id, v.text)
          }}
        >
          編輯
        </button>
      </li>
    </>
  )
}

export default TodoItem
