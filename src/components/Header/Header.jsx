import './Header.css'
import { RingLoader } from 'react-spinners';

function Header() {
    return (
        <header className="banner-header">
            
            <div className='header-container'>
            <RingLoader className='ring-loader' color={'#00FFFF'} loading={true} />
            <h1>The Movies Saga!</h1>
            </div>
        </header>
    );
}

export default Header;