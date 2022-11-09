import React from "react"
import axios from "axios"

class SearchUsers extends React.Component {
    state = {
        userName: "",
        errorMessage: "",
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ errorMessage: "" })

        await axios(`https://api.github.com/users/${this.state.userName}`)
            .then((res) => this.props.addNewProfile(res.data))
            .then(this.setState({ userName: "" }))
            .catch((error) => this.handleErrorResponse(error))
    }

    handleErrorResponse() {
        this.setState({ errorMessage: "user not found" })
    }
    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.userName}
                        onChange={(e) =>
                            this.setState({
                                userName: e.target.value,
                            })
                        }
                        placeholder="Git Hub User"
                    />

                    <button>Add New User</button>
                </form>
                {this.state.errorMessage !== "" && (
                    <div className="error">
                        sorry, that user does not exist, please try again
                    </div>
                )}
            </div>
        )
    }
}

export default SearchUsers
