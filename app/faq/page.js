import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export default function faq(){
  return (
      <main className={``}>
          <section className={`relative min-h-[40rem]`}>
              <div className={`absolute top-0 left-0 w-full h-[35rem] z-10 bg-blue-900 opacity-60`}></div>
              <div className={`absolute top-0 left-0 w-full h-[35rem] z-20 flex items-center justify-center`}>
                  <div className={`flex items-center justify-between w-full max-w-5xl text-center`}>
                      <h1 className={`text-4xl text-white font-bold`}>FAQ</h1>
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
                                         className="ms-1 text-sm font-medium text-white md:ms-2 dark:text-gray-400 dark:hover:text-white">Faq</a>
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

          <section className={`container`} >
              <div className={` font-poppins text-center max-w-2xl mx-auto`}>
                  <h5 className={`uppercase text-orange text-md`}>
                      Apa pertanyaan orang?
                  </h5>
                  <h1 className={`mt-7 font-bold text-4xl uppercase`}>
                      F.A.Q
                  </h1>
                  <div className={`border-b-2 border-orange w-32 mx-auto mt-10`}></div>
              </div>

              <div id="accordion-color" data-accordion="collapse"
                   data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white mt-10">
                  <h2 id="accordion-color-heading-1">
                      <button type="button"
                              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                              data-accordion-target="#accordion-color-body-1" aria-expanded="true"
                              aria-controls="accordion-color-body-1">
                          <span>Apa itu Iris Future?</span>
                          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M9 5 5 1 1 5"/>
                          </svg>
                      </button>
                  </h2>
                  <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
                      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                          <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iure..</p>
                          <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                              href="/docs/getting-started/introduction/"
                              className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start
                              developing websites even faster with components on top of Tailwind CSS.</p>
                      </div>
                  </div>
                  <h2 id="accordion-color-heading-2">
                      <button type="button"
                              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                              data-accordion-target="#accordion-color-body-2" aria-expanded="false"
                              aria-controls="accordion-color-body-2">
                          <span>Is there a Figma file available?</span>
                          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M9 5 5 1 1 5"/>
                          </svg>
                      </button>
                  </h2>
                  <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
                      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                          <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and
                              designed using the Figma software so everything you see in the library has a design
                              equivalent in our Figma file.</p>
                          <p className="text-gray-500 dark:text-gray-400">Check out the <a
                              href="https://flowbite.com/figma/"
                              className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based
                              on the utility classes from Tailwind CSS and components from Flowbite.</p>
                      </div>
                  </div>
                  <h2 id="accordion-color-heading-3">
                      <button type="button"
                              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                              data-accordion-target="#accordion-color-body-3" aria-expanded="false"
                              aria-controls="accordion-color-body-3">
                          <span>What are the differences between Flowbite and Tailwind UI?</span>
                          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M9 5 5 1 1 5"/>
                          </svg>
                      </button>
                  </h2>
                  <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
                      <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                          <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core
                              components from Flowbite are open source under the MIT license, whereas Tailwind UI is a
                              paid product. Another difference is that Flowbite relies on smaller and standalone
                              components, whereas Tailwind UI offers sections of pages.</p>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both
                              Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you
                              from using the best of two worlds.</p>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                              <li><a href="https://flowbite.com/pro/"
                                     className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                              <li><a href="https://tailwindui.com/" rel="nofollow"
                                     className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                          </ul>
                      </div>
                  </div>
              </div>

          </section>
      </main>
  );
}