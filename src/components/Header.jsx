import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
const Header = () => {

    const date = new Date().getFullYear()

  return (
    <>
        <div>
            <div className='flex'>
            <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <span className='mt-8 ml-10 font-semibold'>{date}</span>
            </div>
            <div>
                <span className='font-semibold text-3xl border p-3'>Stop Clock and Carousel Slider</span>
            </div>
        </div>
    </>
  )
}

export default Header