<script>
  import './app.css';
  import { calculateAge } from './lib/age';
  import AnimatedProfile, { getImageAuthorStr } from './lib/AnimatedProfile.svelte';
  import Social from './lib/Social.svelte';
  import { resetFocus } from './lib/Social.svelte';
</script>

<svelte:head>
  <link rel="preload" href="bg.jpg" as="image"/>
  <link rel="preload" href="bg-1.jpg" as="image"/>
  <link rel="preload" href="bg-2.jpg" as="image"/>
  <link rel="preload" href="bg-3.jpg" as="image"/>
  <link rel="preload" href="bg-4.jpg" as="image"/>
  <link rel="preload" href="bg-5.jpg" as="image"/>
</svelte:head>

<img src="bg.jpg" alt="" class="main-bg h-screen w-screen object-cover absolute z-0"/>
<div class="absolute h-screen w-screen z-10 bg-black/25"></div>
<main class="relative z-10 flex justify-center items-center min-h-screen">
  <div class="flex flex-col 2xl:flex-row items-center bg-neutral-700/40 rounded-xl w-full mx-4 py-8 2xl:py-16 2xl:px-8 gap-1">
    <div class="flex flex-col items-center gap-2 2xl:w-1/2">
      <AnimatedProfile/>
      <h1 class="z-20 text-3xl 2xl:text-5xl 2xl:py-6">Hi.yeena</h1>
      <div class="w-full h-0.5 bg-amber-300 my-1 2xl:hidden"></div>
      <div class="flex flex-col 2xl:flex-row gap-2 text-center">
        <p>🇵🇱 • ⏳ {calculateAge()} yo • ♂️ (he/him)</p>
      </div>
      <p>Music Producer & DJ</p>
    </div>
    <div
      class="flex flex-col 2xl:flex-row 2xl:justify-center gap-4 mt-2 2xl:mx-32 2xl:w-1/2 2xl:flex-grow"
      role="group"
      onmouseleave={resetFocus}
      onblur={resetFocus}
    >
      <Social bg="bg-2.jpg" name="Soundcloud" logo="sc.svg" link="https://soundcloud.com/hi-yeena"/>
      <Social bg="bg-1.jpg" name="Telegram" logo="tg.svg" link="https://t.me/RichardHyena"/>
      <Social bg="bg-3.jpg" name="Creative Channel" logo="channel.svg" link="https://t.me/richardattempts"/>
      <Social bg="bg-4.jpg" name="YouTube" logo="yt.svg" link="https://www.youtube.com/@HI-YEENA"/>
      <Social bg="bg-5.jpg" name="X (Twitter)" logo="x.svg" link="https://x.com/richard_yeen"/>
    </div>
  </div>
  <footer class="absolute bottom-0 p-2 text-sm text-center">
    <p>{getImageAuthorStr()}, 2024-{new Date().getFullYear()}, by Richard</p>
  </footer>
</main>

<style lang="postcss">
  .main-bg {
    animation: fadeIn 1.5s;
  }
</style>