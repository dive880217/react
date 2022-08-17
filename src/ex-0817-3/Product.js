//我的寫法 有誤
// function Product() {
//   return (
//     <>
//       <h1>Product</h1>
//       <hr />
//       <table>
//         <tr>
//         {data.map((v,i)=>{
//             return <td key={v.id}>{v.picture} </td>
//         })}
//           <td>產品序號</td>
//           <td>照片</td>
//           <td>價格</td>
//           <td>名稱</td>
//           <td>價錢</td>
//           <td>標籤</td>
//         </tr>
//       </table>
//     </>
//   )
// }
// export default Product

import data from './data/products.json'

function Product() {
  return (
    <>
      <h1>Product</h1>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Product
