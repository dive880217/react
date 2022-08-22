function AddTodo({ inputValue, setInputValue, addTodo }) {
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={addTodo}
      />
      <button onClick={addTodo}>加入</button>
    </>
  )
}

export default AddTodo
