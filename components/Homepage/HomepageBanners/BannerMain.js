import banner from '../../../styles/components/BannerMain.module.scss'

const BannerMain = () => {
    return (
        <div className={banner.banner} id='ComingSoon'>
            <div className={banner.background}>
                <img src={`/img/back.png`} alt='lines'/>
            </div>

            <div className={banner.textContent}>
                {/*<h2 className='header1'>Coming soon</h2>*/}
                <div className={banner.rightside}>
                    <p className='main'>Venture studio that creates, builds, and funds the next generation of web3 companies.</p>
                    <p className='main'></p>
                    <p className='main'>We are a team of visionaries, game-changers, and masterminds who will help you to build an outstanding company. </p>
                    <p className='main'></p>
                    <p className='main'>We are focused on companies that change the landscape of the markets and ecosystems
                        on both small and big scales, those that drive the creation of web3, and those that are dedicated towards innovation done for people.</p>
                </div>
            </div>

        </div>
    )
}

export default BannerMain;