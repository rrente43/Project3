import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>Find the Perfect Roommate Today !!</h1>
      <p>
        roommate finder app
      </p>
  
      <div class="container">
	<div class="d-flex justify-content-center h-150">
		<div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
	
			</div>
			<div class="card-body">
				<form>
          
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username"/>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password"/>
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn"/>
					</div>
          
				</form>
			</div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                Don't have an account?<a href="#">Sign Up</a></div>

              <div class="d-flex justify-content-center links">
                 
                 Or Sign in using google.<a href="/auth/google" class="google-btn" >Google+</a>
              </div>
				
			</div>
		</div>
	</div>
</div>
    </div>
    
  );
}

export default Jumbotron;
