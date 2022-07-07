function Button({ onClick, type, color, text, textcolor, marg, hovertext }) {
  return (
    <div>
      <button
        type={type}
        className={`flex w-full transform items-center justify-center ${marg} rounded-xl ${color} ${textcolor} border-2 border-blue-600 px-10 py-4 text-center text-base font-medium transition duration-500 ease-in-out hover:bg-blue-700 hover:text-${hovertext} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
Button.defaultProps = {
  color: "bg-blue-600",
  textcolor: "text-white",
};

export default Button;
