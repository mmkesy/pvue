<script setup>
  window.scrollTo(0, 0);
</script>

<template>
    <main class="mx-auto max-w-4xl">
        <section
          id="contact"
          class="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
        >
          <h2
            class="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl"
          >
            Contact Us
          </h2>
          <form
            action=""
            class="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
          >
            <label for="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              minlength="3"
              maxlength="60"
              placeholder="Your Subject"
              class="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
            />
            <label for="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
              class="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
            ></textarea>
            <button
              class="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none"
            >
              Submit
            </button>
          </form>
        </section>
    </main>
</template>
