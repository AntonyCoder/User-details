
import './List.css';

function List({ users, onClick }) {

    return (
        <ul className="list">
            {users.map(user => (
                <li
                    className="user-item"
                    key={user.id}
                    onClick={()=> onClick(user.id)}>{user.name}</li>
            ))}
        </ul>
    )

}

export default List;