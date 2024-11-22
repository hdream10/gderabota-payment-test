const ErrorIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.4537 0L39.9999 4.54585L4.54597 39.9951L-0.000146426 35.4493L35.4537 0Z"
        fill="#EF4F39"
      />
      <path
        d="M39.995 35.4558L35.4491 40L-0.000152913 4.54422L4.54577 -9.57056e-06L39.995 35.4558Z"
        fill="#EF4F39"
      />
    </svg>
  );
};

export default ErrorIcon;
