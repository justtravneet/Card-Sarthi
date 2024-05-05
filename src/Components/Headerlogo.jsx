import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (

    <div className='flex justify-center ' >
        <div className='2xl:w-[1000px] 2xl:h-[50px] xl:w-[1000px] xl:h-[40px] lg:w-[1000px] lg:h-[40px] md:w-[1000px] md:h-[40px] sm:w-[1000px] sm:h-[40px]
        xs:w-[1000px] xs:h-[40px] '>
        <Navbar expand="lg" className="">
      
        <Navbar.Brand href="#home">
            <img className='w-[120px] xl:w-[150px] lg:w-[150px]' src="https://s3-alpha-sig.figma.com/img/1e6d/0820/bfcbb356a7781aa2a7878e563a10c5c2?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F35WvoMJsE6N~GP0WZQ5MImbeM~DGRBgyVxuW1TyNGQ1KpztTlhcSPnwBhez~uhEsfb9kjOweYhrUzRZpYMxcwwSVRVoPcCcdmuxi27aHOrMzDM435d1O2sp02gLnFnAcEpW03vYRgjOtiRIoOiFqDxnsW0RkcbP1C~jQgSfGvzw2LtkobQ1T5fMdbhHry7ohKoT7gGdDPGITjMGBCBhmqYLlwY0YcL8nzX9Ppkb6g7EVybQhlYvJH1bm7mtCm6Wy3vAmy0Ntil-X~~9dMCBMVVj1cy96Eqqo-1ANhRrcl1g-SGrumAPCLD7eMVvH4aULvFA90dbIBKVnTKVQqyOGg__" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"className='justify-content-end' >
      <div className=' justify-between' >
          <Nav className="">
           
            <NavDropdown title="Card By Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Card by Credit Score" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Credit Card by Credit Issuer" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>   
        </Navbar.Collapse>
    
    </Navbar>
        </div>
    </div>
    // <Navbar expand="lg" className="bg-body-tertiary">
   
    //     <Navbar.Brand href="#home">
    //         <img className='w-[120px]' src="https://s3-alpha-sig.figma.com/img/1e6d/0820/bfcbb356a7781aa2a7878e563a10c5c2?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F35WvoMJsE6N~GP0WZQ5MImbeM~DGRBgyVxuW1TyNGQ1KpztTlhcSPnwBhez~uhEsfb9kjOweYhrUzRZpYMxcwwSVRVoPcCcdmuxi27aHOrMzDM435d1O2sp02gLnFnAcEpW03vYRgjOtiRIoOiFqDxnsW0RkcbP1C~jQgSfGvzw2LtkobQ1T5fMdbhHry7ohKoT7gGdDPGITjMGBCBhmqYLlwY0YcL8nzX9Ppkb6g7EVybQhlYvJH1bm7mtCm6Wy3vAmy0Ntil-X~~9dMCBMVVj1cy96Eqqo-1ANhRrcl1g-SGrumAPCLD7eMVvH4aULvFA90dbIBKVnTKVQqyOGg__" alt="" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
     
    // </Navbar>
  );
}

export default BasicExample;