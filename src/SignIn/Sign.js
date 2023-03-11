
function Sign() {
    return (
      <div class="container d-flex flex-column">
    <div class="row justify-content-center align-items-center ">
      <div class="col-md-6">
      <form  className = "form" >
      <div className="form-outline mb-4">
          <input
            type="email"
            class="form-control"
            placeholder="Name"
            id="email"
          />
          
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            id="email"
          />
          
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            class="form-control"
          />
          
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            class="form-control"
          />
          
        </div>
        <div>
        <button className="btn btn-dark btn-block mb-4 col-lg-12" type="submit" >submit</button>
        </div>
      </form>
      </div>
      </div>
      </div>
    );
  }
  
  export default Sign;