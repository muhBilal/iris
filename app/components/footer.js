const footer = () => {
    return (
        <footer className="bg-black text-white rounded-lg shadow dark:bg-gray-900 m-4 py-10">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-10 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/*<a href="#"*/}
                    {/*   className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">*/}
                    {/*    <img src="/assets/images/logo.png" className="h-8" alt="Flowbite Logo"/>*/}
                    {/*    <span*/}
                    {/*        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>*/}
                    {/*</a>*/}
                    <a href="#"
                       className={`flex gap-5 items-center text-lg font-semibold tracking-widest uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline text-white`}>
                        <img src="/assets/images/logo.png" alt="" className={`w-10`}/>
                        <p>
                            Iris Future
                        </p>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Bantuan</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Kontak</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2023 <a
                    href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default footer;