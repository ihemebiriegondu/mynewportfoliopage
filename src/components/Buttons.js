
import React from 'react'

import { Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../CSS/buttons.css'

function Buttons({buttonText}) {
  return (
    <Button variant="primary">{buttonText}</Button>
  )
}

export default Buttons
