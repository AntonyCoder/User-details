import './App.css';
import List from "./components/List/List";
import { useState, useEffect } from 'react';
import Details from "./components/Details/Details";

function App() {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getUsers() {
            const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
            const data = await response.json();
            setUsers(data);
        }

        getUsers();
    }, [])

    useEffect(() => {
        if (!userId) return;

        async function getCurrentUser() {
            setLoading(true);
            setUserDetails(null);

            try {
                const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`);
                const data = await response.json();
                setUserDetails(data);
            } finally{
                setLoading(false)
            }
        }

        getCurrentUser();
    }, [userId])

    function handleClick(id) {
        setUserId(id);
    }

    return (
        <div className="app">
            <List users={users} onClick={handleClick} />
            {loading && <p>Loading...</p>}
            {!loading && userDetails && (<Details userDetails={userDetails} />)}
        </div>
    )
}

export default App;