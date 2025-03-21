import "./Login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input type="email" placeholder="Email" className="login-input" />
      <input type="password" placeholder="Password" className="login-input" />
      <button className="login-button">Login</button>
    </div>
  );
};

export default Login;
