// import { useState } from 'react'

// function Counter2({ totalFromParent, setTotalFromParent }) {
//   const [total, setTotal] = useState(0)

//   return (
//     <>
//       <h1>{totalFromParent}</h1>
//       <button
//         onClick={() => {
//           setTotal(totalFromParent + 1)
//         }}
//       >
//         +1
//       </button>
//     </>
//   )
// }

// export default Counter2

function Counter2({ totalFromParent, plusOne }) {
  return (
    <>
      <h1>{totalFromParent}</h1>
      <button onClick={plusOne}>-1</button>
    </>
  )
}

export default Counter2