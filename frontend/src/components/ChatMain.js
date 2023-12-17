import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { initDarkMode } from '../logic'; // Adjust the path based on your project structure

function ChatMain () {
    useEffect(() => {
        // Call your utility functions when the component mounts
        initDarkMode();

        // You can call other utility functions here if needed
    }, []);
  return (
    <main className="main-content h-100vh chat-app mt-0 flex w-full flex-col">
        {/* <!-- Chat Header --> */}
      <div
        class="chat-header relative z-10 flex h-[61px] w-full shrink-0 items-center justify-between border-b border-slate-150 bg-white px-[calc(var(--margin-x)-.5rem)] shadow-sm transition-[padding,width] duration-[.25s] dark:border-navy-700 dark:bg-navy-800">
        <div class="flex items-center space-x-5">
          <div class="ml-1 h-7 w-7">
            <button
              class="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div data-toggle="drawer" data-target="#chat-detail"
            class="flex cursor-pointer items-center space-x-4 font-inter">
            <div class="avatar">
              <img class="rounded-full" src="images/200x200.png" alt="avatar" />
            </div>
            <div>
              <p class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                Konnor Guzman
              </p>
              <p class="mt-0.5 text-xs">Last seen recently</p>
            </div>
          </div>
        </div>

        <div class="-mr-1 flex items-center">
          <button
            class="darkmode-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" class="darkmode-moon h-6 w-6 text-amber-400" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="darkmode-sun h-6 w-6 text-amber-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd" />
            </svg>
          </button>

          <div id="chat-menu" class="inline-flex">
            <button
              class="popper-ref btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>

            <div class="popper-root">
              <div
                class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                <ul>
                  <li>
                    <NavLink to="#"
                      class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="mt-px h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          clip-rule="evenodd" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                      <span>Unmute</span></NavLink>
                  </li>
                  <li>
                    <NavLink to="#"
                      class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="mt-px h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                      <span>Block User</span></NavLink>
                  </li>
                  <li>
                    <NavLink to="#"
                      class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span> Delete chat</span></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Chat body --> */}
      <div
        class="scrollbar-sm grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]">
        <div class="space-y-5">
          <div class="mx-4 flex items-center space-x-3">
            <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            <p>Sunday</p>
            <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          </div>

          <div class="flex items-start space-x-2.5 sm:space-x-5">
            <div class="avatar">
              <img class="rounded-full" src="images/200x200.png" alt="avatar" />
            </div>

            <div class="flex flex-col items-start space-y-3.5">
              <div class="mr-4 max-w-lg sm:mr-10">
                <div
                  class="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100">
                  Hello My Dear. Lorem ipsum dolor sit amet, consectetur.
                </div>
                <p class="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300">
                  08:16
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-start justify-end space-x-2.5 sm:space-x-5">
            <div class="flex flex-col items-end space-y-3.5">
              <div class="ml-4 max-w-lg sm:ml-10">
                <div
                  class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda necessitatibus, ratione. Voluptatum.
                </div>
              </div>
              <div class="ml-4 max-w-lg sm:ml-10">
                <div
                  class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white">
                  And that’s why a 15th century
                </div>
                <p class="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300">
                  08:16
                </p>
              </div>
            </div>
            <div class="avatar">
              <img class="rounded-full" src="images/200x200.png" alt="avatar" />
            </div>
          </div>


        </div>
      </div>
      
      {/* <!-- Chat replybox --> */}

      <div
        class="chat-footer relative flex align-baseline h-12 w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800">
        <div class="-ml-1.5 relative align-baseline flex flex-1 space-x-2">
          <div id="attach-box"
            class="absolute hidden left-0 bottom-0 transition transform ease-in-out delay-300 duration-300 z-50 w-64 rounded-lg border border-slate-150 bg-white/20 backdrop-blur shadow-soft dark:border-navy-600 dark:bg-navy-900/90">
            <div class="flex flex-col pt-2 pb-2">
              <NavLink to="#"
                class="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600">
                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-warning text-white">
                  <i class="fa-regular fa-file-lines"></i>
                </div>

                <h2
                  class="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                  Document
                </h2>
              </NavLink>

              <NavLink to="#"
                class="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600">
                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-info text-white">
                  <i class="fa-regular fa-images"></i>
                </div>

                <div>
                  <h2
                    class="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                    Images
                  </h2>

                </div>
              </NavLink>

              <NavLink to="#"
                class="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600">
                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-white">
                  <i class="fa-solid fa-video"></i>
                </div>

                <div>
                  <h2
                    class="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                    Videos
                  </h2>

                </div>
              </NavLink>

              <NavLink to="#"
                class="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600">
                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-error text-white">
                  <i class="fa-solid fa-store"></i>
                </div>

                <div>
                  <h2
                    class="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                    Catalog
                  </h2>
                </div>
              </NavLink>
            </div>
            <div class="flex items-start justify-start px-2">
              <button class="group flex items-center p-2 transition-all" id="close-attach-button">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-transparent border border-slate-600 dark:text-white hover:bg-white/50 hover:backdrop-blur-sm dark:border-slate-50/10">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </button>
            </div>
          </div>
          <button
            class="btn h-9 w-9 relative shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            id="attach-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>

          </button>

          <input type="text" class="form-input h-9 w-full bg-transparent placeholder:text-slate-400/70"
            placeholder="Write the message" />
        </div>

        <div class="-mr-1.5 flex">
          <button
            class="btn h-9 w-9 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button
            class="btn h-9 w-9 shrink-0 rounded-full p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  )
}

export default ChatMain