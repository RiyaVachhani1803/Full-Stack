// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';


function App() {
  return (
    <>
     <h1>Material UI Demo</h1>
     <Button>Click me!!</Button> &nbsp; &nbsp; &nbsp;
     <Button variant="contained">Contained</Button> &nbsp; &nbsp; &nbsp;
     <Button variant="contained" disabled>Disabled</Button> &nbsp; &nbsp; &nbsp;
     <Button color="secondary">Secondary</Button> &nbsp; &nbsp; &nbsp;
      <Button variant="contained" color="success">Success</Button> &nbsp; &nbsp; &nbsp;
      <Button variant="outlined" color="error">Error</Button> &nbsp; &nbsp; &nbsp;
      <Button variant="outlined" size="small">Small</Button> &nbsp; &nbsp; &nbsp;
      <Button variant="outlined" size="medium">Medium</Button> &nbsp; &nbsp; &nbsp;
      <Button variant="outlined" size="large">Large</Button> &nbsp; &nbsp; &nbsp;
      <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button> &nbsp; &nbsp; &nbsp;
      <Button variant="contained" endIcon={<SendIcon />}>Send</Button> &nbsp; &nbsp;
      <IconButton aria-label="fingerprint" color="success"><Fingerprint /></IconButton>
    </>
  )
}

export default App
