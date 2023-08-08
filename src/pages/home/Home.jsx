import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="prevclass" />
          <Widget type="prevclass" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Your Classes</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
