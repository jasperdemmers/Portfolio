import {NavLink} from "react-router-dom";

const NoPage = () => {
    return (
        <div className="min-h-screen flex flex-grow items-center justify-center">
            <div className="rounded-lg bg-white dark:bg-secondary-light p-8 text-center shadow-xl">
                <h1 className="mb-4 text-4xl font-bold text-text-light dark:text-text-dark">404</h1>
                <p className="text-text-light dark:text-text-dark">Oops! The page you are looking for could not be found.</p>
                <NavLink
                    to={"/"}>
                    <a className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go
                        back to Home </a>
                </NavLink>
              </div>
        </div>
    )
}

export default NoPage