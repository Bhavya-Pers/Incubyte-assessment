import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import './StringCalculator.css';
import { useState } from 'react';
function StringCalculator() {
    const [input,setInput] = useState('');

    const handleChange = (event) => {

        setInput(event.target.value);
    };
    const addition = (str) => {

    }

    return <>
    <Box>
    <h1>String Calculator</h1>
    <TextField id="outlined-basic" label="Enter String" variant="outlined" value={input} onChange={handleChange} />
    <Button className='button' variant='contained' size='large'>Calculate Sum</Button>
    <Typography variant="h4" component="h2" className='result' >
        Sum
    </Typography>
    </Box>
    </>
   }
   
   export default StringCalculator;