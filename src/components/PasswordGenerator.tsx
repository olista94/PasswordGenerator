import React, { useState } from 'react';
import {
  Box,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
  Tooltip,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState<number>(12);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<string>('');

  const handleLengthChange = (_event: Event, newValue: number | number[]) => {
    setLength(newValue as number);
  };

  const generatePassword = () => {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let characters = '';
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;

    if (characters === '') {
      setPassword('');
      setStrength('Seleccione al menos una opción');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
    evaluateStrength(generatedPassword);
  };

  const evaluateStrength = (password: string) => {
    if (
      password.length >= 16 &&
      includeNumbers &&
      includeSymbols &&
      includeUppercase &&
      includeLowercase
    ) {
      setStrength('Fuerte');
    } else if (password.length >= 12) {
      setStrength('Media');
    } else {
      setStrength('Débil');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        padding: 2,
        textAlign: 'center',
        backgroundColor: '#121212',
        color: 'white',
        borderRadius: 2,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Generador de Contraseñas
      </Typography>

      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="subtitle1">Longitud: {length}</Typography>
        <Slider
          value={length}
          onChange={handleLengthChange}
          min={8}
          max={32}
          valueLabelDisplay="auto"
        />
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={includeNumbers}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setIncludeNumbers(event.target.checked)
              }
            />
          }
          label="Incluir números"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeSymbols}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setIncludeSymbols(event.target.checked)
              }
            />
          }
          label="Incluir símbolos"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeUppercase}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setIncludeUppercase(event.target.checked)
              }
            />
          }
          label="Incluir mayúsculas"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeLowercase}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setIncludeLowercase(event.target.checked)
              }
            />
          }
          label="Incluir minúsculas"
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={generatePassword}
        sx={{ marginBottom: 2 }}
      >
        Generar Contraseña
      </Button>

      <TextField
        fullWidth
        value={password}
        placeholder="Contraseña generada"
        InputProps={{
          readOnly: true,
          endAdornment: (
            <Tooltip title="Copiar al portapapeles">
              <Button onClick={copyToClipboard}>
                <ContentCopyIcon />
              </Button>
            </Tooltip>
          ),
        }}
        sx={{
          input: { color: 'white' },
        }}
      />

      <Typography
        variant="subtitle1"
        sx={{
          marginTop: 2,
          color:
            strength === 'Fuerte'
              ? 'green'
              : strength === 'Media'
              ? 'yellow'
              : 'red',
        }}
      >
        Fortaleza: {strength}
      </Typography>
    </Box>
  );
};

export default PasswordGenerator;
