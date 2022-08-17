import { data } from './data/student'
// import myData from './data/student.json'
//一個專案檔案裡只要有一個元件，所以應該要剃除Student.js 留著product
function Student() {
  return (
    <>
      <h1>Student</h1>
      <hr />
      <ul>
        {/* map對應陣列 記得要在子元素加key把格式塞進去 */}
        {/* data可以切換myData */}
        {data.map((value, index) => {
          return <li key={value.id}>{value.name}</li>
        })}
      </ul>
    </>
  )
}
export default Student
