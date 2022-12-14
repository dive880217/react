import { useState } from 'react'

function Controlled(props) {
  const [inputText, setInputText] = useState('')
  const [inputNumber, setInputNumber] = useState(0) // 保持state的資料類型為數字

  const [textArea, setTextArea] = useState('')

  // radio
  const [gender, setGender] = useState('女')
  const genderOptions = ['男', '女', '不提供']

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
    </>
  )
}

export default Controlled
