import React from "react"
import { Link} from "react-router-dom";
function Home(){
    return(
        <div>
          <p>This is home page</p>
          <div className="d-flex justify-content-center align-items-center">
          <Link to="/home" className="btn btn-defalit border w-100 bg-light rounded-0">Home</Link>
          <Link to="/register" className="btn btn-defalit border w-100 bg-light rounded-0">Signup</Link>
          <Link to="/login" className="btn btn-defalit border w-100 bg-light rounded-0">Login</Link>
          </div>
          
        </div>
    )
}

export default Home