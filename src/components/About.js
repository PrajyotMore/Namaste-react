import React from "react";
import UserClass from "./UserClass";
import UserFunctional from "./UserFunctional";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor parent");
  }
  componentDidMount () {
   // console.log('parent component did mount')
}
  render() {
   // console.log("render parent");
    return (
      <div>
        <h1>About Us Page</h1>
        <div>LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => 
            <h1 className="font-bold">{loggedInUser}</h1>
            }
          </UserContext.Consumer>
        </div>
        
        <UserClass name={"Prajyot"} location={"Badlapur"} />
       
      </div>
    );
  }
}


// constructor parent
// render parent
// prajyot constructor child
// prajyot render child

// then it will batch the render phase 

// prathamesh constructor child
// prathamesh render child 

// once the render phase gets completed then commit phase will start

// Dom get updated then again it will batch the commit phase

// parent component did mount 
// child component did mount


export default About;
