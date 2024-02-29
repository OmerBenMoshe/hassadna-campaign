'use client';
import { motion } from "framer-motion";

import React from "react";

interface VolunteeringContainerProps {
    modalOpen: boolean;
    open: (field: String) => void;
    close: () => void;
    volunteerField: string;
    fieldColor: string;
}

const VolunteeringContainer: React.FC<VolunteeringContainerProps> =
    ({ modalOpen, open, close, volunteerField, fieldColor}) => {
        return (
            <>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`rounded-full text-l p-2 ${fieldColor} border-0 pl-10 pr-10 m-0.5 h-[65px]`}
                    onClick={() => (modalOpen ? close() : open(volunteerField))}
                >
                    <span dir="rtl" className="text-white">{volunteerField}</span>
                </motion.button>
            </>

        );
    };

export default VolunteeringContainer;
