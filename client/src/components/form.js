import React from "react";
import "../styles/form.css";

function form() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="container">
                    <h1>Fill Out Form!!!</h1>
                </div>
                <form>
                    <ul class="form-style-1">
                        <li>
                        <label for="staticName" class="col-sm-2 col-form-label">Name</label>

                        <input type="text" name="field1" class="field-divided" placeholder="First" />
                    
                        <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
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
                            <select name="field4" class="form-control">
                                <option value="Advertise">Female</option>
                                <option value="Partnership">Male</option>
                                
                            </select>
                        </li>
                        <li>
                        <label for="staticEmail" class="col-sm-2 col-form-label">Message</label>
                            <textarea name="field5" id="field5" class="form-control"></textarea>
                        </li>
                        <li>
                        <label for="staticPassword" class="col-sm-2 col-form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                        </li>
                        <li>
                            <input type="submit" value="Submit" onclick="location.href='/profile;"/>
                            
                        </li>
                    </ul>
                </form>
            </div>
        </div>

    )
}
export default form;