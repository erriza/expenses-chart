import Logo from '../assets/logo.svg'

function Balance () {
    return (
        <div className=" bg-orange-600 p-4 text-white w-1/3 justify-self-center rounded-xl mx-auto my-auto flex justify-between">
            <div className='p-1'>
                <h3 className='text-xs'>My balance</h3>
                <span className='text-xl font-semibold'>$ 921.48</span>
            </div>
            <img src={Logo} className='w-12'></img>
        </div>
    )
}

export default Balance