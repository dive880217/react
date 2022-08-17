// import { useState } from 'react'

// function Counter() {
//   const [total, setTotal] = useState(0)

//   return (
//     <>
//       <h1
//         onClick={() => {
//           setTotal(total + 1)
//         }}
//       >
//         {total}
//       </h1>
//       {total !== 0 && 'total 現在 > 0'}
//     </>
//   )
// }

// export default Counter

//異步執行
import { useState } from 'react'

function Counter() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          console.log('before', total)

          const newTotal = total + 1
          setTotal(newTotal)

          console.log('after', newTotal)
        }}
      >
        +1
      </button>
    </>
  )
}

export default Counter