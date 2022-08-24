// react 開發用狀態 state 來思考
// import 引入
// export 就是導入

// 0816
// import { useState } from 'react'
// import { a, foo } from './ModuleA'
// import bar from './ModuleB'
// import koo, { o, b } from './ModuleC'
// 導入 koo function ,隔開 {裡面放宣告的變數}
// 但也可以在{裡面放func}

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

// import Menu from './homework/Menu'

// function App() {
//   return (
//     <>
//       <Menu />
//     </>
//   )
// }

// export default App

//=========================================

// import Todo from './ex-0819-2/Todo'

// function App() {
//   return (
//     <>
//       <Todo />
//     </>
//   )
// }

// export default App

//========================================
// import Child from './ex-0819-3/Child'
// import Parent from './ex-0819-3/Parent'

// function App() {
//   return (
//     <>
//       {/* <Child /> */}
//       <Parent />
//     </>
//   )
// }

// export default App

//========================================
// import Parent from './ex-0819-4/Parent'

// function App() {
//   return (
//     <>

//       <Parent />
//     </>
//   )
// }

// export default App

//========================================

// import Parent from './ex-0822-1/Parent'

// function App() {
//   return (
//     <>
//       <Parent />
//     </>
//   )
// }

// export default App

//========================================

// import Todo from './ex-0822-2/Todo'

// function App() {
//   return (
//     <>
//       <Todo />
//     </>
//   )
// }

// export default App

//========================================

// import TodoApp from './ex-0822-2/TodoApp'

// function App() {
//   return (
//     <>
//       <TodoApp />
//     </>
//   )
// }

// export default App

//========================================

// import OrderApp from './ex-0822-3/OrderApp'

// function App() {
//   return (
//     <>
//       <OrderApp />
//     </>
//   )
// }

// export default App
//========================================

// import Controlled from './ex-0822-4/Controlled'

// function App() {
//   return (
//     <>
//       <Controlled />
//     </>
//   )
// }

// export default App

//========================================

// import Controlled from './ex-0824-1/Controlled'

// function App() {
//   return (
//     <>
//       <Controlled />
//     </>
//   )
// }

// export default App

//========================================

// import BirthSelect from './ex-0824-2/BirthSelect'

// function App() {
//   return (
//     <>
//       <BirthSelect />
//     </>
//   )
// }

// export default App

//========================================
// import BMI from './ex-0824-3/BMI'

// function App() {
//   return (
//     <>
//       <BMI />
//     </>
//   )
// }

// export default App

//========================================

// import MultipleInput from './ex-0824-4/MultipleInput'

// function App() {
//   return (
//     <>
//       <MultipleInput />
//     </>
//   )
// }

// export default App

//========================================
import HTML5Form from './ex-0824-5/HTML5Form'
function App() {
  return (
    <>
      <HTML5Form />
    </>
  )
}

export default App
