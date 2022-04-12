import React, {useState, useContext, useEffect} from 'react'
import { Link , useLocation} from 'react-router-dom'
import {Accordion, useAccordionButton, AccordionContext} from 'react-bootstrap'
import Scrollbar from 'smooth-scrollbar'

function CustomToggle({ children, eventKey, onClick }) {

   const { activeEventKey } = useContext(AccordionContext);

   const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({state: !active, eventKey: eventKey}));

   const isCurrentEventKey = activeEventKey === eventKey;
 
   return (
     <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
       decoratedOnClick(isCurrentEventKey)
     }}>
       {children}
     </Link>
   );
 }
const Sidebar = () => { 
   useEffect(
      () =>{
          Scrollbar.init(document.querySelector('#sidebar-scrollbar'))
   })
   const [activeMenu, setActiveMenu] = useState(false)
   let location = useLocation();
      return (
         <>
            <div className="iq-sidebar">
               <div id="sidebar-scrollbar">
                  <nav className="iq-sidebar-menu">
                     <Accordion as="ul" id="iq-sidebar-toggle" className="iq-menu">
                        <li className={`${location.pathname === '/' ? 'active' : ''} `}>
                           <Link to="/" ><i className="las la-newspaper"></i><span>Newsfeed</span></Link>
                        </li>
                        <li className={`${location.pathname === '/profile' ? 'active' : ''}`}>
                           <Link to="/profile" ><i className="las la-user"></i><span>Profile</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/friend-list' ? 'active' : ''}`}>
                           <Link to="/dashboards/friend-list" ><i className="las la-user-friends"></i><span>Friend List</span></Link>
                        </li>
                        <li className={`${location.pathname === '/friend-profile' ? 'active' : ''}`}>
                           <Link to="/friend-profile" ><i className="las la-user-friends"></i><span>Friend Profile</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/groups' || location.pathname === '/dashboards/group-detail' ? 'active' : '' }` }>
                           <Link to="/dashboards/groups" ><i className="las la-users"></i><span>Group</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/profile-images' ? 'active' : ''}`}>
                           <Link to="/dashboards/profile-images" ><i className="las la-image"></i><span>Profile Image</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/profile-videos' ? 'active' : ''}`}>
                           <Link to="/dashboards/profile-videos" ><i className="las la-video"></i><span>Profile Video</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/profile-events' ? 'active' : ''}`}>
                           <Link to="/dashboards/profile-events" ><i className="las la-film"></i><span>Profile Events</span></Link>
                        </li>
                        <li className={`${location.pathname === '/profile-badges' ? 'active' : ''}`}>
                           <Link to="/profile-badges" ><i className="las la-certificate"></i><span>Profile Badges</span></Link>
                        </li>
                        <li className={`${location.pathname === '/profile-forum' ? 'active' : ''}`}>
                           <Link to="/profile-forum" ><i className="lab la-wpforms"></i><span>Profile Forum</span></Link>
                        </li>
                        <li className={`${location.pathname === '/notification' ? 'active' : ''}`}>
                           <Link to="/notification" ><i className="las la-bell"></i><span>Notification</span></Link>
                        </li>
                        <li className={`${location.pathname === '/file' ? 'active' : ''}`}>
                           <Link to="/file" ><i className="las la-file"></i><span>Files</span></Link>
                        </li>
                        <li className={`${location.pathname === '/friend-request' ? 'active' : ''}`}>
                           <Link to="/friend-request" ><i className="las la-anchor"></i><span>Friend Request</span></Link>
                        </li>
                        <li className={`${location.pathname === '/chat' ? 'active' : ''}`}>
                           <Link to="/chat"><i className="lab la-rocketchat"></i><span>Chat</span></Link>
                        </li>
                        <li className={`${location.pathname === '/todo' ? 'active' : ''}`}>
                           <Link to="/todo" ><i className="las la-check-circle"></i><span>Todo</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/calendar' ? 'active' : ''}`}>
                           <Link to="/dashboards/calendar" ><i className="las la-calendar"></i><span>Calendar</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/birthday' ? 'active' : ''}`}>
                           <Link to="/dashboards/birthday" ><i className="las la-birthday-cake"></i><span>Birthday</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/weather' ? 'active' : ''}`}>
                           <Link to="/dashboards/weather" ><i className="ri-snowy-line"></i><span>Weather</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/music' ? 'active' : ''}`}>
                           <Link to="/dashboards/music" ><i className="ri-play-circle-line"></i><span>Music</span></Link>
                        </li>
                        <Accordion.Item as="li" className={`${location.pathname === '/dashboards/market-place/market1' || location.pathname === '/dashboards/market-place/market2'?  'active' : ''}`}  eventKey="sidebar-market-place"  >
                           <CustomToggle eventKey="sidebar-market-place" onClick={(activeKey) => setActiveMenu(activeKey)}>
                              <i className="ri-mail-line"></i>
                              <span>MarketPlace</span>
                              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-market-place">
                              <ul id="market" className="iq-submenu ">
                                 <li className={`${location.pathname === '/dashboards/market-place/market1' ? 'active' : ''}`}>
                                    <Link to="/dashboards/market-place/market1">
                                       <i className="ri-inbox-line"></i>Market1
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboards/market-place/market2' ? 'active' : ''}`}>
                                    <Link to="/dashboards/market-place/market2">
                                       <i className="ri-edit-line"></i>Market2
                                    </Link>
                                 </li>
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item>
                        <Accordion.Item as="li" className={`${location.pathname === '/dashboards/profiles/profile1' || location.pathname === '/dashboards/profiles/profile2' || location.pathname === '/dashboards/profiles/profile3' ?  'active' : ''}`} eventKey="sidebar-profiles"  >
                           <CustomToggle eventKey="sidebar-profiles" onClick={(activeKey) => setActiveMenu(activeKey)}>
                                 <i className="lab la-blogger"></i>
                                 <span>Profiles</span>
                                 <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-profiles">
                              <ul id="profiles" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboards/profiles/profile1' ? 'active' : ''}`}>
                                    <Link to="/dashboards/profiles/profile1">
                                       <i className="ri-grid-line"></i>Profile1
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboards/profiles/profile2' ? 'active' : ''}`}>
                                    <Link to="/dashboards/profiles/profile2">
                                       <i className="ri-list-check-2"></i>Profile2
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboards/profiles/profile3' ? 'active' : ''}`}>
                                    <Link to="/dashboards/profiles/profile3">
                                       <i className="ri-information-line"></i>Profile3
                                    </Link>
                                 </li>
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item>
                        <Accordion.Item as="li" className={`${location.pathname === '/dashboards/store/store-category-grid' || location.pathname === '/dashboards/store/store-category-list'|| location.pathname === '/dashboards/store/store-checkout' || location.pathname === '/dashboards/store/store-detail' ?  'active' : ''}`}  eventKey="sidebar-store"  >
                           <CustomToggle eventKey="sidebar-store" onClick={(activeKey) => setActiveMenu(activeKey)}>
                              <i className="las la-store"></i>
                              <span>Store</span>
                              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-store">
                              <ul id="store" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboards/store/store-category-grid' ? 'active' : ''}`}>
                                    <Link to="/dashboards/store/store-category-grid">
                                       <i className="ri-grid-line"></i>Category Grid
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboards/store/store-category-list' ? 'active' : ''}`}>
                                    <Link to="/dashboards/store/store-category-list">
                                       <i className="ri-list-check-2"></i>Category list
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboards/store/store-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboards/store/store-detail">
                                       <i className="ri-information-line"></i>Store Detail
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboards/store/store-checkout' ? 'active' : ''}`}>
                                    <Link to="/dashboards/store/store-checkout">
                                       <i className="ri-chat-check-line"></i>Checkout
                                    </Link>
                                 </li>
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item>
                        
                     </Accordion>
                  </nav>
                  <div className="p-5"></div>
               </div>
            </div>
         </>
   )
}

export default Sidebar
