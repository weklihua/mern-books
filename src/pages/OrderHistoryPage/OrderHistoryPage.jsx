import { checkToken } from "../../utilities/users-service"
import Container from 'react-bootstrap/Container';


export default function OrderHistoryPage() {
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