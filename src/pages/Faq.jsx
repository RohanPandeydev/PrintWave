import React, { useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap'
// import { NavLink } from 'react-router-dom'
import classnames  from 'classnames'

const Faq = () => {
    const [activeTab,setActiveTab]=useState("1")


    const tabs = [
        {
          id: 1,    
          name: "Placing an Order",
        },
        {
          id: 2,    
          name: "Custom Printing",
        },
        {
          id: 3,    
          name: "Shipping and Pickup",
        },
        {
          id: 4,    
          name: "Contact and Support",
        },
        {
          id: 5,    
          name: "Billing, Pricing, and Taxes",
        },
        {
          id: 6,    
          name: "Billing, Pricing, and Taxes",
        },
        {
          id: 7,    
          name: "Materials",
        },
      ];
      const toggleTab = (tab, name) => {
        if (activeTab !== tab) {
          setActiveTab(tab);
        }
      };
  return (
    <>
    
        <Header />

        <section className='main-wrap'>
            <Container>
                <h2 className='page-title'>Frequently Asked Questions</h2>

                <Nav tabs className='faq-tab mt-5'>
                    {tabs?.map((ele) => {
                        return (
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                    active: activeTab === ele?.id,
                                    })}
                                    onClick={() => toggleTab(ele?.id, ele?.name)}
                                >
                                    {ele?.name}
                                </NavLink>
                            </NavItem>
                        );
                    })}
                </Nav>

                <TabContent activeTab={activeTab} className='faq-tabcontent'>
                    <TabPane tabId={1}>
                        <div className='faq-bx'>
                            <h3>Can I Really Customize Any Product On Your Website?</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                        </div>
                        <div className='faq-bx'>
                            <h3>Can I Really Customize Any Product On Your Website?</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
                        </div>
                        <div className='faq-bx'>
                            <h3>Can I Really Customize Any Product On Your Website?</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                        </div>
                    </TabPane>
                    <TabPane tabId={2}>
                        <div className='faq-bx'>
                            <h3>Can I Really Customize Any Product On Your Website?</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
                        </div>
                        <div className='faq-bx'>
                            <h3>Can I Really Customize Any Product On Your Website?</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                        </div>
                    </TabPane>
                    <TabPane tabId={3}>
                        <h4>Tab 3 Contents</h4>
                    </TabPane>
                    <TabPane tabId={4}>
                        <h4>Tab 4 Contents</h4>
                    </TabPane>
                    <TabPane tabId={5}>
                        <h4>Tab 5 Contents</h4>
                    </TabPane>
                    <TabPane tabId={6}>
                        <h4>Tab 6 Contents</h4>
                    </TabPane>
                    <TabPane tabId={7}>
                        <h4>Tab 7 Contents</h4>
                    </TabPane>
                </TabContent>
            </Container>
        </section>

        <Footer />

    </>
  )
}

export default Faq