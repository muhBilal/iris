'use client';

import ButtonPrimary from "@/app/components/button/buttonPrimary";
import ButtonOutline from "@/app/components/button/buttonOutline";
import {FaBuilding, FaEnvelopeOpen, FaListNumbered} from "react-icons/fa";
import {FaLightbulb, FaListOl, FaCertificate, FaHeart, FaBook} from 'react-icons/fa';
import {IoMdPeople} from "react-icons/io";


export default function Home() {
    const companyValues = [
        {
            title: "Inovasi",
            desc: "Mengadopsi pendekatan kreatif dan solusi inovatif untuk merespons kebutuhan pendidikan yang berkembang.",
            icon: <FaLightbulb/>
        },
        {
            title: "Keterbukaan",
            desc: "Menciptakan lingkungan yang inklusif, menerima berbagai perspektif, dan mempromosikan keberagaman.",
            icon: <FaLightbulb/>
        },
        {
            title: "Integritas",
            desc: "Berkomitmen pada kejujuran, etika, dan transparansi dalam setiap aspek bisnis dan interaksi.",
            icon: <FaLightbulb/>
        },
        {
            title: "Kepedulian",
            desc: "Memahami dan meresapi kebutuhan masyarakat serta berkontribusi pada kesejahteraan melalui proyek sosial.",
            icon: <FaLightbulb/>
        },
        {
            title: "Pendidikan Berkualitas",
            desc: "Meneguhkan komitmen terhadap penyediaan layanan pendidikan terbaik dan pemahaman yang mendalam.",
            icon: <FaLightbulb/>
        }
    ];

    return (
        <main className={`pb-32`}>
            <section className={`relative h-screen`}>
                <div className={`absolute top-0 left-0 w-full h-full z-10 bg-blue-900 opacity-60`}
                     style={{
                         borderBottomLeftRadius: '83rem 10rem',
                         borderBottomRightRadius: '83rem 10rem',
                     }}
                ></div>
                <div className={`absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center`}>
                    <div className={`flex flex-col items-center max-w-2xl text-center px-4 md:px-0`}>
                        <h1 className={`text-4xl font-bold text-white font-poppins`}>Mulai Perjalanan Menuju Kesuksesan
                            dengan
                            AsahOtak.</h1>
                        <p className={`text-xl text-white mt-5 font-rubik`}>Jelajahi Masa Depan Pendidikan dengan
                            AsahOtak. Setiap langkah merupakan jalan menuju kesuksesan yang lebih besar.</p>
                        <div className={`flex gap-3 mt-5`}>
                            <ButtonPrimary text="Mulai"/>
                            <ButtonOutline text="Hubungi Kami"/>
                        </div>
                    </div>
                </div>
                <div className={`absolute top-0 left-0 w-[49.6vw] h-full flex z-0`}>
                    <img
                        src="/assets/images/01.jpg"
                        alt=""
                        className={`object-cover h-full`}
                        style={{
                            width: '50vw',
                            borderBottomLeftRadius: '83rem 10rem',
                        }}
                    />
                    <img
                        src="/assets/images/03.jpg"
                        alt=""
                        className={`object-cover h-full`}
                        style={{
                            width: '50vw',
                            borderBottomRightRadius: '83rem 10rem',
                        }}
                    />
                </div>
            </section>

            <section className={`mt-36 px-4 md:px-0`}>
                <div className={` font-poppins text-center max-w-2xl mx-auto`}>
                    <h5 className={`uppercase text-orange text-xl`}>
                        Filosofi Iris
                    </h5>
                    <h1 className={`mt-3 font-bold text-3xl`}>Membangun Masa Depan yang Lebih Baik</h1>
                    <p className={`font-rubik mt-5 text-gray-500`}>
                        Iris Future merupakan platform pendidikan yang bertujuan untuk membantu siswa dalam
                        mengembangkan potensi diri dan menemukan minatnya di bidang pendidikan.
                    </p>
                </div>

                {/*card*/}
                <div>
                    <div
                        className={`flex flex-wrap gap-5 max-w-5xl justify-center mx-auto mt-10`}>
                        {companyValues.map((value, index) => (
                            <div key={index}
                                 className="group max-w-xs py-10 px-16 text-center bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
                                 hover:shadow-xl">
                                {/*<div dangerouslySetInnerHTML={{__html: value.icon}}/>*/}
                                <div className={``}>
                                    <FaLightbulb size={100} className={`mx-auto text-orange bg-gray-100 rounded-full p-5
                                    group-hover:text-white group-hover:bg-orange transition-all duration-700`}/>
                                </div>
                                <a href="#">
                                    <h5 className="mb-5 mt-10 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {value.title}
                                    </h5>
                                </a>
                                <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/*manual*/}
                {/*<div className="flex flex-wrap justify-center">*/}
                {/*    /!* Card 1 *!/*/}
                {/*    <div*/}
                {/*        className="max-w-xs py-10 px-16 text-center bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">*/}
                {/*        /!*<div><FaLightbulb/></div>*!/*/}
                {/*        <a href="#">*/}
                {/*            <h5 className="mb-5 mt-10 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">*/}
                {/*                Inovasi*/}
                {/*            </h5>*/}
                {/*        </a>*/}
                {/*        <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">*/}
                {/*            Mengadopsi pendekatan kreatif dan solusi inovatif untuk merespons kebutuhan pendidikan yang*/}
                {/*            berkembang.*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    /!* Card 2 *!/*/}
                {/*    <div*/}
                {/*        className="max-w-xs py-10 px-16 text-center bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">*/}
                {/*        /!*<div><FaListNumbered/></div>*!/*/}
                {/*        <a href="#">*/}
                {/*            <h5 className="mb-5 mt-10 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">*/}
                {/*                Keterbukaan*/}
                {/*            </h5>*/}
                {/*        </a>*/}
                {/*        <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">*/}
                {/*            Menciptakan lingkungan yang inklusif, menerima berbagai perspektif, dan mempromosikan*/}
                {/*            keberagaman.*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    /!* Card 3 *!/*/}
                {/*    <div*/}
                {/*        className="max-w-xs py-10 px-16 text-center bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">*/}
                {/*        /!*<div><FaCertificate/></div>*!/*/}
                {/*        <a href="#">*/}
                {/*            <h5 className="mb-5 mt-10 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">*/}
                {/*                Integritas*/}
                {/*            </h5>*/}
                {/*        </a>*/}
                {/*        <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">*/}
                {/*            Berkomitmen pada kejujuran, etika, dan transparansi dalam setiap aspek bisnis dan interaksi.*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    /!* Card 4 *!/*/}
                {/*    <div*/}
                {/*        className="max-w-xs py-10 px-16 text-center bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">*/}
                {/*        /!*<div><FaHeart/></div>*!/*/}
                {/*        <a href="#">*/}
                {/*            <h5 className="mb-5 mt-10 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">*/}
                {/*                Kepedulian*/}
                {/*            </h5>*/}
                {/*        </a>*/}
                {/*        <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">*/}
                {/*            Memahami dan meresapi kebutuhan masyarakat serta berkontribusi pada kesejahteraan melalui*/}
                {/*            proyek sosial.*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    /!* Card 5 *!/*/}
                {/*    <div*/}
                {/*        className="max-w-xs py-10 px-16 text-center bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">*/}
                {/*        /!*<div><FaBook/></div>*!/*/}
                {/*        <a href="#">*/}
                {/*            <h5 className="mb-5 mt-10 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">*/}
                {/*                Pendidikan Berkualitas*/}
                {/*            </h5>*/}
                {/*        </a>*/}
                {/*        <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">*/}
                {/*            Meneguhkan komitmen terhadap penyediaan layanan pendidikan terbaik dan pemahaman yang*/}
                {/*            mendalam.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </section>

            <section className={`container mt-36 px-4 md:px-0`}>
                <div className={`flex flex-col items-center gap-16 md:flex-row justify-between`}>
                    <div className={`w-full md:w-1/2`}>
                        <img src="/assets/images/visualisasi-1.jpg"
                             className="rounded-tr-0 rounded-br-0 md:rounded-tr-[6rem] md:rounded-br-[6rem] h-[30rem]"/>
                    </div>
                    <div className={`w-full md:w-1/2 max-w-2xl flex items-center flex-col h-full`}>
                        <h1 className={`font-poppins font-semibold text-3xl`}>Asah Otak, pelopor transformasi pendidikan
                            di Indonesia! </h1>
                        <p className={`font-rubik text-gray-00 mt-10 max-w-2xl `}>
                            Siapkan dirimu untuk sukses dalam ujian UTBK-SNBT dengan AsahOtak, platform bimbingan
                            belajar online terbaik. Dengan kurikulum berkualitas tinggi dan tutor berpengalaman, kami
                            membantu siswa meraih kesuksesan akademis. Ayo, wujudkan impianmu bersama AsahOtak!
                        </p>
                        <div className={`mt-10 flex items-start justify-start w-full`}>
                            <ButtonPrimary text="Mulai Belajar"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`container mt-36 px-4 md:px-0`}>
                <div className={`flex flex-col items-center gap-16 md:flex-row-reverse justify-between`}>
                    <div className={`w-full md:w-1/2 `}>
                        <img src="/assets/images/misi.jpg" className="h-[30rem]"/>
                    </div>
                    <div className={`w-full md:w-1/2  h-full`}>
                        <h1 className={`font-poppins font-semibold text-3xl text-start`}>Misi Iris Future </h1>
                        <div className={`font-rubik mt-10 flex flex-col gap-5`}>
                            <div className={`flex items-center gap-10`}>
                                <div className={`bg-purple-200 rounded-full p-6`}>
                                    <FaBook className={`font-orange bg-purple-200 text-3xl`}/>
                                </div>
                                <div>
                                    <h1 className={`font-semibold text-xl`}>Pendidikan Berkualitas tinggi</h1>
                                    <p className={`text-gray-700 mt-4`}>
                                        Memberikan akses pendidikan berkualitas tinggi melalui platform online,
                                        AsahOtak,
                                        untuk membantu siswa meraih kesuksesan dalam ujian UTBK-SNBT.
                                    </p>
                                </div>
                            </div>
                            <div className={`flex items-center gap-10`}>
                                <div className={`bg-purple-200 rounded-full p-6`}>
                                    <IoMdPeople className={`font-orange bg-purple-200 text-3xl`}/>
                                </div>
                                <div>
                                    <h1 className={`font-semibold text-xl capitalize`}>Menginspirasi generasi muda</h1>
                                    <p className={`text-gray-700 mt-4`}>
                                        Menginspirasi dan memberdayakan siswa melalui IRIS Scholarship, memberikan peluang beasiswa bagi mereka yang berpotensi.
                                    </p>
                                </div>
                            </div>
                            <div className={`flex items-center gap-10`}>
                                <div className={`bg-purple-200 rounded-full p-6`}>
                                    <FaBuilding className={`font-orange bg-purple-200 text-3xl`}/>
                                </div>
                                <div>
                                    <h1 className={`font-semibold text-xl`}>Pendidikan Berkualitas tinggi</h1>
                                    <p className={`text-gray-700 mt-4`}>
                                        Menginspirasi dan memberdayakan siswa melalui IRIS Scholarship, memberikan
                                        peluang
                                        beasiswa
                                        bagi mereka yang berpotensi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*testimonial*/}
            <section className={`mt-36`}>
                <div className={` font-poppins text-center max-w-2xl mx-auto`}>
                    <h5 className={`uppercase text-orange text-xl`}>
                        Apa Kata Mereka?
                    </h5>
                    <h1 className={`mt-7 font-bold text-5xl uppercase`}>
                        Ulasan Kami
                    </h1>
                    <div className={`border-b-2 border-orange w-32 mx-auto mt-10`}></div>
                </div>

                {/*card*/}
                <div className={`flex flex-wrap justify-center mt-24 gap-10`}>
                    <div>
                        <div className={`bg-blue-50 p-5 max-w-96`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, maiores!
                        </div>
                        <div className={`flex flex-col justify-center items-center mt-24 w-full`}>
                            <img src="/assets/images/user01.jpg" alt="" className={`w-[5rem] h-[5rem] rounded-full `}/>
                            <h1 className={`text-orange`}>Alex</h1>
                            <p>Mahasiswa</p>
                        </div>
                    </div>
                    <div>
                        <div className={`bg-blue-50 p-5 max-w-96`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, maiores!
                        </div>
                        <div className={`flex flex-col justify-center items-center mt-24 w-full`}>
                            <img src="/assets/images/user01.jpg" alt="" className={`w-[5rem] h-[5rem] rounded-full `}/>
                            <h1 className={`text-orange`}>Alex</h1>
                            <p>Mahasiswa</p>
                        </div>
                    </div>
                    <div>
                        <div className={`bg-blue-50 p-5 max-w-96`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, maiores!
                        </div>
                        <div className={`flex flex-col justify-center items-center mt-24 w-full`}>
                            <img src="/assets/images/user01.jpg" alt="" className={`w-[5rem] h-[5rem] rounded-full `}/>
                            <h1 className={`text-orange`}>Alex</h1>
                            <p>Mahasiswa</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
