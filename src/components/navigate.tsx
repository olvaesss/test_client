import React from "react";
import { Link } from "react-router-dom";

const Navigate = ()=>{
    return(
        <div className="Navigation">
        <nav>
                <Link to="/dashboard"><button>Dashboard</button></Link>
                <Link to="/employees"><button>Employees</button></Link>
                <Link to="/departments"><button>Departments</button></Link>
        </nav>
      </div>
    )
}

export default Navigate