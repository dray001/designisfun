
const Banner = ({type, logo, description, logoHeight, bannerImg, bgColor}) => {
  
  let getHit;
  logoHeight ? getHit = logoHeight : getHit = '28px';

    return (
        <div className='bannerWrapper' style={{backgroundColor: `${bgColor}`}} >
          <div className='bannerContentHolder'>
            <img className='logo' src={logo} style={{height:  `${getHit}`, width: 'auto'}} alt="img"/>
            <div  className='bannerContent' dangerouslySetInnerHTML={{__html: description}} />
          </div>
          <img className={(type==='mobile') ? 'bannerMobile' : 'bannerDesktop'} src={bannerImg} alt="img"/>
          {/* image here */}
        </div>
    )
}

export default Banner;