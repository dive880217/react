//從父母元件傳過來，可以直接解構 useEffect
//function FormAdd(props) 變成下方的樣子 直接解構

function FormAdd({ inputValue, setInputValue, addTodo }) {
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

export default FormAdd
