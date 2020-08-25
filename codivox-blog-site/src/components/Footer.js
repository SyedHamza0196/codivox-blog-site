import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={footerStyles.features}>
            <div className={footerStyles.featuresInner}>
                <div>
                    <h2 className={footerStyles.heads}>codivox</h2>
                    <p className={footerStyles.featuresUl}>We’re team of developers and designers
                        specialized in building quality web
                         and mobile apps</p>
                </div>
                <div>
                    <h4 className={footerStyles.heads}>Services</h4>
                    <ul className={footerStyles.featuresUl}>
                        <li>Web Applications</li>
                        <li>Dedicated Development Teams</li>
                        <li>MVP</li>
                        <li>Development</li>
                    </ul>
                </div>
                <div>
                    <h4 className={footerStyles.heads}>About Us</h4>
                    <ul className={footerStyles.featuresUl}>
                        <li>What we can do?</li>
                        <li>Team</li>
                        <li>FAQ</li>
                        <li>How we work</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4 className={footerStyles.heads}>Blog</h4>
                    <ul className={footerStyles.featuresUl}>
                        <li>News</li>
                        <li>Technology</li>
                        <li>Case Study</li>
                    </ul>
                </div>
                <div>
                    <h4 className={footerStyles.heads}>Get Estimate</h4>
                    <ul className={footerStyles.featuresUl}>
                        <li>Testimonials</li>
                        <li>Solutions</li>
                        <li>Price</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className={footerStyles.rights}>
                <p>All rights reserved by &copy;Codivox 2020</p>
            </div>
        </div>
    )
}

export default Footer
// #f5f3ff