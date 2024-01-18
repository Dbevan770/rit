import { motion } from "framer-motion";

export const Spinner = () => {
  return (
    <motion.div
      layout
      className="h-full w-full flex items-center justify-center"
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        style={{
          width: "3rem",
          height: "3rem",
          border: "0.5rem solid #f3f3f3",
          borderTop: "0.5rem solid #3498db",
          borderRadius: "50%",
        }}
      />
    </motion.div>
  );
};
