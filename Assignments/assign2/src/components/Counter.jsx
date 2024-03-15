import React, { useState, useEffect } from 'react';


function Counter() {
    const [count, setCount] = useState(1);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [count]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            if (data && data.length >= count) {
                setUserData(data[count -1]);
            } else {
                setUserData(null);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addCount = () => {
        setCount(count + 1);
    };

    const rCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <br />
            <div>
                <button className="button" onClick={rCount}>-</button>
                <button className="button" onClick={addCount}>+</button>
            </div>
            {userData && (
                <div>
                    <h2>User Data:</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    {/* Add more user data fields here if needed */}
                </div>
            )}
        </div>
    );
}

export default Counter;
