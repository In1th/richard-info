<script module>
  const imgs = [
    {href: 'uwu.jpg', author: ''},
    {href:'honk.jpg', author: '@partydog365'},
    {href:'mage.jpg', author: '@Waro_Soulmate'},
    {href:'oppie.jpg', author: '@NetSushi'},
    {href:'puter.jpg', author: '@NetSushi'},
    {href:'d2.jpg', author: '@partydog365'},
  ];

  const {href, author} = $state(imgs[Math.floor(Math.random() * imgs.length)] ?? imgs[0]);
  
  export let getImageAuthorStr = () => {
    if (!author) return '';

    return `art by ${author} on TG`;
  };
</script>

<svelte:head>
  {#each imgs as {href}}
     <link rel="preload" href={href} as="image"/>
  {/each}
</svelte:head>

<div class="z-10 relative aspect-square h-[220px] 2xl:h-[400px] justify-center items-center flex">
    <div class="animate-rotate-rev absolute top-0 w-full h-full border-amber-300 border-[1px] border-dashed rounded-full"></div>
    <div class="absolute top-0 w-full h-full animate-rotate-f2">
      <div class="dot w-1 2xl:w-2 top-[-10px] 2xl:top-[-20px] left-1/2"></div>
    </div>
    <div class="absolute top-0 w-full h-full animate-rotate">
      <div class="dot w-2 2xl:w-4 left-[-22px] 2xl:left-[-22px] top-1/2"></div>
    </div>
    <div class="absolute top-0 w-full h-full animate-rotate-f1">
      <div class="dot w-1 2xl:w-2 right-[-30px] 2xl:right-[-60px] top-1/2"></div>
    </div>
    <img src={href} alt="main profile" class="aspect-square h-[200px] 2xl:h-[350px] overflow-hidden object-cover rounded-full border-amber-300 border-4"/>
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