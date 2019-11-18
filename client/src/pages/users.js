import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
class userName extends Component {
  
 Users = {
   userName: [],
   price: "",
   address: "",
   info: ""
 };
 componentDidMount() {
   this.loaduserName();
 }
 loaduserName = () => {
   API.getuserName()
     .then(res =>
       this.setUsers({ userName: res.data, price: "", address: "", info: "" })
     )
     .catch(err => console.log(err));
 };
 // deleteuserName = id => {
 //   API.deleteuserName(id)
 //     .then(res => this.loaduserName())
 //     .catch(err => console.log(err));
 // };
 // handleInputChange = event => {
 //   const { name, value } = event.target;
 //   this.setUsers({
 //     [name]: value
 //   });
 // };
 handleFormSubmit = event => {
   event.preventDefault();
   if (this.Users.price && this.Users.address) {
     API.saveuserName({
       price: this.Users.price,
       address: this.Users.address,
       info: this.Users.info
     })
       .then(res => this.loaduserName())
       .catch(err => console.log(err));
   }
 };
 render() {
   return (
     <Container fluid>
       <Row>
         <Col size="md-6">
           <Jumbotron>
             <h1>What userName Should I Read?</h1>
           </Jumbotron>
           <form>
             <Input
               value={this.Users.price}
               onChange={this.handleInputChange}
               name="price"
               placeholder="price (required)"
             />
             <Input
               value={this.Users.address}
               onChange={this.handleInputChange}
               name="address"
               placeholder="address (required)"
             />
             <TextArea
               value={this.Users.info}
               onChange={this.handleInputChange}
               name="info"
               placeholder="info (Optional)"
             />
             <FormBtn
               disabled={!(this.Users.address && this.Users.price)}
               onClick={this.handleFormSubmit}
             >
               Submit userName
             </FormBtn>
           </form>
         </Col>
         <Col size="md-6 sm-12">
           <Jumbotron>
             <h1>userName On My List</h1>
           </Jumbotron>
           {this.Users.userName.length ? (
             <List>
               {this.Users.userName.map(userName => (
                 <ListItem key={userName._id}>
                   <Link to={"/userName/" + userName._id}>
                     <strong>
                       {userName.price} by {userName.address}
                     </strong>
                   </Link>
                   <DeleteBtn onClick={() => this.deleteuserName(userName._id)} />
                 </ListItem>
               ))}
             </List>
           ) : (
             <h3>No Results to Display</h3>
           )}
         </Col>
       </Row>
     </Container>
   );
 }
}
export default userName;