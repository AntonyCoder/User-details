import './Details.css'

function Details({ userDetails }) {
    const { details, name} = userDetails;

    return (
        <div className="details">
            <img src='https://i.ytimg.com/vi/jg8ixdQzrjc/maxresdefault.jpg' alt="avatar" className="img" />
            <div className="name">{name}</div>
            <div className="city">City: {details.city}</div>
            <div className="company">Company: {details.company}</div>
            <div className="position">Position: {details.position}</div>
        </div>
    )

}

export default Details;