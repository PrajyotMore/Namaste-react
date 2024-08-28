import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props) 
        this.state = {
            userInfo: {
                login: "Dummy",
                location: "Default",
               
            }
        }
        console.log(this.props.name +'Constructor child')

    }

   async componentDidMount () {
       const data = await fetch("https://api.github.com/users/PrajyotMore");
       const json = await data.json();
       console.log(json)

       this.setState({
        userInfo: json
       })

    }

    componentDidUpdate () {
        console.log('component did update called')
    }

    componentWillUnmount () {
        console.log('component will unmount called ')
    }
    render() {
        // console.log(this.props.name +'render child')
        // const {name,location} = this.props
        const {login,location, avatar_url} = this.state.userInfo
        
        return (
            <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {login}</h2>
            <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UserClass;



// ------ MOUNTING --------
// 
// 
// Constructor (Dummy)
// render (Dummy)
// <html dummy data load/>
// Component Did Mount 
// <Api call/>
// <this.setState/> -> state variable is updated

// -------MOUNTING END -------

// -------- UPDATE --------
// 
// render (Api Data)
// <html new api data laod/>
// component did update