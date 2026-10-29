import * as motion from "motion/react-client";

export default function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 text-green-800">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-lg font-semibold text-green-800"
      >
        Orçamento finalizado, em até 72 horas entraremos em contato.
      </motion.p>
    </div>
  );
}
