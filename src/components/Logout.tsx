// import { AiOutlineMore } from 'react-icons/ai'
// import { FaRegUserCircle } from 'react-icons/fa'

// function Logout() {
//     return (
//         <nav className="mt-8 flex justify-between items-center">
//             <div className='flex items-center gap-1 mr-8'>
//                 <FaRegUserCircle size={20} className='text-white' />
//                 <span className='font-robo text-sm text-white'>Bolu Adebayo</span>
//             </div>

//             <button aria-label="More options" className="focus:outline-none" title="More options">
//                 <AiOutlineMore className='text-white' />
//             </button>
//         </nav>
//     )
// }

// export default Logout


import { AiOutlineMore } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

function Logout() {
    const handleLogout = () => {
        // Implement your logout logic here, e.g., clearing user session, redirecting to login page
        console.log('Logout triggered'); // Replace with actual logout actions
    };

    return (
        <nav className="mt-8 flex justify-between items-center">
            <div className="flex items-center gap-1 mr-8">
                <FaRegUserCircle
                    size={20}
                    className="text-white"
                    aria-label="User icon" // Added aria-label for accessibility
                />
                <span className="font-robo text-sm text-white">Bolu Adebayo</span>
            </div>

            <button
                aria-label="Logout" // Updated aria-label for clarity
                className="focus:outline-none"
                onClick={handleLogout} // Added click handler
            >
                <AiOutlineMore className="text-white" />
            </button>
        </nav>
    );
}

export default Logout;

