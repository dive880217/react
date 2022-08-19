//第一種
// function Child(props) {
//   console.log(props)
//   return (
//     <>
//       <h1>Child</h1>
//       {props.name},{props.text}
//       <p>總共{props.total}元</p>
//     </>
//   )
// }
// export default Child

//第二種
//ES6 語法
//解構賦值

// function Child(props) {
//   //解構賦值
//   const { name, text, total } = props
//   return (
//     <>
//       <h1>Child</h1>
//       {name},{text}
//       <p>總共{total}元</p>
//     </>
//   )
// }
// export default Child

// // 錯誤的⽰範:
// let a, b
// { a, b } = {a: 1, b: 2}

//第三種 // 以後可能都會是第三種的語法 比較簡單方便
// function Child({ name, text, total })
// 建議在傳入參數定義中解構，有利於vscode偵測元件屬性

import PropTypes from 'prop-types'
function Child({ name = '無名', text = 'you', total = 100 }) {
  //解構賦值
  return (
    <>
      <h1>Child</h1>
      {name},{text}
      <p>總共{total}元</p>
    </>
  )
}
// 也可以用在解構賦值裡
// Child.defaultProps = {
//   name: '無名',
//   text: 'you',
//   total: 100,
// }
Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}
export default Child
