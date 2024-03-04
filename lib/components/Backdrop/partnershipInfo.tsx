import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

interface PartnershipProps {
    handleClose: () => void;
    partner: string;
    description: string;
}
const PartnershipInfo: React.FC<PartnershipProps> = ({ handleClose, partner, description }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                dir="rtl"
                className="relative rounded-3xl border-4 border-purple bg-white text-center items-center pt-5 pb-5 px-8 w-80"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button
                    className="absolute top-[-2rem] left-[-0.7rem] m-2 rounded-full bg-purple border-none w-10 h-10 flex items-center justify-center"
                    onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} className="text-white text-3xl" />
                </button>
                <h1 className="text-bold p-2">{description}</h1>
                <p dir="rtl">{partner}</p>
            </motion.div>
        </Backdrop>
    );
};


export default PartnershipInfo;