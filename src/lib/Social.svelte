<script lang="ts">
  type SocialProps = {
    link: string;
    logo: string;
    name: string;
    hideOnMobile?: boolean;
  }

  const {link = '/', logo, name, hideOnMobile = false}: SocialProps = $props();

</script>

<a
  href={link}
  class:hide-on-mobile={hideOnMobile}
  class="social-icon"
>
  <div class="social-art">
    <img src={logo} alt="" class="social-logo" />
  </div>
  <span class="social-label">{name}</span>
</a>

<style lang='postcss'>
  .hide-on-mobile {
    display: none!important;
  }

  @media (min-width: 1024px) {
    .hide-on-mobile {
        display: flex!important;
    }
  }
  

  .social-icon {
    @apply flex flex-col items-center relative w-32 h-36 mt-2 text-white;
    text-decoration: none;
    transition: transform 0.15s ease, filter 0.15s ease;
    filter: drop-shadow(0 2px 0 rgba(38, 72, 107, 0.25));
    font-family: 'Segoe UI', Frutiger, 'Helvetica Neue', Arial, sans-serif;
  }

  .social-icon:hover,
  .social-icon:focus-visible,
  .social-icon.selected {
    transform: translateY(-0.1rem);
    filter: drop-shadow(0 4px 14px rgba(25, 70, 110, 0.24));
  }

  .social-art {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.8rem;
    height: 5.8rem;
    border-radius: calc(var(--aero-radius, 0.9rem) + 0.1rem);
    background: linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02));
    border: 1px solid rgba(255,255,255,0.42);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.55),
      inset 0 -6px 14px rgba(9, 40, 76, 0.16),
      0 10px 26px rgba(13, 40, 80, 0.12);
    backdrop-filter: blur(2px);
  }

  .social-logo {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.24));
    opacity: 0.98;
  }

  .social-label {
    display: block;
    margin-top: 0.35rem;
    width: 100%;
    color: #ffffff;
    font-size: 0.7rem;
    line-height: 1.08;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-align: center;
    text-shadow: 1px 1px 0 rgba(19, 42, 71, 0.9);
    word-wrap: break-word;
  }

  @media (max-width: 640px) {
    .social-icon {
      width: 5.4rem;
      min-height: 6.6rem;
    }

    .social-art {
      width: 3.8rem;
      height: 3.8rem;
    }

    .social-logo {
      width: 2.8rem;
      height: 2.8rem;
    }

    .social-label {
      font-size: 0.66rem;
    }
  }
</style>