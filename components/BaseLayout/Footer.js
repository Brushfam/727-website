import footer from '../../styles/components/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={footer.footer}>
            <div className={footer.imprint}>
                <span>
                    © 2022 727.ventures
                </span>
                <span>
                    See you soon!
                </span>
                <span>
                    Contact Us: <strong>contact@727.ventures</strong>
                </span>
            </div>

        </footer>
    )
}

export default Footer