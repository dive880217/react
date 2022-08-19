import Child from './Child'

function Parent() {
  return (
    <>
      <h1>Parent</h1>
      <Child text="Hello" name="Amy" total={123} />
      <Child text="Goodbye" name="Tomy" total={123456} />
      <Child />
      <Child text={100} name={"Who am I"} total="100$" />
    </>
  )
}

export default Parent
