import React from "react";
import {Navbar, Nav, ListGroup, Button, ButtonToolbar} from 'react-bootstrap';
import MyModal from "./modal";



function Roommates() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">ATX Roomr</Navbar.Brand>
          <ButtonToolbar>
            <MyModal />
            {/* <Button onClick= {MyModal} variant="success">Create</Button> */}
          </ButtonToolbar>
      </Navbar>

      <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  );
}



// class Roommate extends React.Component {
//   render() {
//     return (
//       <List>
//         {this.state.roommates.map(roomate => (
//           <ListItem key={roomate._id}>
//             <Link to={"/roomate/" + book._id}>
//               <strong>
//                 {roommate.name} by {roommate.id}
//               </strong>
//             </Link>
//             <DeleteBtn onClick={() => this.deleteRoomate(roommate._id)} />
//           </ListItem>
//         ))}
//       </List>
//     );
//   }
// }


export default Roommates;