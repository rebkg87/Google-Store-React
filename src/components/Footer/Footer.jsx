import "./footer.scss";

const Footer =()=>{

  return (

    <footer>
      <div className="footer-icons">
        <a href="https://x.com/Google" target="_blank">
          <img src="/assets/images/icons/SM-x.svg" alt="x" />
        </a>
        <a href="https://www.instagram.com/google/" target="_blank">
          <img src="/assets/images/icons/SM-instagram.svg" alt="instagram" />
        </a>
        <a href="https://www.facebook.com/Google?locale=es_ES" target="_blank">
          <img src="/assets/images/icons/SM-facebook.svg" alt="facebook" />
        </a>
        <a href="https://www.youtube.com/@googleplay" target="_blank">
          <img src="/assets/images/icons/SM-youtube.svg" alt="youtube" />
        </a>
        <a href="https://www.tiktok.com/tiktokstudio" target="_blank">
          <img src="/assets/images/icons/SM-tiktok.svg" alt="tiktok" />
        </a>
    </div>
        <ul className="footer-info-list">
          <li className="flag"><img src="../../../public/assets/images/icons/Spain.svg" alt="Spain flag"/>Spain</li>
          <li> Google Nest Commitment to Privacy</li>
          <li>Sales Terms</li>
          <li>Terms of Service</li>
        </ul>
    </footer>
  );
}

  export default Footer;