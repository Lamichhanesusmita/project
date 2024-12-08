import React from 'react'

const LoginPage = () => {
  return (
    <div className="egg">
      <h2>Login Page</h2>
          <div className="eagle">
            <h3>Username</h3>
            <input placeholder="username" type="username" />
            <h3>Password</h3>
            <input placeholder="password" type="password" /><br/>
            <h3>Role</h3>
            <input placeholder="teacher/student/parents" type="role" />
            <button>Login</button>
           
          </div>
          <h4>Create a new account ?  </h4>
    </div>
  )
}

export default LoginPage
