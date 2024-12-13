<script>
    export let link = '/';
    export let logo;
    export let name;
</script>

<a href={link} class="bg-black p-2 w-64 flex gap-2 rounded-md shadowxl-md">
    <img src={logo} alt="" class="rounded-full aspect-square w-6 stroke-white">
    <p class="my-auto">{name}</p>
</a>

<style lang='postcss'>
    a:nth-child(even) {
        @apply flex-row-reverse;
    }
</style>