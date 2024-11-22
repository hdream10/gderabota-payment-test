import cls from "./Loader.module.css";

const Loader = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <div className={cls.loader} />
    </div>
  );
};

export default Loader;
