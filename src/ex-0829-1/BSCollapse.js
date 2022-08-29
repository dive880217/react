import { useEffect } from 'react'
// import {Collapse} from 'bootstrap'
// 改用下面的導入可以減少打包後的js檔大小
import Collapse from 'bootstrap/js/dist/collapse'

function BSCollapse() {
  // didMount
  // 在這裡面可以確保vdom已經出現在網頁上
  // 所以可以作各種dom元素直接處理
  useEffect(() => {
    const collapseElementList = document.querySelectorAll('.collapse')
    const collapseList = [...collapseElementList].map(
      (collapseEl) => new Collapse(collapseEl)
    )
  }, [])

  return (
    <>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Toggle first element
        </a>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Toggle second element
        </button>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Toggle both elementsnp
        </button>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body">
              Some placeholder content for the first collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              Some placeholder content for the second collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BSCollapse
