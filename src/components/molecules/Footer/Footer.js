import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
     <a href="https://github.com/berthutapea" target="_blank" rel="noreferrer" className="copyright-link">Gilbert Hutapea</a>
    </div>
  )
}
export default Footer