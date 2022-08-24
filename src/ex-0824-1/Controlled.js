import { useState } from 'react'

function Controlled(props) {
  const [inputText, setInputText] = useState('')
  const [inputNumber, setInputNumber] = useState(0) // 保持state的資料類型為數字

  const [textArea, setTextArea] = useState('')

  // radio
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  // select
  const [pet, setPet] = useState('')
  const petOptions = ['狗', '貓', '金魚']

  // checkbox group
  const [likeList, setLikeList] = useState([])
  const fruitOptions = ['芒果', '蘋果', '香蕉']

  return (
    <>
      <h1>可控的表單元素</h1>
      <hr />
      <section id="input-text">
        <h2>文字輸入框(input text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <br />
        數字:
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => {
            //e.target.value必為字串資料類型，這裡要轉為數字(state資料類型一致性)
            setInputNumber(Number(e.target.value))
          }}
        />
        目前價格: {inputNumber + 100}
      </section>
      <section id="text-area">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>
      <section id="radio">
        <h2>選項按鈕(radio)</h2>
        {genderOptions.map((v, i) => {
          return (
            <div key={i}>
              {/* 上面當列表元素完全是靜態資料才能用i當key */}
              <input
                type="radio"
                checked={gender === v}
                value={v}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="select">
        <h2>下拉選單(select)</h2>
        <label>選擇寵物</label>
        <select
          value={pet}
          onChange={(e) => {
            setPet(e.target.value)
          }}
        >
          <option value="">--請選擇--</option>
          {petOptions.map((v, i) => {
            return <option value={v}>{v}</option>
          })}
        </select>
      </section>
      <section id="checkbox">
        <h2>核取方塊(checkbox)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={likeList.includes(v)}
                onChange={(e) => {
                  const value = e.target.value

                  if (likeList.includes(value)) {
                    // 如果此項目在state陣列中 -> 移出此陣列
                    // 回傳一個沒有此項目的新state陣列
                    setLikeList(likeList.filter((v) => v !== value))
                  } else {
                    // 如果此項目不在state陣列中 -> 加入此陣列
                    setLikeList([...likeList, value])
                  }
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Controlled
