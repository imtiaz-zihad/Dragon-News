import swimming from '../assets/swimming.png'
import classes from '../assets/class.png'
import play from '../assets/playground.png'

const QZone = () => {
    return (
        <div className="bg-[#F3F3F3] mt-7">
            <h1 className="text-2xl font-semibold text-gray-600 py-3 px-3">Q-Zone</h1>
            <div className="border-gray-300 border-dashed border-4 mb-5">
                <img className='w-full p-1' src={swimming} alt="" />
            </div>
            <div className="border-gray-300 border-dashed border-4 mb-5">
                <img className='w-full p-1' src={classes} alt="" />
            </div>
            <div className="border-gray-300 border-dashed border-4 mb-5">
                <img className='w-full p-1' src={play} alt="" />
            </div>
        </div>
    );
};

export default QZone;