import { motion } from "framer-motion";

export const PageTransitionAnim = (props) => {
  return (
    <div className="overflow-hidden h-full">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="h-full flex flex-col"
      >
        {props.children}
      </motion.div>
    </div>
  );
};
