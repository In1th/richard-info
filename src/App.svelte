<script>
  import './app.css';
  import Social from './lib/Social.svelte';

  let desktopMotion = true;
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/7.css">
</svelte:head>

<main class="relative flex min-h-screen items-center justify-center overflow-hidden mx-4">
  <div class="relative z-10 flex w-full max-w-6xl flex-col items-center gap-6 py-6 lg:flex-row lg:justify-center lg:gap-10 lg:items-start">
    <div class="flex flex-col items-center gap-3 lg:items-start">
      <div class="window glass active w-full max-w-md about-window">
        <div class="title-bar">
          <div class="title-bar-text">About</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body flex flex-col items-center gap-2 p-4 text-center">
          <img src="logo.png" alt="Profile" class="aspect-square w-48 object-fill"/>
          <h1 class="z-20 text-4xl lg:text-5xl text-slate-800">Hi.yeena</h1>
          <p class="text-lg lg:text-xl text-slate-700">Music Producer & DJ</p>
          <i class="text-base lg:text-lg text-slate-600">house, funk and groove</i>
        </div>
      </div>

      <div role="tooltip" class="mx-3 w-full max-w-md lg:mt-2">Wroof! woof, waf :3</div>
    </div>

    <div class="flex flex-col items-center gap-4">
      <div class="w-full max-w-[32rem] p-4 music-widget rounded-[0.9rem] border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-8px_18px_rgba(18,53,87,0.12),0_20px_36px_rgba(11,38,59,0.18)] backdrop-blur-sm">
        <div class="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-100/90">
          <span>See the latest release</span>
        </div>

        <div class="flex items-center gap-4 music-row">
          <div class="flex h-16 w-16 items-center justify-center rounded-lg border border-white/60 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(101,211,255,0.45)_18%,rgba(2,132,199,0.8)_62%,rgba(48,46,129,0.8))] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_18px_rgba(21,92,146,0.18)] album-art">
            <img src="music.png" alt="Music" class="h-14 w-14 object-contain" />
          </div>

          <div class="min-w-0 flex-1">
            <p class="truncate text-base font-bold uppercase tracking-[0.12em] text-white/95">Hold it</p>
            <div class="mt-2 flex items-center gap-3">
              <span class="text-sm lg:text-[0.95rem] text-slate-200/80">01:55</span>
              <div class="h-3 flex-1 overflow-hidden rounded-full bg-white/15">
                <div class="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-500"></div>
              </div>
              <span class="text-sm lg:text-[0.95rem] text-slate-200/80">03:45</span>
            </div>
          </div>

          <a
            href="https://on.soundcloud.com/bOPux0zJ5t66hxAc7S"
            target="_blank"
            rel="noreferrer"
            aria-label="Play Hold it by Hi.yeena on SoundCloud"
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03))] text-lg font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_22px_rgba(14,70,124,0.22)] transition hover:scale-105 hover:bg-white/20 play-btn mt-2 lg:mt-0"
          >
            ▶
          </a>
        </div>
      </div>

      <div
        class="flex w-full max-w-[32rem] flex-row items-center justify-center flex-wrap"
        role="group"
      >
        <Social name="Soundcloud" logo="soundcloud.png" link="https://soundcloud.com/hi-yeena" />
        <Social name="Creative Channel" logo="channel.png" link="https://t.me/richardattempts" />
        <Social name="YouTube" logo="youtube.png" link="https://www.youtube.com/@HI-YEENA" />
        <Social name="X (Twitter)" logo="x.png" link="https://x.com/richard_yeen" />
        <Social name="Spotify" logo="spotify.png" link="https://open.spotify.com/artist/3aRjrZlQW0JQi7HsmLlH4r?si=MHpogqznROKJJ-gpDX-bVw" hideOnMobile/>
        <Social name="Bandcamp" logo="bandcamp.png" link="https://hi-yeena.bandcamp.com" hideOnMobile/>
        <Social name="TikTok" logo="tiktok.png" link="https://www.tiktok.com/@hiyeenawastaken" hideOnMobile/>
        <Social name="Instagram" logo="instagram.png" link="https://www.instagram.com/hi.yeena.music/" hideOnMobile/>
      </div>
    </div>
  </div>

  <footer class="absolute bottom-2 left-1/2 -translate-x-1/2 text-center font-bold text-white text-sm drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">
    2024-{new Date().getFullYear()}
  </footer>
</main>
