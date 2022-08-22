function Counter1({ totalFromParent, plusOne }) {
  return (
    <>
      <h1>{totalFromParent}</h1>
      <button onClick={plusOne}>+1</button>
    </>
  )
}

export default Counter1
