import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Container,Row,Col,Nav,Tab,Dropdown, Image} from 'react-bootstrap'
import Card from '../../../components/Card'
import FsLightbox from 'fslightbox-react';

import imgbg1 from '../../../assets/images/page-img/profile-bg1.jpg'
import img2 from '../../../assets/images/user/02.jpg'
import img1 from '../../../assets/images/user/1.jpg'
import img3 from '../../../assets/images/user/1.jpg'
import img4 from '../../../assets/images/page-img/57.jpg'
import img5 from '../../../assets/images/page-img/58.jpg'
import img6 from '../../../assets/images/page-img/59.jpg'
import img7 from '../../../assets/images/user/1.jpg'
import img8 from '../../../assets/images/icon/09.png'
import img9 from '../../../assets/images/page-img/p3.jpg'
import img10 from '../../../assets/images/page-img/p1.jpg'
import img11 from '../../../assets/images/user/09.jpg'
import img12 from '../../../assets/images/user/05.jpg'
import img13 from '../../../assets/images/user/11.jpg'
import img14 from '../../../assets/images/user/02.jpg'
import img15 from '../../../assets/images/user/03.jpg'
import img16 from '../../../assets/images/user/05.jpg'
import img17 from '../../../assets/images/user/09.jpg'
import img18 from '../../../assets/images/user/06.jpg'
import img19 from '../../../assets/images/user/08.jpg'
import img20 from '../../../assets/images/user/07.jpg'
import img21 from '../../../assets/images/user/1.jpg'
import img22 from '../../../assets/images/page-img/57.jpg'
import img23 from '../../../assets/images/page-img/58.jpg'
import img24 from '../../../assets/images/page-img/59.jpg'
import img25 from '../../../assets/images/user/1.jpg'
import img26 from '../../../assets/images/page-img/60.jpg'
import img27 from '../../../assets/images/page-img/61.jpg'
import img28 from '../../../assets/images/page-img/62.jpg'
import img29 from '../../../assets/images/user/1.jpg'
import img30 from '../../../assets/images/page-img/63.jpg'
import img31 from '../../../assets/images/page-img/64.jpg'
import img32 from '../../../assets/images/page-img/65.jpg'
import img33 from '../../../assets/images/user/01.jpg'
import img34 from '../../../assets/images/user/02.jpg'
import img35 from '../../../assets/images/user/03.jpg'
import g1 from '../../../assets/images/page-img/g1.jpg'
import g2 from '../../../assets/images/page-img/g2.jpg'
import g3 from '../../../assets/images/page-img/g3.jpg'
import g4 from '../../../assets/images/page-img/g4.jpg'
import g5 from '../../../assets/images/page-img/g5.jpg'
import g6 from '../../../assets/images/page-img/g6.jpg'
import g7 from '../../../assets/images/page-img/g7.jpg'
import g8 from '../../../assets/images/page-img/g8.jpg'


const Profile1=()=>{
    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1
    });
    
    function imageOnSlide(number) {
        setImageController({
        toggler: !imageController.toggler,
        slide: number
        }); 
    }
    return(
        <>
         <FsLightbox
                toggler={imageController.toggler}
                sources={[g1,g2,g3,g4,g5,g6,g7,g8]}
                slide={imageController.slide}
            />
        <Container>
        <div className="container-fluid">
            <Row>
                <Col className="col-sm-12">
                    <div className="position-relative">
                        <img loading="lazy" src={imgbg1} alt="profile-bg" className="rounded img-fluid"/>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="container containertop">
        <Row>
        <div className="col-lg-3">
                    <Card>
                        <Card.Body>
                            <div className="text-center">
                            <img loading="lazy" className="img-fluid rounded-circle avatar-50" src={img20} alt="profile-img"/>
                            <h6>John Ramsey</h6>
                            <Link to="#">@john_ram</Link>
                            <p>Multidisciplinary photographer focused on travel and nature content</p>
                            </div>
                            <div className="d-flex justify-content-evenly">
                            <small className="text-primary">Tweets</small> 
                            <small className="text-primary">Follower</small>
                                <small className="text-primary">Follow</small>
                            </div>
                            <div className="d-flex justify-content-evenly">
                            <h4 className="mb-0">847</h4>
                            <h4 className="mb-0">4.2k</h4>
                            <h4 className="mb-0">524</h4>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="row">
                        <div className="col-sm-3 col-lg-6">
                            <Card>
                                <Card.Body>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 20 20" fill="currentColor" className="text-primary">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    <div>Activity</div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-3 col-lg-6">
                            <Card>
                                <Card.Body>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                    <div>Moment</div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-3 col-lg-6 mt-1">
                            <Card>
                                <Card.Body>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <div>Friends</div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-3 col-lg-6 mt-1">
                            <Card>
                                <Card.Body>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>Edit</div>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
        </div>
        {/* <Tab.Container defaultActiveKey="f1"> */}
        <Col lg="6">
            <Tab.Container defaultActiveKey="f1">
                <Card>
                    <nav className="tab-bottom-bordered">
                        <Nav variant="tabs" className="mb-0 rounded-top border-0">
                            <Nav.Link eventKey="f1" href="#" >Home</Nav.Link>
                            <Nav.Link eventKey="f2" href="#">Profile</Nav.Link>
                            <Nav.Link eventKey="f3" href="#">Contact</Nav.Link>
                        </Nav>
                        <Tab.Content className="card-body"> 
                        <Tab.Pane eventKey="f1">
                            <div className="borderbox1 d-flex">
                                <div className="user-img me-2">
                                    <img loading="lazy" src={img1} alt="userimg" className="avatar-40 rounded-circle"/>
                                </div>
                                <div className="border rounded p-2">
                                    <p className="mb-0 d-flex align-items-center">
                                        <span className="material-symbols-outlined  me-2 md-18">
                                            loop
                                        </span>LEONAROD RETWEETED
                                    </p>
                                    <div className="d-flex align-items-center flex-wrap mb-1">
                                        <h6>John Ramsey</h6>
                                            <span className=" ms-1 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                    check_circle
                                                </i>
                                                    @john_ram
                                            </span>
                                        <div className="ms-auto d-flex align-items-center">
                                            <i className="material-symbols-outlined md-16">
                                                schedule
                                            </i>
                                            <span className="mx-1"><small>35 mins</small></span>
                                        </div>
                                    </div>
                                        <h6 className="mb-2">very good words..</h6>
                                        <div className="border rounded  p-2">
                                    <div className="align-items-center d-flex flex-wrap">
                                            <img loading="lazy" src={img2} alt="userimg" className="avatar-40 rounded-circle"/>
                                            <h6 className="ms-2">theodocre</h6>
                                            <p className="ms-2 mb-0">@john_ram</p>
                                            <div className="ms-auto d-flex align-items-center">
                                                <i className="material-symbols-outlined md-16">
                                                schedule
                                                </i>
                                                <span className="mx-1"><small>35 mins</small></span>
                                            </div>
                                        </div>
                                        <p className="mb-0">In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                        <div className="d-flex align-items-center">
                                            <i className="material-symbols-outlined md-16">
                                            chat_bubble_outline
                                            </i>
                                            <span className="ms-1">32</span>
                                        </div>
                                        <hr className="hr-vertical"/>
                                        <div className="d-flex align-items-center">
                                           <i className="material-symbols-outlined md-16">
                                                sync
                                            </i>
                                            <span className="ms-1">54</span>
                                        </div>
                                        <hr className="hr-vertical"/>
                                        <div className="d-flex align-items-center">
                                            <i className="material-symbols-outlined md-16">
                                                favorite_border
                                            </i>
                                        <span>426</span>
                                        </div>
                                        <hr className="hr-vertical"/>
                                            <i className="material-symbols-outlined md-16">
                                                shortcut
                                            </i>
                                        </div>
                                    </div>
                            </div>
                            <div className="borderbox1 mt-3 rounded d-flex rounded">
                            <div className="user-img me-2">
                                <img loading="lazy" src={img3} alt="userimg" className="avatar-40 rounded-circle"/>
                            </div>
                            <div className="borderbox border rounded p-2">
                                <div className="d-flex align-items-center flex-wrap">
                                    <h6>John Ramsey</h6>
                                    <span className="text-primary ms-1 d-flex align-items-center">
                                        <i className="material-symbols-outlined me-2 text-primary md-16">
                                            check_circle
                                        </i>
                                    </span>
                                    <Link to="#" className="mb-0">@john_ram</Link>
                                    <div className="ms-auto d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                            schedule
                                        </i>
                                        <span className="mx-1"><small>2 hours</small></span>
                                    </div>
                                </div>
                                <h6>Best views from the vactions</h6>
                                <Row className="mt-2">
                                    <Col lg="4" md="6" className="mt-1">
                                        <img loading="lazy" src={img4} className="img-fluid rounded" alt="Responsive img"/>
                                    </Col>
                                    <Col lg="4" md="6" className="mt-1">
                                        <img loading="lazy" src={img5} className="img-fluid rounded" alt="Responsive img"/>
                                    </Col>
                                    <Col lg="4" md="6" className="mt-1">
                                        <img loading="lazy" src={img6} className="img-fluid rounded" alt="Responsive img"/>
                                    </Col>
                                </Row>
                                <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                    <div className="d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                            chat_bubble_outline
                                        </i>
                                        <h6 className="ms-2">32</h6>
                                    </div>
                                    <hr className="hr-vertical"/>
                                    <div className="d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                            sync
                                        </i>
                                        <h6 className="ms-2">54</h6>
                                    </div>
                                    <hr className="hr-vertical"/>
                                    <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                        favorite_border
                                    </i>
                                    <h6 className="ms-2">426</h6>
                                    </div>
                                    <hr className="hr-vertical"/>
                                    <i className="material-symbols-outlined md-16">
                                        shortcut
                                    </i>
                                </div>
                            </div>
                            </div>
                            <div className="borderbox1 mt-3 d-flex">
                                <div className="user-img me-2">
                                <img loading="lazy" src={img7} alt="userimg" className="avatar-40 rounded-circle"/>
                            </div>
                                <div className="borderbox border rounded p-2">
                                    <div className="d-flex align-items-center flex-wrap">
                                    <h6>John Ramsey</h6>
                                    <span className="ms-1 d-flex align-items-center">
                                    <i className="material-symbols-outlined me-2 text-primary md-16">
                                        check_circle
                                    </i>
                                    </span>
                                    <Link to="#">@john_ram</Link>
                                    <div className="ms-auto d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                        schedule
                                    </i>
                                        <span className="mx-1"><small>2 hours</small></span>
                                    </div>
                                </div>
                                <small>Design is intellgence made visible</small>
                                </div>
                            </div>
                            <div className="borderbox1 mt-3 rounded d-flex rounded ">
                                <div className="user-img me-2">
                                    <img loading="lazy" src={img1} alt="userimg" className="avatar-40 rounded-circle"/>
                                </div>
                                <div className="border rounded p-2">
                                    <p className="mb-0 d-flex align-items-center">
                                        <span className="material-symbols-outlined  me-2 md-18">
                                            loop
                                        </span>LEONAROD RETWEETED
                                    </p>
                                    <div className="d-flex align-items-center flex-wrap mb-1">
                                        <h6>John Ramsey</h6>
                                            <span className=" ms-1 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                    check_circle
                                                </i>
                                                    @john_ram
                                            </span>
                                        <div className="ms-auto d-flex align-items-center">
                                            <i className="material-symbols-outlined md-16">
                                                schedule
                                            </i>
                                            <span className="mx-1"><small>35 mins</small></span>
                                        </div>
                                    </div>
                                        <h6 className="mb-2">very good words..</h6>
                                        <div className="border rounded  p-2">
                                    <div className="align-items-center d-flex flex-wrap">
                                            <img loading="lazy" src={img2} alt="userimg" className="avatar-40 rounded-circle"/>
                                            <h6 className="ms-2">theodocre</h6>
                                            <p className="ms-2 mb-0">@john_ram</p>
                                            <div className="ms-auto d-flex align-items-center">
                                                <i className="material-symbols-outlined md-16">
                                                schedule
                                                </i>
                                                <span className="mx-1"><small>35 mins</small></span>
                                            </div>
                                        </div>
                                        <p className="mb-0">In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                        <div className="d-flex align-items-center">
                                            <i className="material-symbols-outlined md-16">
                                            chat_bubble_outline
                                            </i>
                                            <span className="ms-1">32</span>
                                        </div>
                                        <hr className="hr-vertical"/>
                                        <div className="d-flex align-items-center">
                                           <i className="material-symbols-outlined md-16">
                                                sync
                                            </i>
                                            <span className="ms-1">54</span>
                                        </div>
                                        <hr className="hr-vertical"/>
                                        <div className="d-flex align-items-center">
                                            <i className="material-symbols-outlined md-16">
                                                favorite_border
                                            </i>
                                        <span>426</span>
                                        </div>
                                        <hr className="hr-vertical"/>
                                            <i className="material-symbols-outlined md-16">
                                                shortcut
                                            </i>
                                        </div>
                                    </div>
                            </div>
                            <div className="borderbox1 mt-3 rounded d-flex rounded">
                            <div className="user-img me-2">
                                <img loading="lazy" src={img3} alt="userimg" className="avatar-40 rounded-circle"/>
                            </div>
                            <div className="borderbox border rounded p-2">
                                <div className="d-flex align-items-center flex-wrap">
                                    <h6>John Ramsey</h6>
                                    <span className="text-primary ms-1 d-flex align-items-center">
                                        <i className="material-symbols-outlined me-2 text-primary md-16">
                                            check_circle
                                        </i>
                                    </span>
                                    <Link to="#" className="mb-0">@john_ram</Link>
                                    <div className="ms-auto d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                            schedule
                                        </i>
                                        <span className="mx-1"><small>2 hours</small></span>
                                    </div>
                                </div>
                                <h6>Best views from the vactions</h6>
                                <Row className="mt-2">
                                    <Col lg="4" md="6" className="mt-1">
                                        <img loading="lazy" src={img4} className="img-fluid rounded" alt="Responsive img"/>
                                    </Col>
                                    <Col lg="4" md="6" className="mt-1">
                                        <img loading="lazy" src={img5} className="img-fluid rounded" alt="Responsive img"/>
                                    </Col>
                                    <Col lg="4" md="6" className="mt-1">
                                        <img loading="lazy" src={img6} className="img-fluid rounded" alt="Responsive img"/>
                                    </Col>
                                </Row>
                                <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                    <div className="d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                            chat_bubble_outline
                                        </i>
                                        <h6 className="ms-2">32</h6>
                                    </div>
                                    <hr className="hr-vertical"/>
                                    <div className="d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                            sync
                                        </i>
                                        <h6 className="ms-2">54</h6>
                                    </div>
                                    <hr className="hr-vertical"/>
                                    <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                        favorite_border
                                    </i>
                                    <h6 className="ms-2">426</h6>
                                    </div>
                                    <hr className="hr-vertical"/>
                                    <i className="material-symbols-outlined md-16">
                                        shortcut
                                    </i>
                                </div>
                            </div>
                            </div>
                            <div className="borderbox1 mt-3 d-flex">
                                <div className="user-img me-2">
                                <img loading="lazy" src={img7} alt="userimg" className="avatar-40 rounded-circle"/>
                            </div>
                                <div className="borderbox border rounded p-2">
                                    <div className="d-flex align-items-center flex-wrap">
                                    <h6>John Ramsey</h6>
                                    <span className="ms-1 d-flex align-items-center">
                                    <i className="material-symbols-outlined me-2 text-primary md-16">
                                        check_circle
                                    </i>
                                    </span>
                                    <Link to="#">@john_ram</Link>
                                    <div className="ms-auto d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                        schedule
                                    </i>
                                        <span className="mx-1"><small>2 hours</small></span>
                                    </div>
                                </div>
                                <small>Design is intellgence made visible</small>
                                </div>
                            </div>
                            <div className="borderbox1 mt-3 d-flex">
                                <div className="user-img me-2">
                                    <Image src={img1} alt="userimg" className="avatar-40 rounded-circle" loading="lazy" />
                                </div>
                                <div className="borderbox border rounded p-2">
                                    <div className="d-flex align-items-center flex-wrap">
                                    <h6>John Ramsey</h6>
                                    <span className=" ms-1 d-flex align-items-center">
                                    <i className="material-symbols-outlined me-2 text-primary md-16">
                                    check_circle
                                    </i>
                                    </span>
                                    <Link className="" to="#">@john_ram</Link>
                                    <div className="ms-auto d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                        schedule
                                        </i>
                                        <span className="mx-1"><small>2 hours</small></span>
                                    </div>
                                    </div>
                                    <small>Design is intellgence made visible</small>
                                </div>
                            </div>
                            <div className="borderbox1 mt-3 d-flex">
                                <div className="user-img me-2">
                                    <Image src={img1} alt="userimg" className="avatar-40 rounded-circle" loading="lazy" />
                                </div>
                                <div className="borderbox border rounded p-2">
                                    <div className="d-flex align-items-center flex-wrap">
                                    <h6>John Ramsey</h6>
                                    <span className=" ms-1 d-flex align-items-center">
                                    <i className="material-symbols-outlined me-2 text-primary md-16">
                                    check_circle
                                    </i>
                                    </span>
                                    <Link className="" to="#">@john_ram</Link>
                                    <div className="ms-auto d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                        schedule
                                        </i>
                                        <span className="mx-1"><small>2 hours</small></span>
                                    </div>
                                    </div>
                                    <small>Design is intellgence made visible</small>
                                </div>
                            </div>
                            <div className="borderbox1 mt-3 d-flex">
                                <div className="user-img me-2">
                                    <Image src={img1} alt="userimg" className="avatar-40 rounded-circle" loading="lazy" />
                                </div>
                                <div className="borderbox border rounded p-2">
                                    <div className="d-flex align-items-center flex-wrap">
                                    <h6>John Ramsey</h6>
                                    <span className=" ms-1 d-flex align-items-center">
                                    <i className="material-symbols-outlined me-2 text-primary md-16">
                                    check_circle
                                    </i>
                                    </span>
                                    <Link className="" to="#">@john_ram</Link>
                                    <div className="ms-auto d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                        schedule
                                        </i>
                                        <span className="mx-1"><small>2 hours</small></span>
                                    </div>
                                    </div>
                                    <small>Design is intellgence made visible</small>
                                </div>
                            </div>
                            <div className="borderbox1 mt-3 d-flex">
                                <div className="user-img me-2">
                                    <Image src={img1} alt="userimg" className="avatar-40 rounded-circle" loading="lazy" />
                                </div>
                                <div className="borderbox border rounded p-2">
                                    <div className="d-flex align-items-center flex-wrap">
                                    <h6>John Ramsey</h6>
                                    <span className=" ms-1 d-flex align-items-center">
                                    <i className="material-symbols-outlined me-2 text-primary md-16">
                                    check_circle
                                    </i>
                                    </span>
                                    <Link className="" to="#">@john_ram</Link>
                                    <div className="ms-auto d-flex align-items-center">
                                        <i className="material-symbols-outlined md-16">
                                        schedule
                                        </i>
                                        <span className="mx-1"><small>2 hours</small></span>
                                    </div>
                                    </div>
                                    <small>Design is intellgence made visible</small>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="f2">
                            <Card.Body className="p-0 mb-3">
                                <div className="borderbox border p-2 rounded">
                                    <div className="d-flex  borderbox1 justify-content-between">
                                        <div className="me-3">
                                            <img loading="lazy" src={img8} className="img-fluid rounded" alt="Twitter"/>
                                        </div>
                                        <div className="w-100">
                                            <div className="d-flex justify-content-between">
                                                <div className="">
                                                    <h5 className="mb-0 d-inline-block me-1">
                                                        <Link to="#" className="">Bni Cyst</Link></h5>
                                                    <p className="mb-0 d-inline-block">Share Anna Mull's Post</p>
                                                    <p className="mb-0">5 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="mt-1">Forget the pixels for a second. Let’s focus on Tweets.Design Twitter is full of folks who Tweet well, and we want to figure out the secret to their sauce.</span>
                                    <div className="user-post mt-2">
                                        <Link to="#"><img loading="lazy" src={img9} alt="post-img" className="img-fluid w-100"/></Link>
                                    </div>
                                </div>
                            </Card.Body>
                            <div className="borderbox border p-2 rounded mb-3">
                            <div className="d-flex align-items-center flex-wrap">
                        <h6>John Ramsey</h6>
                        <span className="ms-1 d-flex align-items-center">
                            <i className="material-symbols-outlined me-2 text-primary md-16">
                                check_circle
                            </i>
                        </span>
                        @john_ram
                        <div className="ms-auto d-flex align-items-center">
                            <i className="material-symbols-outlined md-16">
                                schedule
                            </i>
                            <span className="mx-1"><small>2 hours</small></span>
                        </div>
                    </div>
                            <h6>Best views from the vactions</h6>
                            <Row className="mt-2">
                                <Image loading="lazy" src={img10} alt="post-img" className="img-fluid w-100"/>
                            </Row>
                            <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    chat_bubble_outline
                                    </i>
                                    <h6 className="ms-2">8</h6>
                                </div>
                                <hr className="hr-vertical"/>
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    sync
                                    </i>
                                    <h6 className="ms-2">12</h6>
                                </div>
                                <hr className="hr-vertical"/>
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16 text-danger">
                                    favorite_border
                                    </i>
                                    <h6 className="ms-2">47</h6>
                                </div>
                                <hr className="hr-vertical"/>
                                <i className="material-symbols-outlined md-16">
                                    shortcut
                                </i>
                            </div>
                        </div>
                        <div className="borderbox border p-2 rounded mb-3">
                            <div className="d-flex align-items-center flex-wrap ">
                                <h6>John Ramsey</h6>
                                <span className=" ms-1 d-flex align-items-center">
                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                check_circle
                                </i>@john_ram
                                </span>
                                <div className="ms-auto d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    schedule
                                    </i>
                                    <span className="mx-1"><small>2 hours</small></span>
                                </div>
                            </div>
                            <h6>Best views from the vactions</h6>
                            <div className="row mt-2">
                                <Image src={img10} alt="post-image" className="img-fluid w-100" loading="lazy" />
                            </div>
                            <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    chat_bubble_outline
                                    </i>
                                    <h6 className="ms-2">8</h6>
                                </div>
                                <hr className="hr-vertical" />
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    sync
                                    </i>
                                    <h6 className="ms-2">12</h6>
                                </div>
                                <hr className="hr-vertical" />
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16 text-danger">
                                    favorite_border
                                    </i>
                                    <h6 className="ms-2">47</h6>
                                </div>
                                <hr className="hr-vertical" />
                                <i className="material-symbols-outlined md-16">
                                shortcut
                                </i>
                            </div>
                        </div>
                        <div className="borderbox border p-2 rounded mb-3">
                            <div className="d-flex align-items-center flex-wrap ">
                                <h6>John Ramsey</h6>
                                <span className=" ms-1 d-flex align-items-center">
                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                check_circle
                                </i>@john_ram
                                </span>
                            <div className="ms-auto d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    schedule
                                    </i>
                                    <span className="mx-1"><small>2 hours</small></span>
                                </div>
                            </div>
                            <h6>Best views from the vactions</h6>
                            <div className="row mt-2">
                                <Image src={img10} alt="post-image" className="img-fluid w-100" loading="lazy" />
                            </div>
                            <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    chat_bubble_outline
                                    </i>
                                    <h6 className="ms-2">8</h6>
                                </div>
                                <hr className="hr-vertical" />
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    sync
                                    </i>
                                    <h6 className="ms-2">12</h6>
                                </div>
                                <hr className="hr-vertical" />
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16 text-danger">
                                    favorite_border
                                    </i>
                                    <h6 className="ms-2">47</h6>
                                </div>
                                <hr className="hr-vertical" />
                                <i className="material-symbols-outlined md-16">
                                shortcut
                                </i>
                                </div>
                        </div>
                        <div className="borderbox border p-2 rounded ">
                            <div className="d-flex align-items-center flex-wrap ">
                                <h6>John Ramsey</h6>
                                <span className=" ms-1 d-flex align-items-center">
                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                check_circle
                                </i>@john_ram
                                </span>
                                <div className="ms-auto d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    schedule
                                    </i>
                                    <span className="mx-1"><small>2 hours</small></span>
                                </div>
                            </div>
                            <h6>Best views from the vactions</h6>
                            <div className="row mt-2">
                                <Image src={img10} alt="post-image" className="img-fluid w-100" />
                            </div>
                            <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    chat_bubble_outline
                                    </i>
                                    <h6 className="ms-2">8</h6>
                                </div>
                                <hr className="hr-vertical" />
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16">
                                    sync
                                    </i>
                                    <h6 className="ms-2">12</h6>
                                </div>
                                <hr className="hr-vertical" />
                                <div className="d-flex align-items-center">
                                    <i className="material-symbols-outlined md-16 text-danger">
                                    favorite_border
                                    </i>
                                    <h6 className="ms-2">47</h6>
                                </div>
                                <hr className="hr-vertical" />
                                <i className="material-symbols-outlined md-16">
                                shortcut
                                </i>
                                </div>
                        </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="f3" className="fade show">
                                <div className="borderbox1 d-flex mb-3">
                                    <div className="user-img me-2">
                                        <img loading="lazy" src={img21} alt="userimg" className="avatar-40 rounded-circle"/>
                                    </div>
                                    <div className="borderbox border rounded p-2">
                                            <h6>very good words..</h6>
                                            <div className="border mt-2  p-2 rounded">
                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                            </div>
                                            <h6>Best views from the vactions</h6>
                                        <Row className="mt-2">
                                            <Col lg="4" md="6" className="mt-1">
                                                <Image loading="lazy" src={img22} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <Image loading="lazy" src={img23} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <Image loading="lazy" src={img24} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className="borderbox1 d-flex mb-3">
                                    <div className="user-img me-2">
                                        <img loading="lazy" src={img25} alt="userimg" className="avatar-40 rounded-circle"/>
                                    </div>
                                    <div className="borderbox border rounded p-2">
                                        <h6>very good words..</h6>
                                        <div className="border p-2 rounded">
                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                        </div>
                                        <Row className="mt-2">
                                            <Col lg="4" md="6" className="mt-1">
                                                <Image loading="lazy" src={img26} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <Image loading="lazy" src={img27} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <Image loading="lazy" src={img28} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className="borderbox1 d-flex mb-3">
                                    <div className="user-img me-2">
                                        <img loading="lazy" src={img29} alt="userimg" className="avatar-40 rounded-circle"/>
                                    </div>
                                    <div className="borderbox border rounded p-2">
                                            <h6>very good words..</h6>
                                            <div className="border mt-2 p-2 rounded">
                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                            </div>
                                        <Row className="mt-2">
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img30} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img31} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img32} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                        </Row>
                                    </div>
                                </div> 
                                <div className="borderbox1 d-flex mb-3">
                                    <div className="user-img me-2">
                                        <img loading="lazy" src={img29} alt="userimg" className="avatar-40 rounded-circle"/>
                                    </div>
                                    <div className="borderbox border rounded p-2">
                                            <h6>very good words..</h6>
                                            <div className="border mt-2 p-2 rounded">
                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                            </div>
                                        <Row className="mt-2">
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img30} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img31} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img32} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                        </Row>
                                    </div>
                                </div> 
                                <div className="borderbox1 d-flex mb-3">
                                    <div className="user-img me-2">
                                        <img loading="lazy" src={img29} alt="userimg" className="avatar-40 rounded-circle"/>
                                    </div>
                                    <div className="borderbox border rounded p-2">
                                            <h6>very good words..</h6>
                                            <div className="border mt-2 p-2 rounded">
                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                            </div>
                                        <Row className="mt-2">
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img30} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img31} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img32} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                        </Row>
                                    </div>
                                </div> 
                                <div className="borderbox1 d-flex">
                                    <div className="user-img me-2">
                                        <img loading="lazy" src={img29} alt="userimg" className="avatar-40 rounded-circle"/>
                                    </div>
                                    <div className="borderbox border rounded p-2">
                                            <h6>very good words..</h6>
                                            <div className="border mt-2 p-2 rounded">
                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                            </div>
                                        <Row className="mt-2">
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img30} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img31} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                            <Col lg="4" md="6" className="mt-1">
                                                <img loading="lazy" src={img32} className="img-fluid rounded" alt="Responsive img"/>
                                            </Col>
                                        </Row>
                                    </div>
                                </div> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="f4" className="fade show">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="d-flex justify-content-between
                                    list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img11} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">2 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>556</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img12} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">2 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>524</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img13} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">3 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>556</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img14} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">3 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>456</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img15} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">3 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>556</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img16} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">3 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>556</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img17} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">3 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>556</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img18} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">3 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>556</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img19} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">3 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>344</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul> 
                                    <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                        <li className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img20} alt=""/>
                                                <div className="media-body ms-1">
                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                    <p className="mb-0">3 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-6 text-center d-flex">
                                            <span>
                                                <h4>556</h4>
                                            </span>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>                                    
                                </div>
                            </div>
                            
                        </Tab.Pane>
                        </Tab.Content>
                    </nav>
                </Card>
            </Tab.Container>
        </Col>
        {/* </Tab.Container> */}
        <Col lg="3">
            <Card>
                <Card.Header  className="d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">New Photos</h4>
                </div>
                </Card.Header>
                <Card.Body>
                    <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                        <li className="">
                            <Link to="#">
                            <Image onClick={() => imageOnSlide(1)} src={g1} className="img-fluid" alt="photo-profile" loading="lazy" />
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#">
                            <Image onClick={() => imageOnSlide(2)} src={g2} className="img-fluid" alt="photo-profile" loading="lazy" />
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#">
                            <Image onClick={() => imageOnSlide(3)} src={g3} className="img-fluid" alt="photo-profile" loading="lazy" />
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#">
                            <Image onClick={() => imageOnSlide(4)} src={g4} className="img-fluid" alt="photo-profile" loading="lazy" />
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#">
                            <Image onClick={() => imageOnSlide(5)} src={g5} className="img-fluid" alt="photo-profile" loading="lazy" />
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#">
                            <Image onClick={() => imageOnSlide(6)} src={g6} className="img-fluid" alt="photo-profile" loading="lazy" />
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#">
                            <Image onClick={() => imageOnSlide(7)} src={g7} className="img-fluid" alt="photo-profile" loading="lazy" />
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#">
                            <Image onClick={() => imageOnSlide(8)} src={g8} className="img-fluid" alt="photo-profile" loading="lazy" />
                            </Link>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Blog Posts</h4>
                </div>
                </div>
                <div className="card-body">
                <ul className="list-unstyled m-0 p-0">
                    <li className="border-bottom pb-3">
                        <Link to="#" className="h5">My Perfect Vacations in South America and Europe</Link>
                        <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.</p>
                        <div className="post__date">
                            <span className="published">
                            7 hours ago
                            </span>
                        </div>
                    </li>
                    <li className="pt-3">
                        <Link to="#" className="h5">The Big Experience of Travelling Alone</Link>
                        <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.</p>
                        <div className="post__date">
                            <span className="published">
                            March 18th, at 6:52pm
                            </span>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <Card>
            <Card.Header className="d-flex justify-content-between">
               <div className="header-title">
                  <h4 className="card-title">Trends For You</h4>
               </div>
              <i className="material-symbols-outlined md-18">
settings
</i>
            </Card.Header>
                <Card.Body>
                <div className="d-flex pb-2  border-bottom align-items-center">
                <div className="flex-grow-1">
                    <h6>#ecommerce</h6>
                    <p className="mb-0">71.4k Tweets</p>
                </div>
                <Dropdown>
                    <Dropdown.Toggle as="span" id="dropdownMenuButton9 " data-bs-toggle="dropdown" aria-expanded="false" role="button">
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                    <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                    <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                    <Dropdown.Item  href="#">block</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className="d-flex  pb-2  pt-2 border-bottom align-items-center">
                <div className="flex-grow-1">
                        <h6>#apple</h6>
                        <small>68.2k Tweets</small>
                </div>
                <Dropdown>
                    <Dropdown.Toggle as="span" id="dropdownMenuButton9 " data-bs-toggle="dropdown" aria-expanded="false" role="button">
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                    <Dropdown.Item  to="#">Unfollow</Dropdown.Item>
                    <Dropdown.Item  to="#">Unfriend</Dropdown.Item>
                    <Dropdown.Item  to="#">block</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className="d-flex  pb-2  pt-2 border-bottom align-items-center">
                <div className="flex-grow-1">
                        <h6>#ueta</h6>
                        <small>63.8k Tweets</small>
                </div>
                <Dropdown>
                    <Dropdown.Toggle as="span" id="dropdownMenuButton9 " data-bs-toggle="dropdown" aria-expanded="false" role="button">
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                    <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                    <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                    <Dropdown.Item  href="#">block</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <li className="d-flex  pb-2  pt-2 border-bottom align-items-center">
                <div className="flex-grow-1">
                        <h6>#music</h6>
                        <small>61k Tweets</small>
                </div>
                <Dropdown>
                    <Dropdown.Toggle as="span" id="dropdownMenuButton9 " data-bs-toggle="dropdown" aria-expanded="false" role="button">
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                    <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                    <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                    <Dropdown.Item  href="#">block</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </li>
                <div className="text-center">
                  <p className="mb-0 font-weight-bold pt-3">SEE MORE</p>
               </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header className="d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">You should follow</h4>
                    </div>
                    <i className="material-symbols-outlined md-16">
                        shortcut
                    </i>
                </Card.Header>
                <Card.Body>
                <ul className="list-inline m-0 p-0">
                    <li className="d-flex mb-3 align-items-center">
                        <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img33} alt=""/>
                        <div className="ms-2 flex-grow-1">
                            <h6 className="d-flex align-items-center">Kate <i className="material-symbols-outlined ms-1 text-primary md-14">
                           check_circle
                           </i></h6>
                            <small>@kate14</small>
                        </div>
                        <button type="submit" className="btn bg-soft-primary smallbutton">follow</button>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                        <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img34} alt=""/>
                        <div className="ms-1 flex-grow-1">
                        <h6 className="d-flex align-items-center">Snman <i className="material-symbols-outlined ms-1 text-primary md-14">
                           check_circle
                           </i></h6>
                        <small>@snow_man</small>
                        </div>
                        <button type="submit" className="btn bg-soft-primary smallbutton">follow</button>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                        <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img35} alt=""/>
                        <div className="ms-1 flex-grow-1">
                        <h6 className="d-flex align-items-center">Shara<i className="material-symbols-outlined ms-1 text-primary md-14">
                           check_circle
                           </i></h6>
                        <small>@Sharapova</small>
                        </div>
                        <button type="submit" className="btn bg-soft-primary smallbutton">follow</button>
                    </li>
                </ul>
                <div className="text-center mt-2">
                  <small>SEE ALL</small>
               </div>
                </Card.Body>
            </Card>
        </Col>
        </Row>
       </div>
        
        </Container>
        </>
    )
}
export default Profile1
