export default function faq(){
  return (
      <main className={``}>
          <section className={`relative min-h-[40rem]`}>
              <div className={`absolute top-0 left-0 w-full h-[35rem] z-10 bg-blue-900 opacity-60`}></div>
              <div className={`absolute top-0 left-0 w-full h-[35rem] z-20 flex items-center justify-center`}>
                  <div className={`flex items-center justify-between w-full max-w-5xl text-center`}>
                      <h1 className={`text-4xl text-white font-bold`}>About</h1>
                      <nav className="flex" aria-label="Breadcrumb">
                          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                              <li className="inline-flex items-center">
                                  <a href="#"
                                     className="inline-flex items-center text-sm font-medium text-white dark:text-gray-400 dark:hover:text-white">
                                      <svg className="w-3 h-3 me-2.5" aria-hidden="true"
                                           xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                          <path
                                              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                      </svg>
                                      Home
                                  </a>
                              </li>
                              <li>
                                  <div className="flex items-center">
                                      <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 9 4-4-4-4"/>
                                      </svg>
                                      <a href="#"
                                         className="ms-1 text-sm font-medium text-white md:ms-2 dark:text-gray-400 dark:hover:text-white">About</a>
                                  </div>
                              </li>

                          </ol>
                      </nav>
                  </div>
              </div>
              <div className={`absolute top-0 left-0 w-[99vw] h-[35rem] flex z-0`}>
                  <img
                      src="/assets/images/about-1.jpg"
                      alt=""
                      className={`object-cover w-full h-full`}
                      style={{
                          width: '100vw',
                      }}
                  />
              </div>
          </section>

          <section className={`container mt-10`}>
              <div className={`flex items-center gap-10`}>
                  <div className={`w-1/2`}>
                      <img src="/assets/images/about.jpg" alt=""/>
                  </div>
                  <div className={`w-1/2 text-start font-poppins`}>
                      <h5 className={`uppercase text-orange text-md font-bold`}>
                          Tentang Iris
                      </h5>
                      <h1 className={`font-bold text-4xl capitalize mt-5`}>
                          perusahaan inovatif di bidang pendidikan
                      </h1>
                      <p className={`text-gray-700 font-rubik mt-10`}>
                          IRIS Future Forge adalah perusahaan inovatif di bidang pendidikan yang menonjolkan diri melalui platform bimbingan belajar online, AsahOtak. Dengan fokus pada persiapan ujian UTBK-SNBT, IRIS Future Forge tidak hanya memberikan layanan pendidikan berkualitas, tetapi juga berperan aktif dalam proyek-proyek sosial seperti IRIS Scholarship, College Life, Bright Smile Project, dan It's Friday. Sebagai perusahaan yang peduli pada pendidikan dan masyarakat, IRIS Future Forge menciptakan dampak positif melalui berbagai inisiatifnya.
                      </p>
                  </div>
              </div>
          </section>
      </main>
  );
}