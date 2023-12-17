import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom';

function ChatSidebar() {
    let match = useRouteMatch();

    return (
        <div className="sidebar">
            <div class="sidebar-panel">
                <div class="flex h-full grow flex-col bg-white  dark:bg-gray-900">
                    {/* <!-- Sidebar Panel Header --> */}
                    <div class="flex h-18 w-full items-center justify-between pl-4 pr-1">
                        <div class="flex items-center">
                            <div class="avatar mr-3 hidden h-9 w-9 lg:flex">
                                <div
                                    class="is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-lg font-medium tracking-wider text-slate-800 line-clamp-1 dark:text-navy-100">
                                Chat
                            </p>
                        </div>

                        <button
                            class="sidebar-close btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Sidebar Panel Body --> */}
                    <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
                        <div>
                            <div id="history-slide" class="swiper px-4">
                            </div>
                        </div>

                        <div class="mt-4 flex px-4">
                            {/* <!-- Search Bar --> */}
                            <label class="relative mr-1.5 flex">
                                <input
                                    class="form-input peer h-8 w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 text-xs+ ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                                    placeholder="Search chats" type="text" />
                                <span
                                    class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-colors duration-200"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
                                    </svg>
                                </span>
                            </label>
                            <div class="inline-flex relative">
                                <button
                                    class="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                    id="chat-filter-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                            d="M22 6.5h-9.5M6 6.5H2M9 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22 17.5h-6M9.5 17.5H2M13 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                    </svg>
                                </button>
                                <div id="chat-filter" class="absolute w-80 hidden">
                                    <div
                                        class="popper-box w-80 rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                                        <ul>
                                            <li>
                                                <NavLink to="/"
                                                    class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                                    <i class="fa-regular fa-envelope-open"></i>
                                                    <span>Unread</span></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/"
                                                    class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                                    <i class="fa-solid fa-user-check"></i>
                                                    <span>Registered Customers</span></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/"
                                                    class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                                    <i class="fa-regular fa-user"></i>
                                                    <span>Unregistered Customers</span></NavLink>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto">


                            <div
                                class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600">
                                <div class="avatar h-10 w-10">
                                    <img class="rounded-full" src="images/200x200.png" alt="avatar" />
                                </div>
                                <div class="flex flex-1 flex-col">
                                    <div class="flex items-center justify-between space-x-1.5">
                                        <p class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                                            Anthony Jensen
                                        </p>
                                        <span class="text-tiny+ text-slate-400 dark:text-navy-300">Tue</span>
                                    </div>
                                    <div class="mt-1 flex items-center justify-between space-x-1">
                                        <p class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300">
                                            Excepteur sint occaecat cupidatat
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="flex h-12 shrink-0 justify-between border-t border-slate-150 px-1.5 py-1 dark:border-navy-600">


                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Minimized Sidebar Panel --> */}
            <div class="sidebar-panel-min">
                <div class="flex h-full flex-col bg-white dark:bg-gray-900">
                    <div class="flex h-18 shrink-0 items-center justify-center">
                        <div class="avatar flex h-10 w-10">
                            <div
                                class="is-initial is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light">
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
                        <div class="is-scrollbar-hidden flex grow flex-col overflow-y-auto">
                            <ul class="mt-2 flex flex-col items-center justify-center space-y-1">
                                <li>
                                    <NavLink to="/"
                                        class="btn h-10 w-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" stroke-width="1.5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </NavLink>
                                </li>
                            </ul>
                            <div class="my-4 mx-4 h-px shrink-0 bg-slate-200 dark:bg-navy-500"></div>
                            <div class="flex flex-col">
                                <div
                                    class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600">
                                    <div class="avatar h-10 w-10">
                                        <img class="rounded-full" src="images/200x200.png" alt="avatar" />
                                        <div
                                            class="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatSidebar