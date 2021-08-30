import { useRouter } from 'next/router';

const Menu = () => {
    const router = useRouter();

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-gray-500">
            <div className="flex items-center flex-shrink-0 text-gray-200 mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span className="font-semibold text-xl tracking-tight">Cyurs Blog 博客</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a onClick={() => router.push('/')} style={{ cursor: 'pointer' }} className="text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 duration-300">
                        Home
                    </a>
                    <a href="https://github.com/cyrusxzw" target='_blank' rel='noreferrer' className="text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 duration-300">
                        Github
                    </a>
                    <a href='https://www.linkedin.com/in/zengwei-xu-4b8648123' target='_blank' rel='noreferrer' className="text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white duration-300">
                        Linkedin
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Menu;