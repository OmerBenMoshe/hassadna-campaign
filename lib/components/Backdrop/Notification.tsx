import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

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
    projects: string[];
    volunteerField: string;
}
const Notification: React.FC<NotificationProps> = ({ handleClose, projects, volunteerField }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                dir="rtl"
                className=" rounded-lg border-none bg-white text-center items-center p-3"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2>פרוייקטים פתוחים שצריכים {volunteerField}:</h2>
                <ul className="m-2">
                    {projects.map((project, index) => (
                        <li className="p-1" key={index}>{project}</li>
                    ))}
                </ul>
                <button
                    className="rounded-full bg-white border-2 border-darkGray w-1/2 m-auto mt-4"
                    onClick={handleClose}>
                    <span className="text-darkGray">סגור</span>
                </button>
            </motion.div>
        </Backdrop>
    );
};


export default Notification;