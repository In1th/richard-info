<script>
  import './app.css';
  import { calculateAge } from './lib/age';
    import AnimatedProfile from './lib/AnimatedProfile.svelte';
  import Social from './lib/Social.svelte';
</script>

<img src="bg.jpg" alt="" class="main-bg h-screen w-screen object-cover absolute z-0"/>
<div class="absolute h-screen w-screen z-10 bg-black/25"></div>
<main class="relative z-10 flex justify-center items-center min-h-screen">
  <div class="flex flex-col justify-center items-center bg-neutral-700/40 rounded-xl w-full mx-4 py-8 gap-2">
    <AnimatedProfile/>
    <h1 class="z-20 text-3xl">Richard Hyena</h1>
    <div class="w-1/2 h-0.5 bg-amber-300 my-2"></div>
    <p>PL • {calculateAge()} • male (he/him)</p>
    <p>gay • engaged</p>
    <div class="flex flex-col gap-4 mt-2">
      <Social bg="bg-2.jpg" name="About me" logo="info.svg" link="https://t.me/aboutrichardhyena"/>
      <Social bg="bg-1.jpg" name="Telegram" logo="tg.svg" link="https://t.me/RichardHyena"/>
      <Social bg="bg-3.jpg" name="Creative Channel" logo="palette.svg" link="https://t.me/richardattempts"/>
      <Social bg="bg-4.jpg" name="Github" logo="github.svg" link="https://github.com/In1th"/>
      <Social bg="bg-5.jpg" name="Bluesky" logo="bluesky.svg" link="https://bsky.app/profile/richardhyena.bsky.social"/>
    </div>
  </div>
  <footer class="absolute bottom-0 p-2">2024, by Richard</footer>
</main>

<style lang="postcss">
  .main-bg {
    animation: fadeIn 1.5s;
  }
</style>