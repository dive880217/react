// react 開發用狀態 state 來思考
// import 引入
// export 就是導入

// 0816
// import { useState } from 'react'
// import { a, foo } from './ModuleA'
// import bar from './ModuleB'
// import koo, { o, b } from './ModuleC'

// function App() {
//   const [total, setTotal] = useState(0)

//   return (
//     <>
//       <h1>{total}</h1>
//       <button
//         onClick={() => {
//           setTotal(total + 1)
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           setTotal(total - 1)
//         }}
//       >
//         -1
//       </button>
//     </>
//   )
// }
// // react 一般都在app.js更改東西，
// // 不會再public更改index.html的內容
// // ，通常會改指示調整css內容或檔案路徑

// export default App

// ===========================================================

// 0817
// const element = <h1>hello</h1><button></button>
// JSX 運算式必須具有一個父元素。

// import {  } from "module";
// function App() {
// return (
//   <>
//     <h1>hell</h1>
//     <button>button</button>
//   </>
// )
// }
// react 一般都在app.js更改東西，
// 不會再public更改index.html的內容
// ，通常會改指示調整css內容或檔案路徑

// export default App
// =============================================

// import JSXTest from './ex-0817-1/JSXTest'

// function App() {
//   return (
//     <>
//       <JSXTest />
//     </>
//   )
// }

// export default App

// import JSXTest from './ex-0817-1/JSXTest'

// =============================================

// import Student from './ex-0817-2/Student'

// function App() {
//   return (
//     <>
//       <Student />
//     </>
//   )
// }

// export default App

// =============================================

// import Product from './ex-0817-3/Product'

// function App() {
//   return (
//     <>
//       <Product />
//     </>
//   )
// }

// export default App

// =============================================
// import Counter from './ex-0817-4/Counter'

// function App() {
//   return (
//     <>
//       <Counter />
//     </>
//   )
// }

// export default App

// =============================================

import Menu from './homework/Menu'

function App() {
  return (
    <>
      <Menu />
    </>
  )
}

export default App
