import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function App() {
    const [count, setCount] = React.useState(() => {
        return parseInt(localStorage.getItem("count")) || 0;
    });

    React.useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);
    const resetCount = () => setCount(0);

    return (
        <div className="app">
            <Stack display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column" spacing={2} sx={{"& button": { minWidth: "120px" }}}>
                <Typography variant="h2" fontWeight={500}>Count: {count}</Typography>
                <Stack display="flex" justifyContent="space-between" direction="row" spacing={3}>
                    <Button variant="contained" size="large" color="error" onClick={decrementCount}>-1</Button>
                    <Button variant="contained" size="large" color="success" onClick={incrementCount}>+1</Button>
                </Stack>
                <Button variant="contained" size="large" color="info" onClick={resetCount}>Reset</Button>
            </Stack>
        </div>
    )
}

export default App;
