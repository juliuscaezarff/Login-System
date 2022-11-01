export const Button = ({text, type}) => {
    return (
        <div className='m-auto'>
            <button type={type} className='hover:text-purple-500 hover:bg-white transition-all font-Cinzel text-purple-50 py-2 px-10 rounded-full bg-purple-500 bg-opacity-50'>
                {text}
            </button>
        </div>
    )
}