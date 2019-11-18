import React from "react";
import "../styles/form.css";

function form() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                    <div class="h1">Create Profile</div>
                <form>
                    <ul class="form-style-1">
                        <li>
                        <label for="staticPassword" class="col-sm-2 col-form-label">Username</label>
                            <input type="username" class="form-control" id="inputUsername" placeholder="Username"></input>
                        </li>
                        <li>
                        <label for="staticName" class="col-sm-2 col-form-label">Name</label>
                            <input type="password" class="form-control" id="inputName" placeholder="First / Last"></input>
                        </li>
                        <li>
                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                            
                            <input type="email" name="field3" class="form-control" />
                        </li>
                        <li>
                        <label for="staticAge" class="col-sm-2 col-form-label">Age</label>
                            <input type="age" name="field3" class="form-control" />
                            
                        </li>
                        <li>
                        <label for="staticGender" class="col-sm-2 col-form-label">Gender</label>
                            <input type="Gender" class="form-control" id="inputGender" placeholder="Male / Female"></input>
                        </li>
                        <li>
                        <label for="staticPassword" class="col-sm-2 col-form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                        </li>
                        <li>
                            <input type="submit" value="Submit" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>

    )
}
export default form;