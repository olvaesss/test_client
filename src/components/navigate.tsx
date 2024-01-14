import React from "react";
import { Link } from "react-router-dom";

const Navigate = ()=>{
    return(
        <div className="Navigation">
        <nav>
            <button>
                <Link to="/dashboard">Home</Link>
            </button>
            <button>
                <Link to="/employees">About</Link>
            </button>
            <button>
                <Link to="/departments">Contacts</Link>
            </button>
        </nav>
      </div>
    )
}

export default Navigate