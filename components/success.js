import {BiCheck} from 'react-icons/bi';

export default function Success({ message }) {
    return (
        <div className="success container mx-auto">
            <div className="flex justify-center mx-auto border border-indigo-200 bg-indigo-400 w-3/6 text-indigo-900 text-md my-4 py-2 text-center bg-opacity-10">
                {message} <BiCheck size={25} />
            </div>
        </div>
    )
}