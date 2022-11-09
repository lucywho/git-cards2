import React from "react"

class SearchUsers extends React.Component {
    state = {
        userName: "",
    }

    handleSubmit = async (e) =>
        //code to collect input value and assign to this.state.userName
        //const res = await axios(url/${this.state.user})
        console.log("onSubmit function")

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value="search for user"
                        onChange={(e) => e.target.value}
                    />
                    <button>Add New User</button>
                </form>
            </>
        )
    }
}

export default SearchUsers
