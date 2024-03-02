import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

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

interface NotificationProps {
    handleClose: () => void;
    project: string;
    volunteerField: string;
}
const Notification: React.FC<NotificationProps> = ({ handleClose, project, volunteerField }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                dir="rtl"
                className="relative rounded-3xl border-4 border-purple bg-white text-center items-center pt-5 pb-5 pr-16 pl-16"
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
                <h1 className="text-bold p-2">{volunteerField}</h1>
                <p dir="rtl">לפרויקט חדש עבור &apos;{project}&apos;</p>
                <p>אנחנו מחפשים מומחה {volunteerField}</p>
                <p>תותח וזמין לתקופה הקרובה</p>
                <Link href="/join-us">
                    <span dir="rtl" className="text-darkGray text-sm">להצטרפות לפרויקט!</span>
                </Link>
            </motion.div>
        </Backdrop>
    );
};


export default Notification;