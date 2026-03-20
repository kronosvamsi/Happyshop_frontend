function Login({ submithandler, changehandler, inputvalue }) {
  return (
    <div>
      <form onSubmit={submithandler}>
        <div>
          <label>Username/Email</label>
          <input
            type="text"
            name="username"
            value={inputvalue.username}
            onChange={changehandler}
          />
        </div>
        <div>
          <label> Password</label>
          <input
            type="text"
            name="password"
            value={inputvalue.password}
            onChange={changehandler}
          />
        </div>
        <div>
          <button type="submit"> Login </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
