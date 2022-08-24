import { useState } from 'react'
import './HTML5Form.css'

function HTML5Form() {
  const [user, setUser] = useState({
    fullName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  // 呈現密碼用
  const [showPassword, setShowPassword] = useState(false)

  // 記錄每個欄位的錯誤訊息用
  const [fieldErrors, setfieldErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  const handleFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // 阻擋預設表單送出行為
    e.preventDefault()

    // 客製化的驗証機制
    if (user.password !== user.confirmPassword) {
      setfieldErrors({
        ...fieldErrors,
        password: '密碼與確認密碼不同',
        confirmPassword: '密碼與確認密碼不同',
      })

      return // 中止之後的函式動作
    }

    // 最後送到伺服器 ajax, fetch...
    console.log(user)
  }

  const handleInvalid = (e) => {
    // 阻擋 檢查的泡泡訊息
    e.preventDefault()

    //console.log(e.target.validationMessage)

    // 技巧: 用js來focus第一個錯誤欄位
    document.querySelector('input:invalid').focus()

    setfieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  // 整個表單用，用於當使用者輸入時，暫時先清空某欄位的錯誤訊息
  const handleFormChange = (e) => {
    // 略過呈現密碼 核取方塊
    if (e.target.name === 'showPassword') return

    setfieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
  }

  return (
    <>
      <h1>HTML5表單驗証</h1>
      <hr />
      <form
        onSubmit={handleSubmit}
        onInvalid={handleInvalid}
        onChange={handleFormChange}
      >
        <label>姓名</label>
        <input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.fullName}</span>
        <br />
        <label>電話</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleFieldChange}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.email}</span>
        <br />
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.username}</span>
        <br />
        <label>密碼</label>
        <input
        //三源運算子 呈現密碼顯現 不是就呈現... 是就呈現密碼
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={user.password}
          onChange={handleFieldChange}
          minLength={6}
          maxLength={10}
          required
        />
        <input
          type="checkbox"
          name="showPassword"
          checked={showPassword}
          onChange={(e) => {
            setShowPassword(!showPassword)
          }}
        />
        <label>呈現密碼</label>
        <span className="error">{fieldErrors.password}</span>
        <br />
        <label>確認密碼</label>
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleFieldChange}
          minLength={6}
          maxLength={10}
          required
        />
        <span className="error">{fieldErrors.confirmPassword}</span>
        <br />
        <button type="submit">確認送出</button>
      </form>
    </>
  )
}

export default HTML5Form
