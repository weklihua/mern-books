import { checkToken } from "../../utilities/users-service"
import Container from 'react-bootstrap/Container';
import { useState } from "react"


export default function OrderHistoryPage() {
  const [activeOrder, setActiveOrder] = useState([])
  async function handleCheckToken(){
    const expDate = await checkToken()
    console.log(expDate)
    
  }
  return (
    <Container>
      <h1>OrderHistoryPage</h1>
      <button type="button" className="btn btn-primary" onClick={handleCheckToken}>Check When My Login Expires</button> 
    </Container>
  )
}