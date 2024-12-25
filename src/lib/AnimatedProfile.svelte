<script>
  const imgs = [
    'uwu.jpg',
    'honk.png',
    'mage.jpg',
    'oppie.jpg',
    'puter.jpg',
    'd2.jpg',
  ];

  const img = imgs[Math.floor(Math.random() * imgs.length)] ?? imgs[0]
</script>

<div class="z-10 relative aspect-square h-[220px] justify-center items-center flex">
    <div class="animate-rotate-rev absolute top-0 w-full h-full border-amber-300 border-[1px] border-dashed rounded-full"></div>
    <div class="absolute top-0 w-full h-full animate-rotate-f2">
      <div class="dot w-1 top-[-10px] left-1/2"></div>
    </div>
    <div class="absolute top-0 w-full h-full animate-rotate">
      <div class="dot w-2 left-[-22px] top-1/2"></div>
    </div>
    <div class="absolute top-0 w-full h-full animate-rotate-f1">
      <div class="dot w-1 right-[-30px] top-1/2"></div>
    </div>
    <img src={img} alt="main profile" class="aspect-square h-[200px] overflow-hidden object-cover rounded-full border-amber-300 border-4"/>
</div>

<style lang="postcss">
  img {
    animation: fadeIn 1.5s;
  }
  .dot {
    @apply aspect-square bg-amber-300 rounded-full absolute;
  }

  .animate-rotate {
    animation: rotate 150s linear infinite;
  }
  
  .animate-rotate-rev {
    animation: rotate 150s ease-in infinite reverse;
  }

  .animate-rotate-f1 {
    animation: rotate calc(0.7 * 150s) linear infinite reverse;
  }

  .animate-rotate-f2 {
    animation: rotate calc(0.4 * 150s) linear infinite;
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