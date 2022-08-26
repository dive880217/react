import { useState, useEffect } from 'react'
import './UserList.css'

function UserList() {
  const [users, setUsers] = useState([])

  // 搜尋用
  const [searchWord, setSearchWord] = useState('')

  // 是否正在載入資料的旗標, true = 載入資料中
  const [isLoading, setIsLoading] = useState(false)

  // 向伺服器要資料
  const fetchUsers = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )

    // 剖析為js資料類型
    const data = await response.json()

    // 設定到state中
    setUsers(data)
  }

  // 向伺服器要資料，以姓名搜尋
  const fetchUsersBySearchWord = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?name_like=' +
        searchWord
    )

    // 剖析為js資料類型
    const data = await response.json()

    // 設定到state中
    setUsers(data)
  }

  // didMount時要載入外部伺服器的資料
  useEffect(() => {
    //開啟載入指示動畫
    setIsLoading(true)

    // 載入資料
    fetchUsers()

    // 2秒後關起動畫呈現資料
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const loader = (
    <div className="sk-circle">
      <div className="sk-circle1 sk-child"></div>
      <div className="sk-circle2 sk-child"></div>
      <div className="sk-circle3 sk-child"></div>
      <div className="sk-circle4 sk-child"></div>
      <div className="sk-circle5 sk-child"></div>
      <div className="sk-circle6 sk-child"></div>
      <div className="sk-circle7 sk-child"></div>
      <div className="sk-circle8 sk-child"></div>
      <div className="sk-circle9 sk-child"></div>
      <div className="sk-circle10 sk-child"></div>
      <div className="sk-circle11 sk-child"></div>
      <div className="sk-circle12 sk-child"></div>
    </div>
  )

  const displayTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>生日</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.birth}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>User List</h1>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
          // 注意`fetchUsersBySearchWord()`不能直接寫在這，因為fetchUsersBySearchWord用了searchWord，而searchWord此時尚未完成狀態改變至最後(setSearchWord是異步)
        }}
      />
      <button
        onClick={() => {
          //開啟載入指示動畫
          setIsLoading(true)

          // 進行伺服器連線要資料
          fetchUsersBySearchWord()

          // 2秒後關起動畫呈現資料
          setTimeout(() => {
            setIsLoading(false)
          }, 2000)
        }}
      >
        搜尋
      </button>
      <div>{isLoading ? loader : displayTable}</div>
    </>
  )
}

export default UserList
