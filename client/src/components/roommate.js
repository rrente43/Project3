import React from "react";
import {Navbar, ListGroup, ButtonToolbar} from 'react-bootstrap';
import MyModal from "./modal";
import Profile from "../components/profile";
import "../styles/roommate.css";


function Roommates() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">ATX Roomr</Navbar.Brand>
          <ButtonToolbar>
            <MyModal className="pull-right"/>
            {/* <Button onClick= {MyModal} variant="success">Create</Button> */}
          </ButtonToolbar>
      </Navbar>
    
      <div class="container">
      <br></br>
  <div class="row">
    <div class="col-sm">
    <Profile></Profile>
    </div>
    
    <div class="col-sm">
    <Profile></Profile>
    </div>
    <div class="col-sm">
    <Profile></Profile>
    </div>
  </div>
  <br></br>
  <div class="row">
    <div class="col-sm">
    <Profile></Profile>
    </div>
    
    <div class="col-sm">
    <Profile></Profile>
    </div>
    <div class="col-sm">
    <Profile></Profile>
    </div>
  </div>
  <br></br>
  <div class="row">
    <div class="col-sm">
    <Profile></Profile>
    </div>
    
    <div class="col-sm">
    <Profile></Profile>
    </div>
    <div class="col-sm">
    <Profile></Profile>
    </div>
  </div>
</div>
      
      {/* <ListGroup variant="flush">
      <ListGroup.Item>
      <Profile></Profile>
      </ListGroup.Item>
      <ListGroup.Item> <Profile></Profile></ListGroup.Item>
      <ListGroup.Item> <Profile></Profile></ListGroup.Item>
      <ListGroup.Item> <Profile></Profile></ListGroup.Item>
      </ListGroup> */}
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