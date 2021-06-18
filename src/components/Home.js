import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import { Image, Carousel, Form} from 'react-bootstrap';

export const Home = () => {
    // const history = useHistory();
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <label className="navbar-brand" style={{marginTop:'10px'}}>COWIN</label>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://dashboard.cowin.gov.in/">Dashboard</a>
                            </li>
                           
                        </ul>
                        <form className="form-inline my-2 my-lg-0">

                        </form>
                    </div>
                </nav>
                <div _ngcontent-hyr-c88="" className="cm-helpline helpline-detail clearfix" style={{ backgroundColor: 'whitesmoke', fontWeight:'bold', paddingBottom:'15px'}}>
                    <div _ngcontent-hyr-c88="" className="container">
                        <div _ngcontent-hyr-c88="" className="row d-flex justify-content-center">
                            <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="col-12 heading-title" aria-label="Helpline">
                                <h3 _ngcontent-hyr-c88="" className="accessibility-plugin-ac" style={{ display: 'flex', justifyContent: 'center', margin: '20px auto', fontSize: '1.5rem' }}>Helpline</h3><hr />
                            </div>
                            <div _ngcontent-hyr-c88="" className="col-12 col-sm-6 col-md-auto">
                                <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="helpline" aria-label="Number-23977966">
                                    <span _ngcontent-hyr-c88="" className="icon-helpline"></span>
                                    <div _ngcontent-hyr-c88="" className="right-section">
                                        <p _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Number</p>
                                        <div _ngcontent-hyr-c88="" className="tab-index"><a _ngcontent-hyr-c88="" href="http://www.nihhsrc.nic.in/?q=node/197"
                                            className="accessibility-plugin-ac">91-11-23978046</a></div>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-hyr-c88="" className="col-12 col-sm-6 col-md-auto">
                                <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="helpline" aria-label="Health Ministry1075">
                                    <span _ngcontent-hyr-c88="" className="icon-ministry-helpline"></span>
                                    <div _ngcontent-hyr-c88="" className="right-section">
                                        <p _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Health Ministry</p>
                                        <div _ngcontent-hyr-c88="" className="tab-index"><a _ngcontent-hyr-c88="" href="tel:1075"
                                            className="accessibility-plugin-ac"> 1075</a></div>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-hyr-c88="" className="col-12 col-sm-6 col-md-auto">
                                <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="helpline" aria-label="Child1098"><span
                                    _ngcontent-hyr-c88="" className="icon-children"></span>
                                    <div _ngcontent-hyr-c88="" className="right-section">
                                        <p _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Child</p>
                                        <div _ngcontent-hyr-c88="" className="tab-index"><a _ngcontent-hyr-c88="" href="tel:1098"
                                            className="accessibility-plugin-ac"> 1098</a></div>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-hyr-c88="" className="col-12 col-sm-6 col-md-auto">
                                <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="helpline"
                                    aria-label="Mental Health8046110007"><span _ngcontent-hyr-c88="" className="icon-mental-health"></span>
                                    <div _ngcontent-hyr-c88="" className="right-section">
                                        <p _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Mental Health</p>
                                        <div _ngcontent-hyr-c88="" className="tab-index"><a _ngcontent-hyr-c88="" href="tel:08046110007"
                                            className="accessibility-plugin-ac"> 08046110007</a></div>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-hyr-c88="" className="col-12 col-sm-6 col-md-auto">
                                <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="helpline"
                                    aria-label="Senior Citizens14567"><span _ngcontent-hyr-c88="" className="icon-citizen"></span>
                                    <div _ngcontent-hyr-c88="" className="right-section">
                                        <p _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Senior Citizens</p>
                                        <div _ngcontent-hyr-c88="" className="tab-index"><a _ngcontent-hyr-c88="" href="tel:14567"
                                            className="accessibility-plugin-ac"> 14567</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Image src="https://www.cowin.gov.in/assets/images/largest-vaccine-banner.jpg" className="d-block w-100 h-20" height="400" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5></h5>
                                    <p></p>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSanCn7VJj4TUVmWjYtVAaKDqzsoTcdhfR28Q&usqp=CAU' className="d-block w-100 h-20" height="400" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>

                                </div>
                            </div>

                            <div className="carousel-item">
                                <Image src="https://www.everbridge.com/wp-content/uploads/covid-vaccine-registration.jpg" className="d-block w-100 h-20" height="400" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>

                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </Carousel>
                    <h4 style={{display:'flex',fontFamily: 'Times New Roman', fontStyle:'italic', justifyContent:'center', fontWeight:'bold',marginTop:'10px' }}>"In these testing times, each life that we save is a token of our service to humanity"</h4><br></br>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '15px auto' }}>

                    <div style={{ backgroundColor: 'rgb(241, 255, 161)', width: '50vw', border: '2px solid grey', margin: 'auto', padding: '20px' }}>
                        <Form>
                            <Form.Label style={{ fontFamily: 'Times New Roman', fontSize: '2rem', color: 'blue', display: 'flex', justifyContent: 'center' }}>Login from Here</Form.Label><hr />
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" style={{ display: 'inline-block' }} onChange={(e)=>setMail(e.target.value)} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Phone No.</Form.Label>
                                <PhoneInput defaultCountry='IN' placeholder="Enter phone number" value={phone} onChange={setPhone} />
                            </Form.Group>
                        
                           { <Link variant="primary" type="submit"  to="/booking" className='disabled-link' style={{fontWeight:'bold', fontSize:'1.2rem', margin: 'auto', display:'flex',width:'10%', justifyContent:'center',backgroundColor:'blue', color:'white', border:'5px solid blue', borderRadius:'5px'}} onClick={(e)=>{if(!phone || !mail){e.preventDefault();alert('Fill the required fields')}else console.log('success');}} >
                                Login
  </Link>}
                        </Form>
                    </div>

                </div>
                <hr />

                <div _ngcontent-hyr-c88="" className="howitworkblock bs-section">
                    <div _ngcontent-hyr-c88="" className="container">
                        <div _ngcontent-hyr-c88="" className="row d-flex mt-1">
                            <div _ngcontent-hyr-c88="" tabindex="0" className="col-12 col-md-12 d-sm-block" aria-label="How it Works">
                                <h1 _ngcontent-hyr-c88="" className="howitworkcls accessibility-plugin-ac"> How it Works </h1>
                            </div>
                        </div>
                        <div _ngcontent-hyr-c88="" className="row d-flex mt-4 margin0cls">
                            <div _ngcontent-hyr-c88="" className="col-12 col-md-12 nopaddingclsblock">
                                <div _ngcontent-hyr-c88="" className="row m-2 mb-4">
                                    <div _ngcontent-hyr-c88="" className="col-12">
                                        <div _ngcontent-hyr-c88="" className="row">
                                            <div _ngcontent-hyr-c88="" className="col-md-3 col-12 text-center">
                                                <div _ngcontent-hyr-c88="" className="hiw-box">
                                                    <div _ngcontent-hyr-c88="" className="stepsimg"><Image _ngcontent-hyr-c88=""
                                                        src="https://prod-cdn.preprod.co-vin.in/assets/images/s1.svg" className="img-fluid" alt="about" />
                                                    </div>
                                                    <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="inner"
                                                        aria-label="Register Yourself">
                                                        <h3 _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Register Yourself </h3>
                                                        <p _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Register using your Mobile no. or Aadhaar
                        no. or any other Identity docs..</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div _ngcontent-hyr-c88="" className="col-md-3 col-12 text-center">
                                                <div _ngcontent-hyr-c88="" className="hiw-box">
                                                    <div _ngcontent-hyr-c88="" className="stepsimg"><Image _ngcontent-hyr-c88=""
                                                        src="https://prod-cdn.preprod.co-vin.in/assets/images/s2.svg" className="img-fluid" alt="about" />
                                                    </div>
                                                    <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="inner"
                                                        aria-label="Choose Vaccine Location">
                                                        <h3 _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Choose Vaccine Location</h3>
                                                        <p _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Select your nearby Vaccine Center for
                        vaccination</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div _ngcontent-hyr-c88="" className="col-md-3 col-12 text-center">
                                                <div _ngcontent-hyr-c88="" className="hiw-box">
                                                    <div _ngcontent-hyr-c88="" className="stepsimg"><Image _ngcontent-hyr-c88=""
                                                        src="https://prod-cdn.preprod.co-vin.in/assets/images/s3.svg" className="img-fluid" alt="about" />
                                                    </div>
                                                    <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="inner"
                                                        aria-label="Confirm your Slot">
                                                        <h3 _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Confirm your Slot</h3>
                                                        <p _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Book your slot to Get Vaccine</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div _ngcontent-hyr-c88="" className="col-md-3 col-12 text-center">
                                                <div _ngcontent-hyr-c88="" className="hiw-box">
                                                    <div _ngcontent-hyr-c88="" className="stepsimg"><Image _ngcontent-hyr-c88=""
                                                        src="https://prod-cdn.preprod.co-vin.in/assets/images/s4faqlink.png" className="img-fluid"
                                                        alt="about" /></div>
                                                    <div _ngcontent-hyr-c88="" role="presentation" tabindex="0" className="inner"
                                                        aria-label="Any Question?">
                                                        <h3 _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Any Question?</h3>
                                                        <p _ngcontent-hyr-c88="" className="accessibility-plugin-ac">Please follow our Frequently asked
                        questions </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-hyr-c88="" className="col-12 col-md-12 nopaddingclsblock">
                                <div _ngcontent-hyr-c88="" className="cm-link-box clearfix">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer _ngcontent-qdh-c67="" className="page-footer font-small blue" style={{ backgroundColor: 'black' }}>
                <div _ngcontent-qdh-c67="" className="footer-box">
                    <div _ngcontent-qdh-c67="" className="container">
                        <div _ngcontent-qdh-c67="" className="row">
                            <div _ngcontent-qdh-c67="" className="col-md-12 col-sm-12 col-xs-12">
                                <div _ngcontent-qdh-c67="" className="link-block">
                                    <div _ngcontent-qdh-c67="" tabindex="0" aria-label="support@cowin.gov.in" className="link-left-block"><span
                                        _ngcontent-qdh-c67="" className="email-txt accessibility-plugin-ac" style={{ color: 'white' }}>For Grievances &amp; Feedback
                  :</span><span _ngcontent-qdh-c67="" className="email-link" ><svg _ngcontent-qdh-c67=""
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
                                            className="bi bi-envelope email-icon" >
                                            <path _ngcontent-qdh-c67=""
                                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z">
                                            </path>
                                        </svg><a _ngcontent-qdh-c67="" href="mailto:support@cowin.gov.in"
                                            className="accessibility-plugin-ac" >support@cowin.gov.in</a></span></div>
                                    <div _ngcontent-qdh-c67="" className="link-right-block">
                                        <ul _ngcontent-qdh-c67="" style={{display:'flex', justifyContent:'center'}}>
                                            
                                            <li _ngcontent-qdh-c67="" role="link" tabindex="0" aria-label="Terms of Service"><a _ngcontent-qdh-c67="" className="accessibility-plugin-ac" href="https://www.cowin.gov.in/terms-condition" style={{margin:'auto'}}>Terms of Service
                    </a></li>
                                        </ul>
                                        <p _ngcontent-qdh-c67="" role="presentation" aria-label="Copyright © 2021 COVID. All Rights Reserved" tabindex="0" className="copyright accessibility-plugin-ac" style={{ color: 'white', display:'inline-flex', justifyContent:'center' }}> Copyright © 2021 COVID. All Rights Reserved
                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

           
        </>
    )
}
