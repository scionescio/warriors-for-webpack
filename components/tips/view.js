import React from 'react'

export class Tips extends React.Component {

    render() {
        return (<div style={{ textAlign: "center" }}>
            <em>{giveAdvice(this.props)}</em>
        </div>
        );
    }

}

//giveAdvice(this.rating)
const giveAdvice = ({ rating, hidden }) =>
    hidden ? '' : //correct way with hidden?
        rating > 2 ?
            "May your warriors be victorious" :
            "Consider training your warrior before assigning him to a mission"
