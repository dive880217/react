import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
//   const [pData, setPdata] = useState('data in Parent')

  const [dataFromChildB, setDataFromChildB] = useState('')
  return (
    <>
      <h1>Parent</h1>

      {/* 子女傳給子女 props */}
      <ChildA dataFromChildB={dataFromChildB} />
      
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default Parent
