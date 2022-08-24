import { useState } from 'react'

function BirthSelect() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const [text, setText] = useState('')

  // 產生對應的`數字陣列`用
  // min:number , max: number
  const makeOptions = (min, max) => {
    const options = []

    for (let i = min; i < max + 1; i++) {
      options.push(i)
    }

    return options
  }

  return (
    <>
      <h1>生日下拉選單與判斷18歲</h1>
      西元
      <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        {makeOptions(1920, 2010).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <label>年</label>
      <select
        value={month}
        onChange={(e) => {
          setMonth(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        {makeOptions(1, 12).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <label>月</label>
      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        {/* 當year或month沒選時，不會出現day的選項 */}
        {year !== '' &&
          month !== '' &&
          makeOptions(
            1,
            new Date(Number(year), Number(month), 0).getDate()
          ).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
      </select>
      <label>日</label>
      <button
        onClick={() => {
          if (year === '' || month === '' || day === '') {
            alert('請先完成年月日選擇')
            return //跳出函式執行(常用!!)
          }

          //18年的微秒值 = 18 * 365.25 * 24 * 60 * 60 * 1000 = 568036800000
          const ms18years = 568036800000

          // 使用者選了年月日後的微秒值
          const msBirth = +new Date(`${year}/${month}/${day}`)

          // 目前(現在)的微秒值
          const msNow = +new Date()

          if (msNow - msBirth > ms18years) {
            setText('滿18歲')
          } else {
            setText('未滿18歲')
          }
        }}
      >
        送出檢查
      </button>
      <p style={{ color: text === '滿18歲' ? 'green' : 'red' }}>{text}</p>
    </>
  )
}

export default BirthSelect
