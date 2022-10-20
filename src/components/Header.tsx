import styles from './Header.module.css'
import layerImg from '../assets/layer.svg'
import logoImg from '../assets/logo.svg'

export function Header() {
    return (
        <div className={styles.content}>
            <header>
                <img src={layerImg} alt="" />

                <img src={logoImg} alt="" />
            </header>
        </div>
    )
}