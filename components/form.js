import { useReducer } from "react"

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function Form() {
    const [formData, setFormData] = useReducer(formReducer, {})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form className="grid lg:grid-cols-2 w4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input
                    type="text"
                    className="border w-full px-5 py-3 rounded-md focus:outline-none"
                    onChange={setFormData}
                    name="firstname"
                    placeholder="First Name"
                />
            </div>
            <div className="input-type">
                <input
                    type="text"
                    className="border w-full px-5 py-3 rounded-md focus:outline-none"
                    onChange={setFormData}
                    name="lastname"
                    placeholder="Last Name"
                />
            </div>
            <div className="input-type">
                <input
                    type="text"
                    className="border w-full px-5 py-3 rounded-md focus:outline-none"
                    onChange={setFormData}
                    name="email"
                    placeholder="Email"
                />
            </div>
            <div className="input-type">
                <input
                    type="text"
                    className="border w-full px-5 py-3 rounded-md focus:outline-none"
                    onChange={setFormData}
                    name="salary"
                    placeholder="Salary"
                />
            </div>
            <div className="input-type">
                <input type="date" className="border w-full px-5 py-3 rounded-md focus:outline-none" onChange={setFormData} name="birthday" />
            </div>
            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input
                        type="radio"
                        value="Active"
                        id="radioDefault1"
                        className="form-check-input rounded-full appearance-none w-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer"
                        onChange={setFormData}
                        name="status"
                    />
                    <label htmlFor="radioDefault1" className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        value="Inactive"
                        id="radioDefault2"
                        className="form-check-input rounded-full appearance-none w-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer"
                        onChange={setFormData}
                        name="status"
                    />
                    <label htmlFor="radioDefault2" className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>
            <button className="flex justify-center text-md w-2/6 bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:text-indigo-500 hover:border-indigo-500">Add</button>
        </form>
    );
}
