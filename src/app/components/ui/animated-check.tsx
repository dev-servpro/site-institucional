import * as motion from "motion/react-client";

export default function AnimatedCheckCircle() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Círculo */}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />

      {/* Check */}
      <motion.path
        d="M9 12l2 2l4 -4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 1,
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
