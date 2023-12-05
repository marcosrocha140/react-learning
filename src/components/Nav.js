import styles from './Nav.modules.css'

function Nav(){
    return(
        <div>
            <nav> 
                <a href="https://interiorsport.bubbleapps.io/version-test/users" className={styles.link}>Link 1</a>
                <a href="https://interiorsport.bubbleapps.io/version-test/users">Link 2</a>
                <a href="https://interiorsport.bubbleapps.io/version-test/users">Link 3</a>
            </nav>
        </div>
    )
}

export default Nav