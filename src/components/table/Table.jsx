import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const List = () => {
  const rows = [
    {
      id: 1143155,
      subject: "Python Lab",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      venue: "E-313",
      date: "1 March",
      time: "9.00 Am",
      classs: "Btech 1st Year Cse",
      status: "Completed",
    },
    {
      id: 1143155,
      subject: "Python Lab",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      venue: "E-313",
      date: "1 March",
      time: "9.00 Am",
      classs: "Btech 1st Year Cse",
      status: "Completed",
    },
    {
      id: 1143155,
      subject: "Python Lab",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      venue: "E-313",
      date: "1 March",
      time: "9.00 Am",
      classs: "Btech 1st Year Cse",
      status: "Ongoing",
    },
    {
      id: 1143155,
      subject: "Python Lab",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      venue: "E-313",
      date: "1 March",
      time: "9.00 Am",
      classs: "Btech 1st Year Cse",
      status: "Pending",
    },
    {
      id: 1143155,
      subject: "Python Lab",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      venue: "E-313",
      date: "1 March",
      time: "9.00 Am",
      classs: "Btech 1st Year Cse",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Subject</TableCell>
            <TableCell className="tableCell">Venue</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Hours</TableCell>
            <TableCell className="tableCell">Class</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
              if(row.status=="Ongoing")
              {
                return(
                  <Link to="attendance">
                  <TableRow key={row.id}>
                  <TableCell className="tableCell">
                  <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.subject}
                  </div>
                  </TableCell>
                  <TableCell className="tableCell">{row.venue}</TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>
                  <TableCell className="tableCell">{row.time}</TableCell>
                  <TableCell className="tableCell">{row.classs}</TableCell>
                  <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                  </TableRow>
                  </Link>
                  )
              }
              else
              {
                return(
                <TableRow key={row.id}>
                <TableCell className="tableCell">
                <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.subject}
                </div>
                </TableCell>
                <TableCell className="tableCell">{row.venue}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.time}</TableCell>
                <TableCell className="tableCell">{row.classs}</TableCell>
                <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
                </TableRow>
                )
              }
          }
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
