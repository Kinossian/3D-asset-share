import React, {useState} from "react";

const PageContainer = () => {
    const [todos, setTodos] = useState<any>([]);

    function handleSubmit(e: any) {
        e.preventDefault();
        const inTodo = e.currentTarget.elements.inputTodo.value;
        setTodos([...todos, inTodo]);
        console.log(todos);
    }

    return (
        <div className="border-t-2 border-b-2 border-indigo-200 pt-5 mt-10">
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit}>
                    <input
                        className="p-1 rounded"
                        id="inputTodo"
                        type="text"
                        placeholder="Todo"
                    />
                    <input
                        className="border border-indigo-600 rounded-full px-2 bg-indigo-200 text-indigo-800 ml-3"
                        type="submit"
                        value="Add"
                    />
                </form>
            </div>
            <div className="flex items-center justify-center m-10">
                <ul className="flex flex-col items-center">
                    <h3 className="text-2xl font-extrabold">Task</h3>
                    {todos.map((todo: any) => (
                        <li className="flex w-96 bg-indigo-700 text-indigo-100 items-center justify-between my-1 border border-indigo-800 px-2 py-1 rounded">
                            <span className="text-xl capitalize">{todo}</span>
                            <span className="border border-indigo-600 rounded-full px-2 py-1 bg-indigo-800 text-indigo-100 hover:bg-indigo-600 hover:text-indigo-900 duration-200 cursor-pointer">
                                Dash
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PageContainer;
