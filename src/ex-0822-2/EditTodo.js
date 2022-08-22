function EditTodo({ editedTodo, setEditedTodo, updateTodo, v }) {
  return (
    <>
      <li>
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => {
            setEditedTodo(e.target.value)
          }}
        />
        <button
          onClick={() => {
            // 拷貝+改變目前的這個id資料的text, editing改回false
            updateTodo(v.id, { text: editedTodo, editing: false })
          }}
        >
          儲存
        </button>
      </li>
    </>
  )
}

export default EditTodo
