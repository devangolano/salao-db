<template>
    <div class="bg-[#64191b] px-6 py-6">
        <div class="container mx-auto flex items-center justify-between">
            <h1 class="md:w-2/6 cursor-pointer font-extrabold text-lg lg:text-2xl font-serif text-white"
                aria-label="Doubble B">
                DB Hair Therapy
            </h1>
            <ul class="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                    <RouterLink to="/"
                        class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        Principal</RouterLink>
                </li>
                <li>
                    <RouterLink to="/servicos"
                        class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        Serviços</RouterLink>
                </li>
                <li>
                    <RouterLink to="/agendar"
                        class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        Agendar</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sobre"
                        class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        Sobre</RouterLink>
                </li>
            </ul>

            <div class="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div class="hidden lg:flex items-center">
                    <button @click="search = !search" aria-label="search items"
                        class="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                        <!-- SVG for search -->
                    </button>
                    <input v-if="search" id="searchInput" type="text" placeholder="search"
                        class="text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1" />
                </div>
                <div class="hidden lg:flex items-center space-x-4 xl:space-x-8">
                    <button aria-label="view favourites"
                        class="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                        <!-- SVG for favourites -->
                    </button>
                    <button aria-label="go to cart"
                        class="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                        <!-- SVG for cart -->
                    </button>
                </div>

                <div class="flex lg:hidden">
                    <button aria-label="show options" @click="search = !search"
                        class="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                        <!-- SVG for options -->
                    </button>

                    <button aria-label="open menu" @click="menu = true"
                        class="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                        <!-- SVG for menu -->
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- For small screen -->
    <div id="mobile-menu" v-if="menu"
        class="absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex flex-col h-screen w-full">
        <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
            <!-- Search input for mobile -->
        </div>
        <div class="mt-6 p-4">
            <ul class="flex flex-col space-y-6">
                <li>
                    <RouterLink to="/"
                        class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                        Principal
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/servicos"
                        class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                        Serviços
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/agendar"
                        class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                        Agendar
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/sobre"
                        class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                        Sobre
                    </RouterLink>
                </li>
            </ul>
            <div class="h-full flex">
                <ul class="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                    <li>
                        <a href="javascript:void(0)"
                            class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                            <div>
                                <svg class="fill-stroke" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                                        stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M1 5H21" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                                        stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p class="text-base">Pedidos</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"
                            class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                            <div>
                                <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p class="text-base">Gostos</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<div class="h-full flex">
    <ul class="flex  py-4 p-4">
        <li>
            <a href="javascript:void(0)"
                class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                <div>
                    <svg class="fill-stroke" width="22" height="22" viewBox="0 0 22 22"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M1 5H21" stroke="currentColor" stroke-width="1.25"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
<p class="text-base">Pedidos</p>
</a>
</li>
<li>
            <a href="javascript:void(0)"
                class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                <div>
                    <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <p class="text-base">Gostos</p>
            </a>
        </li>
</ul>
</div>