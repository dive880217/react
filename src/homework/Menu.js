import { useState } from 'react'
import './Menu.css'

function Menu() {
  const [activeText, setActiveText] = useState('')
  const menuItems = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              // 產生隨機key
              key={Math.random().toString(36).replace('0.', '')}
              onClick={() => {
                setActiveText(v)
              }}
            >
              <a href="#/" className={activeText === v ? 'active' : ''}>
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
