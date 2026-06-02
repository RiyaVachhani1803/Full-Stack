import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incCount}>Increment Count</button>
        </div>
    );
}