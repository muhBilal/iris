'use client';
import {useEffect, useState} from 'react';
import ButtonPrimary from "@/app/components/button/buttonPrimary";

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const pathName = window.location.pathname;
        if (pathName !== '/' && !visible) {
            setVisible(true)
            return;
        }
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {

    }, []);
    return (
        <section className="antialiased py-5 px-3 md:px-32 fixed w-full mb-20 z-50">
            <div className={`w-full rounded-md ${visible ? 'shadow-md bg-white text-white md:text-black' : 'text-white'}`}>
                <div
                    className="py-2 rounded-md flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 bg-gray-900 md:bg-transparent ">
                    <div className="flex flex-row items-center justify-between p-4">
                        <a href="#"
                           className={`flex gap-5 items-center text-lg font-semibold tracking-widest uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline ${visible ? 'text-gray-900' : 'text-white'}`}>
                            <img src="/assets/images/logo.png" alt="" className={`w-10`}/>
                            <p>
                                Iris Future
                            </p>
                        </a>
                        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                                onClick={() => setOpen(!open)}>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                {(open ? (
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                ) : (
                                    <path fillRule="evenodd"
                                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                          clipRule="evenodd"></path>
                                ))}
                            </svg>
                        </button>
                    </div>
                    <nav
                        className={`flex-col gap-10 flex-grow font-poppins mr-10 items-center ${open ? 'flex' : 'hidden'} pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                        <div className={`group flex-col justify-center`}>
                            <a href="/" className={`text-sm`}>Beranda</a>
                            <div
                                className={`group-hover:border-orange border-b-2 mt-2 w-1/3 mx-auto border-transparent`}></div>
                        </div>
                        <div className={`group flex-col justify-center`}>
                            <a href="#" className={`text-sm`}>Layanan</a>
                            <div
                                className={`group-hover:border-orange border-b-2 mt-2 w-1/3 mx-auto border-transparent`}></div>
                        </div>
                        <div className={`group flex-col justify-center`}>
                            <a href="/about" className={`text-sm`}>Tentang Kami</a>
                            <div
                                className={`group-hover:border-orange border-b-2 mt-2 w-1/3 mx-auto border-transparent`}></div>
                        </div>
                        <div className={`group flex-col justify-center`}>
                            <a href="#" className={`text-sm`}>Halaman</a>
                            <div
                                className={`group-hover:border-orange border-b-2 mt-2 w-1/3 mx-auto border-transparent`}></div>
                        </div>
                        <div className={`group flex-col justify-center`}>
                            <a href="/faq" className={`text-sm`}>FAQ</a>
                            <div className={`group-hover:border-b-2 mt-2 w-1/3 mx-auto border-orange`}></div>
                        </div>
                        <div className={`group flex-col justify-center`}>
                            <ButtonPrimary text="Kontak" className={`mr-10`}/>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
