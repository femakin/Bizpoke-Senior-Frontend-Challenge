
import { AiOutlineMore } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

function Logout() {
    const handleLogout = () => {
        console.log('Logout triggered');
    };

    return (
        <nav className="mt-8 flex justify-between items-center">
            <div className="flex items-center gap-1 mr-8">
                <FaRegUserCircle
                    size={20}
                    className="text-white"
                    aria-label="User icon"
                />
                <span className="font-robo text-sm text-white">Bolu Adebayo</span>
            </div>

            <button
                aria-label="Logout"
                className="focus:outline-none"
                onClick={handleLogout}
            >
                <AiOutlineMore className="text-white" />
            </button>
        </nav>
    );
}

export default Logout;

