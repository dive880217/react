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
// import HTML5Form from './ex-0824-5/HTML5Form'
// function App() {
//   return (
//     <>
//       <HTML5Form />
//     </>
//   )
// }

// export default App

//========================================
// import RefsForm from './ex-0825-1/RefsForm'
// import IdForm from './ex-0825-1/IdForm'
// function App() {
//   return (
//     <>
//       <IdForm />
//       <RefsForm />
//     </>
//   )
// }

// export default App
//========================================
// import FCLifecycle from './ex-0825-2/FCLifecycle'

// import { useState } from 'react'

// function App() {
//   const [show, setShow] = useState(true)

//   return (
//     <>
//       {show && <FCLifecycle />}
//       <button
//         onClick={() => {
//           setShow(!show)
//         }}
//       >
//         {show ? '移除' : '呈現'}
//       </button>
//     </>
//   )
// }

// export default App

//========================================
// import UserList from './ex-0825-3/UserList'
// function App() {
//   return (
//     <>
//       <UserList />
//     </>
//   )
// }

// export default App

//========================================

// import UserList from './ex-0825-4/UserList'

// function App() {
//   return (
//     <>
//       <UserList />
//     </>
//   )
// }

// export default App
//========================================

// import BSCollapse from './ex-0829-1/BSCollapse'

// function App() {
//   return (
//     <>
//       <BSCollapse />
//     </>
//   )
// }

// export default App
//========================================

// import BSCollapse from './ex-0829-1/BSCollapse'
// import BSModal from './ex-0829-1/BSModal'

// function App() {
//   return (
//     <>
//       {/* <BSCollapse /> */}
//       <BSModal />
//     </>
//   )
// }

// export default App

//========================================
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './utils/use-auth'
import React from 'react'

// 引入頁面元件
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import ProductMenSummer from './pages/ProductMenSummer'
import User from './pages/User'

function App() {
  return (
    <BrowserRouter>
      {/* 會員認証用Context提供者(auth, setAuth) */}
      <AuthProvider>
        {/* 連結到各頁面連結 */}
        <Link to="/">Home</Link>
        <br />
        <Link to="about">About</Link>
        <br />
        <Link to="product">Product</Link>
        <br />
        <Link to="product/men/summer">Product-Men-Summer</Link>
        <br />
        <Link to="User">User</Link>
        <br />
        <Link to="login">Login</Link>
        <hr />

        {/* 路由表 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product/men/summer" element={<ProductMenSummer />} />
          <Route path="product" element={<Product />} />
          <Route path="User" element={<User />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
