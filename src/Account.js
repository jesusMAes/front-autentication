import Register from './Register';
import Login from './Login';
import {Container, Col, Row} from 'react-bootstrap'

export default function Account (){
  return (
    <Row>
        <Col xs={12} sm={12} md={6} lg={6} >
          <Register />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} >
          <Login />
        </Col>
      </Row>
  )
}