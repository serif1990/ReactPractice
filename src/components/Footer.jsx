import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-inner-container">
        <div className="footer-content" id="section1">
          <div className="footerBanner">
            <h1>React</h1>
            <p>shop</p>
          </div>
        </div>
        <div className="footer-content" id="section2"></div>
        <div className="footer-content" id="section3"></div>
        <div className="footer-content" id="section4">
          <div className="inner-footer-content">
            <h3>Links</h3>
            <ul>
              <li className="first-link">Test1</li>
              <li>Test2</li>
              <li>Test3</li>
              <li>Test4</li>
            </ul>
          </div>
        </div>
        <div className="footer-content" id="section5">
          <div className="inner-footer-content">
            <h3>Categories</h3>
            <ul>
              <li className="first-link">Test1</li>
              <li>Test2</li>
              <li>Test3</li>
              <li>Test4</li>
            </ul>
          </div>
        </div>
        <div className="footer-content" id="section6">
          <div className="inner-footer-content">
            <h3>Subscribe</h3>
            <ul>
              <li className="first-link">Test1</li>
              <li>Test2</li>
              <li>Test3</li>
              <li>Test4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
