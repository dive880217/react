

function ChildA(props) {
  return (
    <>
      <h1>ChildA</h1>
      {/* 子女傳給子女 props */}
      <p>來自Parent的資料 : {props.dataFromChildB}</p>
    </>
  )
}

export default ChildA
