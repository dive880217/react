import { data } from './data/product.json'

function Product() {
  return (
    <>
      <h1>Product</h1>
      <hr />
      <table>
        <tr>
        {data.map((v,i)=>{
            return <td key={v.id}>{v.picture} </td>
        })}
          <td>產品序號</td>
          <td>照片</td>
          <td>價格</td>
          <td>名稱</td>
          <td>價錢</td>
          <td>標籤</td>
        </tr>
      </table>
    </>
  )
}
export default Product
