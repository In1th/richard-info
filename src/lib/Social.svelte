<script module>
    let currentName = $state<string>('About me');

    export let resetFocus = () => {
      currentName = 'About me';
    }
</script>

<script lang="ts">
  type SocialProps = {
    link: string;
    logo: string;
    name: string;
    bg: string;
  }

  const {link = '/', logo, name, bg}: SocialProps = $props();

  const onHover = () => {
    currentName = name;
  }

  const selectedSocial = $derived(currentName === name);
  const isAboutMe = $derived(name === 'About me');
</script>

<a
  href={link}
  class="relative bg-black rounded-md shadowxl-xl w-64 2xl:w-16 h-30 2xl:h-[600px] overflow-hidden transition-all"
  class:selected={selectedSocial}
  onmouseover={onHover}
  onfocus={onHover}
>
    <img src={bg} alt="" class="anim-bg absolute z-10 object-contain 2xl:h-full 2xl:object-cover"/>
    <div class="bg-gray-700/50 absolute z-20 h-full w-full"></div>
    <div class="z-30 relative p-2 px-4 flex gap-2 2xl:flex-col h-full overflow-hidden">
        <img
          src={logo}
          alt=""
          class="rounded-full aspect-square w-6 stroke-white 2xl:mx-auto"
          class:img-selected={selectedSocial}
        />
        <p
          class="my-auto 2xl:hidden"
          class:title-selected={selectedSocial}
        >
          {name}
        </p>
    </div>
</a>

<style lang='postcss'>
    .selected {
      @apply 2xl:flex-grow;
    }

    @media (min-width: 1536px) {
      .title-selected {
        @apply block text-7xl text-wrap mt-auto mb-0 transition-all pb-4 px-2;
      }

      .about-me {
        @apply text-nowrap;
      }

      .img-selected {
        @apply mx-0;
      }
    }

    @media (max-width: 1536px) {
      a:nth-child(even) > div {
          @apply flex-row-reverse;
      }
    }

    .anim-bg {
        animation: slideUp 1.5s ease-out;
    }

    @media (min-width: 1536px) {
      .anim-bg {
          animation: slideLeft .7s ease-out;
      }
    }


    @keyframes slideUp {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0%);
      }
    }

    @keyframes slideLeft {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
</style>