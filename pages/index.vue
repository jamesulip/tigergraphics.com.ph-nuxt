<template>
    <div class="relative bg-white  ">
        <div class="mx-auto max-w-5xl">
            <div class="relative z-10 lg:w-full lg:max-w-2xl">
                <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                    viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="0,0 90,0 50,100 0,100" />
                </svg>
                <div class="relative px-6 pt-6 lg:pl-8 lg:pr-0">
                    <nav class="flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img alt="Your Company" class="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=600">
                        </a>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden">
                            <span class="sr-only">Open main menu</span>
                            <!-- Heroicon name: outline/bars-3 -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <div class="hidden lg:ml-12 lg:block lg:space-x-14">
                            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>

                            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>

                            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>

                            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>

                        </div>
                    </nav>
                    <!-- Mobile menu, show/hide based on menu open state. -->
                </div>

                <div class="relative py-32 px-6 sm:py-28 lg:py-28 lg:px-8 lg:pr-0">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">

                        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">ABOUT US</h1>
                        <p class="mt-6 text-lg leading-8 text-gray-600">TIGERGRAPHICS, established in 2006, began as a
                            print shop specializing in high-quality wide format prints for both indoor and outdoor use.
                            Over the years, the company has evolved into a full-service solutions provider, offering a
                            diverse range of services for clients across industries. With a focus on innovation,
                            TIGERGRAPHICS has made significant advancements in the fields of advertising, interior
                            design, signage, and displays.
                        </p>
                        <br>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            At TIGERGRAPHICS, our dedicated team is committed to delivering unparalleled customer
                            service, top-quality products, and ongoing product development. We believe that true success
                            lies in the combination of exceptional products and exceptional service, and we strive to
                            deliver both to each and every one of our valued customers.</p>
                        <!-- <div class="mt-10 flex items-center gap-x-6">
                            <a href="#"
                                class="rounded-md bg-yellow-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Get
                                started</a>
                            <a href="#" class="text-base font-semibold leading-7 text-gray-900">Learn more <span
                                    aria-hidden="true">→</span></a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="aspect-[1/2] object-contain lg:aspect-[1/2] lg:h-full lg:w-full" src="/images/m.jpg" alt="">
        </div>
    </div>
    <SectionsWallworks/>

</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>

</style>