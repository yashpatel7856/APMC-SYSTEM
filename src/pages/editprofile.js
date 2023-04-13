import React from 'react'

function editprofile() {
    return (
        <>
        <div className='new container' scope="row">
        <div className="center">
          <h1>Login</h1>
          <form onSubmit={submitThis}>
            <div className="txt_field">
              <input type="text" name="email"required value={email}onChange={(e)=>setemail(e.target.value)}/>
              <span></span>
              <label>email</label>
            </div>
            <div className="txt_field">
              <input type="password" name="password" required value={password}onChange={(e)=>setpassword(e.target.value)}/>
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            {/* <a href="/farmerdash">
              <p>Submit</p>
            </a> */}
            <div className="signup_link">
              Not a member? <a href="/signup">Signup</a>
            </div>
          </form>
          </div>
        </div>
        </>
      )
}

export default editprofile
