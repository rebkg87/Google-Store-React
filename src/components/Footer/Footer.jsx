
const footer =()=>{

  return (
    <footer>
    <div className="footer-icons">
      <a href='https://x.com/Google'>
        <img src="/assets/images/icons/SM-x.svg" alt="x" />
        </a>
        <a href='https://www.instagram.com/google/'>
        <img src="/assets/images/icons/SM-instagram.svg" alt="instagram" />
        </a>
        <a href='https://www.facebook.com/Google?locale=es_ES'>
        <img src="/assets/images/icons/SM-facebook.svg" alt="facebook" />
        </a>
        <a href='https://www.youtube.com/@googleplay'>
        <img src="/assets/images/icons/SM-youtube.svg" alt="youtube" />
        </a>
        <a href="https://www.tiktok.com/tiktokstudio">
        <img src="/assets/images/icons/SM-tiktok.svg" alt="tiktok" />
        </a>
      </div>
      <div className="footer-info">
        <div className="flag">
          <img src={spainFlag} alt="Spain flag" />
        </div>
        <div className="footer-info-list">
          <ul>
            <li>Spain</li>
            <li> Google Nest Commitment to Privacy</li>
            <li>Sales Terms</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
 
  export default footer;
