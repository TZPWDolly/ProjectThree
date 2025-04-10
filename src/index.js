import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function App() {
  return (
    <>
      <TableContainer>
        <Table id="hctable" size="small" aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                rowSpan={2}
                colSpan={2}
                style={{ background: "" }}
              >
                Indicators
              </TableCell>

              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                Age0-2M
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                2-12M
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                1-4Yr
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                5-9Yr
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                10-14Yr
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                15-18Yr
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                19-24Yr
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                25-49Yr
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                50-59Yr
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                60&Above
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                style={{ border: "2px solid lightGray" }}
              >
                Total
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" rowSpan={2} style={{ background: "" }}>
                Number of paitents who registered in this reporting periods
              </TableCell>

              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                New
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M1
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F1
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M2
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F2
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                Old
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                OM1
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                OF1
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                OM2
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                OF2
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center" rowSpan={2} style={{ background: "" }}>
                Number of paitents who registered in this reporting periods
              </TableCell>

              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                New
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M1
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F1
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                M2
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                F2
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                Old
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                OM1
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                OF1
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                OM2
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "2px solid lightGray" }}
              >
                OF2
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
