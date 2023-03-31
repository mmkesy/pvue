<script setup>
  window.scrollTo(0, 0);
</script>

<template>
    <main class="mx-auto max-w-4xl">
        <section
          id="hero"
          class="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
        >
          <article class="sm:w-1/2">
            <h2
              class="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl"
            >
              We Boldy Go
              <span class="text-indigo-700 dark:text-indigo-300"
                >Where No Rocket</span
              >
              Has Gone Before...
            </h2>
            <p
              class="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left"
            >
              We're building rockets for the next century today. From the moon to
              Mars, Jupiter and beyond...
            </p>
            <p
              class="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left"
            >
              Think Acme Rockets.
            </p>
          </article>
          <img class="w-1/2" src="/src/img/rocketdab.png" alt="Rocket Dab" />
        </section>
    </main>
</template>
