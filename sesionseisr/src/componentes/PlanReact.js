import React from "react";
import { Link,withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

const PlanReact = (props) =>{
    const {
        match: {url},

    } = props;

 return (
  <div>

    <h1>React</h1>
    <Link to={`${url}/jsx `}>Jsx</Link>
    <Link to={`${url}/hooks `}>Hooks</Link>
   
  </div>
 )
};

PlanReact.prototype= {
    match: PropTypes.shape({
     url: PropTypes.string   
    })
}

export default withRouter(PlanReact)