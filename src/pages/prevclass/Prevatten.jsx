import "./Attendance.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Prevattendance from "./Prevattendance"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Prevattendance/>
      </div>
    </div>
  )
}

export default List