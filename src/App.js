import "./index.css"
import React from "react"
import Cards from "./components/Cards"
import SearchUsers from "./components/SearchUsers"

class App extends React.Component {
    state = {
        profiles: [],
    }

    addNewProfile = (profile) => {
        this.setState({
            profiles: this.state.profiles.concat(profile),
        })
    }

    render() {
        return (
            <>
                <div className="App">
                    <header>Git Cards App</header>
                    <SearchUsers addNewProfile={this.addNewProfile} />

                    <Cards profiles={this.state.profiles} />
                </div>
            </>
        )
    }
}

export default App
