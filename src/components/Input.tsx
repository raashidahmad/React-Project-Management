export const Input = ({ label, ...props }: any) => {
    return (
        <>
            <label className="lock text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input 
                {...props}
                className="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            />
        </>
    );
}