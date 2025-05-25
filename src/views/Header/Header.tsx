import './Header.scss'
import { useDate } from '../../hooks/useData';

const Header = () => {
    const currentDate=useDate();
    return (
    <>
        <h1>Note your tasks</h1>
        <p className='date'>{currentDate}</p>
    </>
  )
}

export default Header