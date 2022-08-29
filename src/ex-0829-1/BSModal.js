import { useEffect, useState } from 'react'
//import {Modal} from 'bootstrap'
// 改用下面的導入可以減少打包後的js檔大小
import Modal from 'bootstrap/js/dist/modal'

import { BsCart4 } from 'react-icons/bs'

function BSModal(props) {
  const [myModal, setMyModal] = useState(null)

  // didMount
  // 在這裡面可以確保vdom已經出現在網頁上
  // 所以可以作各種dom元素直接處理
  useEffect(() => {
    setMyModal(new Modal('#exampleModal'))
  }, [])

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          myModal.show()
        }}
      >
        <BsCart4 color="#ffffff" size="1.5em" />
        呈現
      </button>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BSModal
