<script>
  import './app.css';
    import Social from './Social.svelte';

  const imgs = [
    'uwu.jpg',
    'honk.png',
    'mage.jpg',
    'oppie.jpg',
    'puter.jpg',
    'd2.jpg',
  ];

  const img = $state(imgs[Math.floor(Math.random() * imgs.length)])
  // const img = 'uwu.jpg';
</script>

<img src="bg.jpg" alt="" class="h-screen w-screen object-cover opacity-75 absolute z-0"/>
<main class="relative z-10 flex justify-center items-center min-h-screen">
  <div class="flex flex-col justify-center items-center bg-neutral-700/40 rounded-xl w-full mx-4 py-8 gap-2">
    <div class="relative aspect-square h-[220px] justify-center items-center flex">
      <div class="animate-rotate absolute top-0 w-full h-full border-amber-300 border-[1px] border-dashed rounded-full"></div>
      <img src={img} alt="main profile" class="aspect-square h-[200px] overflow-hidden object-cover rounded-full border-amber-300 border-4"/>
      <div class="absolute top-0 w-full h-full">
        <div class="dot right-[-20px] top-1/2"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <h1 class="text-3xl">Richard Hyena</h1>
    <div class="w-1/2 h-0.5 bg-amber-300 my-2"></div>
    <p>male, he/hi, gay, 23, engaged</p>
    <div class="flex flex-col gap-4 mt-2">
      <Social name="Telegram" logo="tg.svg" link="https://t.me/RichardHyena"/>
      <Social name="About me" logo="info.svg"/>
      <Social name="Creative Channel" logo="palette.svg"/>
      <Social name="Github" logo="github.svg"/>
      <Social name="Bluesky" logo="bluesky.svg"/>
    </div>
  </div>
  <footer class="absolute bottom-0 p-2">2024, by Richard</footer>
</main>

<style lang="postcss">
  .dot {
    @apply w-2 h-2 bg-amber-300 rounded-full absolute;
  }

  .animate-rotate {
    animation: rotate 150s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>