<script>
    export let link = '/';
    export let logo;
    export let name;
    export let bg;
</script>

<a href={link} class="relative bg-black rounded-md shadowxl-xl w-64 h-30 overflow-hidden">
    <img src={bg} alt="" class="anim-bg absolute z-10 object-contain"/>
    <div class="bg-gray-700/50 absolute z-20 h-full w-full"></div>
    <div class="z-30 relative p-2 px-4 flex gap-2">
        <img src={logo} alt="" class="rounded-full aspect-square w-6 stroke-white">
        <p class="my-auto">{name}</p>
    </div>
</a>

<style lang='postcss'>
    a:nth-child(even) > div {
        @apply flex-row-reverse;
    }

    .anim-bg {
        animation: slideUp 1.5s ease-out;
    }

    @keyframes slideUp {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0%);
      }
    }
</style>