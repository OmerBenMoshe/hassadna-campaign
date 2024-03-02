import { motion } from "framer-motion";

// @ts-ignore
const Backdrop = ({ children, onClick }) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="backdrop z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;