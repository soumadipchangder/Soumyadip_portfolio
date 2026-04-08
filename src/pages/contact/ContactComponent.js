import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} onToggle={this.props.onToggle} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Soumyadip Changder"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text">{ContactData["title"]}</h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button text="See My Resume" href="/resume" theme={theme} />
                </div>
              </div>
            </div>
          </Fade>

          {/* CTA Section */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-cta">
              <h2
                className="gradient-text"
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}
              >
                {blogSection["title"]}
              </h2>
              <p
                style={{
                  color: "#c8d0e0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                {blogSection["subtitle"]}
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  text="View My GitHub"
                  newTab={true}
                  href={blogSection.link}
                  theme={theme}
                />
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                {phoneSection.title && (
                  <>
                    <h1
                      className="address-heading-text"
                      style={{ color: theme.text }}
                    >
                      {phoneSection["title"]}
                    </h1>
                    <p
                      className="contact-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {phoneSection["subtitle"]}
                    </p>
                  </>
                )}
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
