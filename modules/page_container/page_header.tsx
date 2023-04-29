import React from "react";

const PageHeader = () => {
    return (
        <div className="flex justify-between bg-indigo-200 py-2 px-10">
            <h2>Titre de l'article</h2>
            <ul className="flex justify-end">
                <li
                    className="px-5
                        rounded
                        hover:bg-indigo-500 hover:text-indigo-50
                        duration-300 cursor-pointer"
                >
                    Article
                </li>
                <li
                    className="px-5
                        rounded
                        hover:bg-indigo-500 hover:text-indigo-50
                        duration-300 cursor-pointer"
                >
                    Download
                </li>
            </ul>
        </div>
    );
};

export default PageHeader;
