import { useEffect, useState } from 'react'

function ChildB(props) {
  const [cData, setCdata] = useState('來自 B')

  // 一呈現就會回送資料的寫法
//   useEffect(() => {
//     props.setDataFromChildB(cData)
//   }, [])
  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          props.setDataFromChildB(cData)
        }}
      >
        送資料給ChildA
      </button>
      改用useEffect
    </>
  )
}

export default ChildB
