<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="sticky top-0 z-10 bg-teal-700 text-white">
        <section class="mx-auto flex max-w-4xl items-center justify-between p-4">
          <h1 class="text-3xl font-medium">
            <!-- <a href="#hero">🚀 Acme Rockets</a> -->
            <RouterLink to="/">🚀 Home</RouterLink>
          </h1>
          <div>
            <button
              id="hamburger-button"
              class="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            >
              <!-- &#9776; -->
              <div
                class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"
              ></div>
            </button>
            <nav class="hidden space-x-8 text-xl md:block" aria-label="main">
              <!-- <a href="#rockets" class="hover:opacity-90">Our Rockets</a> -->
              <RouterLink to="/rockets" class="hover:opacity-90">Our rockets</RouterLink>
              <!-- <a href="#testimonials" class="hover:opacity-90">Testimonials</a> -->
              <RouterLink to="/testimonials" class="hover:opacity-90">Testimonials</RouterLink>
              <!-- <a href="#contact" class="hover:opacity-90">Contact Us</a> -->
              <RouterLink to="/contactus" class="hover:opacity-90">Contact us</RouterLink>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          class="top-68 justify-content-center absolute hidden w-full origin-top animate-open-menu flex-col bg-black text-5xl"
        >
          <!-- <button class="text-8xl self-end px-6">
                  &times;
              </button> -->
          <nav
            class="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
          >
            <!-- <a href="#hero" class="w-full py-6 text-center hover:opacity-90"
              >Home</a
            > -->
            <RouterLink to="/" class="w-full py-6 text-center hover:opacity-90">Home</RouterLink>
            <!-- <a href="#rockets" class="w-full py-6 text-center hover:opacity-90"
              >Our Rockets</a
            > -->
            <RouterLink to="/rockets" class="w-full py-6 text-center hover:opacity-90">Our rockets</RouterLink>
            <!-- <a
              href="#testimonials"
              class="w-full py-6 text-center hover:opacity-90"
              >Testimonials</a
            > -->
            <RouterLink to="/testimonials" class="w-full py-6 text-center hover:opacity-90">Testimonials</RouterLink>
            <!-- <a href="#contact" class="w-full py-6 text-center hover:opacity-90"
              >Contact Us</a
            > -->
            <RouterLink to="/contactus" class="w-full py-6 text-center hover:opacity-90">Contact us</RouterLink>
            <!-- <a href="#footer" class="w-full py-6 text-center hover:opacity-90"
              >Legal</a 
            >-->
            <!-- <RouterLink to="/legal" class="w-full py-6 text-center hover:opacity-90">Legal</RouterLink> -->
          </nav>
        </section>
    </header>
    <RouterView />
    <footer id="footer" class="bg-teal-700 text-xl text-white">
        <section
          class="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between"
        >
          <address>
            <h2>Acme Rocket-Powered Products, Inc.</h2>
            555 Astro Way<br />
            Fairfield, New Jersey 12345-5555<br />
            Email:
            <a href="mailto:inquiries@acmerockets.com">Inquires@AcmeRockets.com</a
            ><br />
            Phone: <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
          <nav class="hidden flex-col gap-2 md:flex" aria-label="footer">
            <a href="#rockets" class="hover:opacity-90">Our Rockets</a>
            <a href="#testimonials" class="hover:opacity-90">Testimonials</a>
            <a href="#contact" class="hover:opacity-90">Contact Us</a>
          </nav>
          <div class="flex flex-col sm:gap-2">
            <p class="text-right">Copyright &copy; <span id="year">2022</span></p>
            <p class="text-right">All Rights Reserved</p>
          </div>
        </section>
    </footer>
</template>
