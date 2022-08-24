import { useState } from 'react'

function MultipleInput() {
  const [user, setUser] = useState({
    fullName: '',
    phone: '',
    email: '',
  })

  const handleFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }

  return (
    <>
      <h1>多個表單元素對應同一state</h1>
      <hr />
      <label>姓名</label>
      <input
        type="text"
        name="fullName"
        value={user.fullName}
        onChange={handleFieldChange}
      />
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
        type="text"
        name="email"
        value={user.email}
        onChange={handleFieldChange}
      />
    </>
  )
}

export default MultipleInput
