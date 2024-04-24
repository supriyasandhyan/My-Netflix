import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="site-footer">
        <p className="footer-top">
          <a className="footer-top-a" href="https://help.netflix.com/contactus">
            Questions? Contact us.
          </a>
        </p>
        <ul className="footer-links structural">
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_faq_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/support/412"
              placeholder="footer_responsive_link_faq"
            >
              <span id="" data-uia="data-uia-footer-label">
                FAQ
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_help_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com"
              placeholder="footer_responsive_link_help"
            >
              <span id="" data-uia="data-uia-footer-label">
                Help Centre
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_account_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="/youraccount"
              placeholder="footer_responsive_link_account"
            >
              <span id="" data-uia="data-uia-footer-label">
                Account
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_media_center_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://media.netflix.com/"
              placeholder="footer_responsive_link_media_center"
            >
              <span id="" data-uia="data-uia-footer-label">
                Media Centre
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_relations_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="http://ir.netflix.com/"
              placeholder="footer_responsive_link_relations"
            >
              <span id="" data-uia="data-uia-footer-label">
                Investor Relations
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_jobs_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://jobs.netflix.com/jobs"
              placeholder="footer_responsive_link_jobs"
            >
              <span id="" data-uia="data-uia-footer-label">
                Jobs
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_waysToWatch_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="/watch"
              placeholder="footer_responsive_link_waysToWatch"
            >
              <span id="" data-uia="data-uia-footer-label">
                Ways to Watch
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_terms_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/legal/termsofuse"
              placeholder="footer_responsive_link_terms"
            >
              <span id="" data-uia="data-uia-footer-label">
                Terms of Use
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_privacy_separate_link_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/legal/privacy"
              placeholder="footer_responsive_link_privacy_separate_link"
            >
              <span id="" data-uia="data-uia-footer-label">
                Privacy
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_cookies_separate_link_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="#"
              placeholder="footer_responsive_link_cookies_separate_link"
            >
              <span id="" data-uia="data-uia-footer-label">
                Cookie Preferences
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_corporate_information_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/legal/corpinfo"
              placeholder="footer_responsive_link_corporate_information"
            >
              <span id="" data-uia="data-uia-footer-label">
                Corporate Information
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_contact_us_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/contactus"
              placeholder="footer_responsive_link_contact_us"
            >
              <span id="" data-uia="data-uia-footer-label">
                Contact Us
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_speed_test_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://fast.com"
              placeholder="footer_responsive_link_speed_test"
            >
              <span id="" data-uia="data-uia-footer-label">
                Speed Test
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_legal_notices_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/legal/notices"
              placeholder="footer_responsive_link_legal_notices"
            >
              <span id="" data-uia="data-uia-footer-label">
                Legal Notices
              </span>
            </a>
          </li>
          <li
            className="footer-link-item originals-link"
            placeholder="footer_responsive_link_only_on_netflix_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="https://www.netflix.com/in/browse/genre/839338"
              placeholder="footer_responsive_link_only_on_netflix"
            >
              <span id="" data-uia="data-uia-footer-label">
                Only on Netflix
              </span>
            </a>
          </li>
        </ul>
        <div className="lang-selection-container" id="lang-switcher">
          <div data-uia="language-picker+container" className="ui-select-wrapper">
            <label for="lang-switcher-select" className="ui-label">
              <span className="ui-label-text">Select Language</span>
            </label>
            <div className="select-arrow medium prefix globe">
              <select
                data-uia="language-picker"
                className="ui-select medium"
                id="lang-switcher-select"
                tabindex="0"
                placeholder="lang-switcher"
              ><i className="fa-solid fa-globe dander"></i>
                <option
                  lang="en"
                  value="/in/browse/genre/11714"
                  data-language="en"
                  data-country="IN"
                  selected=""
                >
                  English
                </option>
                <option
                  lang="hi"
                  value="/in-hi/browse/genre/11714"
                  data-language="hi"
                  data-country="IN"
                >
                  हिन्दी
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
