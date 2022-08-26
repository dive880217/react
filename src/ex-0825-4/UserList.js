import { useState, useEffect } from 'react'
import './UserList.css'

import _ from 'lodash'

function UserList() {
  // 只記錄第一次didMount時和伺服器要資料的狀態
  const [usersRaw, setUsersRaw] = useState([])

  // 畫面上目前呈現用狀態
  const [usersDisplay, setUsersDisplay] = useState([])

  // 搜尋用
  const [searchWord, setSearchWord] = useState('')

  // 是否正在載入資料的旗標, true = 載入資料中
  const [isLoading, setIsLoading] = useState(false)

  // 分頁用
  const [pageNow, setPageNow] = useState(1) // 目前頁號
  const [perPage, setPerPage] = useState(6) // 每頁多少筆資料
  const [pageTotal, setPageTotal] = useState(0) //總共幾頁，在didMount時要決定

  // 向伺服器要資料
  const fetchUsers = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )

    // 剖析為js資料類型
    const data = await response.json()

    console.log(data)

    const pageList = _.chunk(data, perPage)

    console.log(pageList)

    if (pageList.length > 0) {
      setPageTotal(pageList.length)
      // 設定到state中
      setUsersDisplay(pageList)

      setUsersRaw(data)
    }
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

  const paginationBar = (
    <>
      <div className="pagination">
        <a
          href="#/"
          onClick={() => {
            setPageNow(1)
          }}
        >
          &laquo;
        </a>
        {Array(pageTotal)
          .fill(1)
          .map((v, i) => {
            return (
              <a
                key={i}
                href="#/"
                className={i + 1 === pageNow ? 'active' : ''}
                onClick={() => {
                  setPageNow(i + 1)
                }}
              >
                {i + 1}
              </a>
            )
          })}
        <a
          href="#/"
          onClick={() => {
            setPageNow(pageTotal)
          }}
        >
          &raquo;
        </a>
      </div>
    </>
  )

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
        {usersDisplay.length > 0 &&
          usersDisplay[pageNow - 1].map((v, i) => {
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
      <h1>User List(資料由瀏覽器react處理)</h1>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}
      />
      <button
        onClick={() => {
          //開啟載入指示動畫
          setIsLoading(true)

          // 以姓名進行搜尋(相當於過濾狀態usersRaw)
          setUsersDisplay(usersRaw.filter((v) => v.name.includes(searchWord)))

          // 2秒後關起動畫呈現資料
          setTimeout(() => {
            setIsLoading(false)
          }, 2000)
        }}
      >
        搜尋
      </button>
      <div>{isLoading ? loader : displayTable}</div>
      <br />
      {paginationBar}
    </>
  )
}

export default UserList
