export const Button = ({text, type}) => {
    return (
        <div className='m-auto'>
            <button
                type={type}
                className='
                transition-all font-Cinzel py-2 px-10 rounded-full bg-opacity-50
                focus:ring-2 focus:ring-purple-400
                hover:text-purple-500 hover:bg-white text-purple-50 bg-purple-500
                '
            >
                {text}
            </button>
        </div>
    )
}

