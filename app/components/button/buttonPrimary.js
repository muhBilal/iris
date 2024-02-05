const ButtonPrimary = ({ text }) => {
    return (
        <button className="font-poppins relative rounded-md flex h-[50px] w-40 items-center justify-center overflow-hidden bg-orange text-white shadow-2xl transition-all
         before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out
         hover:before:h-56 hover:before:w-56 hover:text-orange">
            <span className="relative z-10">{text}</span>
        </button>
    );
};

export default ButtonPrimary;