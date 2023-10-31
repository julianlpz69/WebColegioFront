import "../Styles/Login.css"

function Login() {
    return (
      <div classNameName="Login">
    <div className="container-form hide loggin">
        <div className="information">
            <div className="info-childs">
                <h2>Welcome one more time!</h2>
                <p>We miss you. Please sign in!</p>
                <input type="button" value="Sign up" id="buttom-sign-up"></input>
            </div>
        </div>
        <div className="form-information">
            <div className="form-information-child">
                <h2>Log in</h2>
                <div className="icons">
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-github' ></i>
                    <i className='bx bxl-linkedin' ></i>
                </div>
                <p>Log in with an exist account.</p>
                <form id="FormLogin" className="form-signup">
                    <label>
                        <i className='bx bx-envelope' ></i>
                        <input type="text" name="username" id="usernameLogin" placeholder="UserName"></input>

                    </label>
                    <label>
                        <i className='bx bx-lock-alt' ></i>
                        <input type="password" name="password" id="passwordLogin" placeholder="Password"></input>

                    </label>
                    <input type="submit" value="Log in" id="login-bottom-send" data-accion="SingIn"></input>
                </form>
            </div>
        </div>
    </div>
        </div>
      )
}  


export default Login