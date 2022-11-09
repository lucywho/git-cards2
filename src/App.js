import SearchUsers from "./components/SearchUsers"
import Cards from "./components/Cards"
import "./index.css"
import React from "react"

class App extends React.Component {
    state = {
        profiles: [
            {
                name: "lucy",
                company: "lucyville webdesign",
                avatar_url: "https://picsum.photos/100",
            },
            {
                name: "Lucy de Lucy",
                company: "lucyville farm shop",
                avatar_url: "https://picsum.photos/150",
            },
        ],
    }

    render() {
        return (
            <>
                <div className="App">
                    <header>Git Cards App</header>
                    <SearchUsers />
                    <Cards profiles={this.state.profiles} />
                </div>
            </>
        )
    }
}

export default App
