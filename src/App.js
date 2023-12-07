import './App.css';
import { FaChevronRight, FaChevronLeft,FaPinterestP,FaFacebookF,FaInstagram,FaBlogger,FaMapMarkerAlt,FaPhoneAlt} from 'react-icons/fa';
import {Navbar, Nav, Container, Button, NavDropdown, Row, Col, Form} from 'react-bootstrap';
import logo from './assets/svg/donaki-logo.svg';
import partner1 from './assets/img/logo-partner1.png';
import partner2 from './assets/img/logo-partner2.png';
import partner3 from './assets/img/logo-partner3.png';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar sticky='top' collapseOnSelect expand="lg" style={{paddingBottom:'20px'}}>
          <Container className="font-menu">
            <Navbar.Brand>
              <img
                alt="logo"
                src={logo}
                width="70%"
                height="auto"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
              <Nav.Link className="change-lang d-flex justify-content-end" style={{left:'86%',top:'1%', position:'absolute'}}>EN {'❯'} </Nav.Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
              <Nav className="me-auto">
              <Nav.Link className="fw-bold">HOME</Nav.Link>
              <Nav.Link className="fw-bold">LINK {'❯'}</Nav.Link>
              <Nav.Link className="fw-bold">LINK {'❯'}</Nav.Link>
              <Nav.Link className="fw-bold">CONTACT US</Nav.Link>
            </Nav>
            <Nav className="">
              <Button variant="outline-dark" style={{borderColor:'#52528d',margin:'7px',padding:'5px 25px'}}>Login</Button>
              <Button style={{backgroundColor: '#52528d',margin:'7px',padding:'5px 25px'}}>Register</Button>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <div className="Banner">
          <Container className="d-flex flex-column justify-content-center" style={{height: '100%'}}>
            <h1 className="heading">WHO ARE WE?</h1>
            <p className="text-wrap lh-base" style={{width:'37.5%',fontSize:'18px'}}>Donaki is dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
            <Button style={{backgroundColor: '#52528d',padding:'5px 25px',width:'12em'}}>FIND MORE</Button>
          </Container>
        </div>
        <div className="Join-us ">
          <Container>
            <Row className="Join-us-flex d-flex flex-wrap">
              <Col className="Partner" style={{paddingLeft:'5em'}}>
                <h1 className="text-white heading">BECOME A PARTNER</h1>
                <p className="text-white">Promote your store through our platform</p>
                <Button variant="outline-light" style={{padding:'5px 25px'}}>FIND OUT MORE</Button>
              </Col>
              <Col className="Member" style={{paddingLeft:'5em'}}>
                <h1 className="text-white heading">BECOME A MEMBER</h1>
                <p className="text-white">Browse through a large number of retailers</p>
                <Button variant="outline-light" style={{padding:'5px 25px'}}>FIND OUT MORE</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="About-us">
          <Container className="bg-About d-flex flex-column justify-content-center">
            <h1 className="heading">ABOUT US</h1>
            <p className="text-wrap lh-base" style={{width:'37.5%',fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </Container>
        </div>
        <div className="Our-partner">
          <Container>
            <Row>
              <Col>
                <h3 className="heading">SEE WHO ARE</h3>
                <h1 className="heading">OUR PARTNER</h1>
                <div style={{marginTop:'1em',marginBottom:'1em'}}>
                  <FaChevronLeft className="icon-slider" style={{backgroundColor:'#f4f4f4', padding:'5px', fontSize:'2em', color:'#b9b7bd', marginRight:'5px'}}/>
                  <FaChevronRight className="icon-slider" style={{backgroundColor:'#f4f4f4', padding:'5px', fontSize:'2em', color:'#b9b7bd'}}/>
                </div>
                <Button className="button" style={{backgroundColor: '#52528d',padding:'5px 25px'}}>SEE OUR PARTNERS</Button>
              </Col>
              <Col>
                <Row className="img-partner">
                  <Col className="border text-center d-flex justify-content-center align-items-center" style={{width:'300px', height:'auto',marginRight:'1em',padding:'0 10px'}}> <img src={partner1}/></Col>
                  <Col className="border text-center d-flex justify-content-center align-items-center" style={{width:'300px', height:'auto',marginRight:'1em',padding:'0 10px'}}> <img src={partner2}/></Col>
                  <Col className="border text-center d-flex justify-content-center align-items-center" style={{width:'300px', height:'auto',marginRight:'1em',padding:'0 10px'}}> <img src={partner3} /></Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      <footer className="text-white bg-dark">
        <Container className="h-100">
          <Row className="h-100 pt-5 footer-flex">
            <Col className="footer-col pt-3 d-flex flex-column align-content-center">
              <h5 className="heading">SUBSCRIBE TO OUR NEWSLETTER</h5>
              <div className="py-3">
                <Row>
                  <Col>
                    <Form.Control type="email" placeholder="Your E-mail" style={{backgroundColor:'#343434', border:'1px solid #8e8e8e', borderRadius:'0px'}}/>
                  </Col>
                  <Col>
                    <Button style={{backgroundColor: '#414141',padding:'7px 35px', border: 'none', borderRadius:'0px'}}>SUBSCRIBE</Button>
                  </Col>
                </Row>
              </div>
              <p style={{fontSize:'12px'}}>Donaki is Luisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora uptatem.</p>
            </Col>
            <Col className="footer-col pt-3 d-flex flex-column align-items-center align-content-center">
              <h4 className="heading">FOLLOW US</h4>
              <div style={{marginTop:'1em',marginBottom:'1em'}}>
                  <FaPinterestP style={{padding:'5px', fontSize:'2em', color:'#ffffff'}}/>
                  <FaFacebookF style={{padding:'5px', fontSize:'2em', color:'#ffffff'}}/>
                  <FaInstagram style={{padding:'5px', fontSize:'2em', color:'#ffffff'}}/>
                  <FaBlogger style={{padding:'5px', fontSize:'2em', color:'#ffffff'}}/>
                </div>
            </Col>
            <Col className="footer-col pt-3 d-flex flex-column align-items-center align-content-center">
              <h4 className="heading">CONTACT US</h4>
              <table>
                <tr>
                  <td className="align-baseline">
                    <FaMapMarkerAlt style={{padding:'5px', fontSize:'2em', color:'#ffffff'}}/>
                  </td>
                  <td>
                    <p >Rue de la Loi/Wetstraat 175<br/>B-1048 Bruxelles/Brussel<br/>Belgique/België</p>
                  </td>
                </tr>
                <tr>
                  <td className="align-baseline">
                    <FaPhoneAlt style={{padding:'5px', fontSize:'2em', color:'#ffffff'}}/>
                  </td>
                  <td>
                    <p >Tel: +32 22252522</p>
                  </td>
                </tr>
              </table>
            </Col>
          </Row>
          
        </Container>

      </footer>
    </div>
  );
}

export default App;
