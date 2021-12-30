import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export function TextEntry() {

    const [input, setInput] = useState('')

    const valueRef :any = useRef('')

    const handleClick = () => {
        setInput(valueRef.current.value) //on clicking button accesing current value of TextField and outputing it to console 
    }

    return (
        <form >
            <div>
                <div>
                    You have this input : {input}    
                </div>
                <TextField
                    id="filled-full-width"
                    label="Message"
                    style={{ margin: 4 }}
                    placeholder="Write Some Text Here"
                    helperText="Make it useful!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    inputRef={valueRef} 
                /> 
                <Button onClick={handleClick}>Submit</Button>
            </div>
        </form>
    );
}