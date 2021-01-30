import React from 'react';

import TextField from '@material-ui/core/TextField';

const TextInput = ({ value, onChange, name, label, type, id, variant, autoComplete }) => {
  return (
    <TextField
      onChange={onChange}
      value={value}
      variant={variant}
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type={type}
      id={id}
      autoComplete={autoComplete}
    />
  );
};

export default TextInput;
