import React from 'react';
import TextField from '@material-ui/core/TextField';

export function TextEntry() {
    return (
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
      /> 
    );
}