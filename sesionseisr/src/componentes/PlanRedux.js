import React from "react";
import { Link,withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";



const PlanRedux = (props) =>{
    const {
        match: {url},

    } = props;

 return (
  <div>
     <h1>Redux</h1>
     <Link to={`${url}/Redux `}>Redux</Link>
    <Link to={`${url}/hooks `}>Hooks</Link>
  </div>
 )
};


PlanRedux.prototype= {
    match: PropTypes.shape({
     url: PropTypes.string   
    })
}

export default withRouter(PlanRedux)