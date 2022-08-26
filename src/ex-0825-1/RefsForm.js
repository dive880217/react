import { useRef } from 'react'

function RefsForm() {
  // ref的type原型: `{ current: T } `
  const inputRef = useRef(null)

  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        focus
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        blur
      </button>
      <button
        onClick={() => {
          alert(inputRef.current.value)
        }}
      >
        get value
      </button>
      <hr />
    </>
  )
}

export default RefsForm
