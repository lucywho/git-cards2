import React from "react"

class Card extends React.Component {
    render() {
        return (
            <div className="single-card">
                <img
                    src={this.props.avatar_url}
                    alt="git hub avatar for user"
                />
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
        )
    }
}

export default Card
