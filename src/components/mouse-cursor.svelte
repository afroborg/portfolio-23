<script lang="ts">
  import type { Action } from 'svelte/types/runtime/action';

  const movement: Action<HTMLDivElement, null> = (element) => {
    if (window.innerWidth < 768) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const { pageX, pageY } = event;

      element.style.setProperty('--x', `${pageX}px`);
      element.style.setProperty('--y', `${pageY}px`);

      // check if the mouse is over a link or button, or if the parent is a link or button
      if (event.target instanceof HTMLElement) {
        const { tagName } = event.target;

        if (tagName === 'A' || tagName === 'BUTTON') {
          element.dataset.target = 'link';
        } else {
          element.dataset.target = '';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.classList.add('custom-cursor');

    return {
      destroy: () => {
        window.removeEventListener('mousemove', handleMouseMove);
      },
    };
  };
</script>

<div
  data-cursor
  data-target
  use:movement
  class="print:hidden hidden md:block"
/>

<style lang="postcss">
  :global(body.custom-cursor *) {
    cursor: none;
  }

  [data-cursor] {
    --scale-start: 1;
    --scale-end: 1.2;

    isolation: isolate; /* new stacking context */
    position: absolute;
    top: var(--y);
    left: var(--x);
    transform: translate(-50%, -50%) scale(var(--scale-start));
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: theme('colors.white');
    animation: pulse 2s infinite;
    pointer-events: none;
    transition: transform 0.2s ease;
    z-index: 9999;
  }

  [data-cursor]:global([data-target='link']) {
    animation: none;
    background: theme('colors.primary.yellow');
  }

  [data-cursor]:global([data-target='link']::after) {
    background: theme('colors.primary.yellow / 60%');
  }

  [data-cursor]::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180%;
    height: 180%;
    border-radius: 50%;
    background: theme('colors.white / 30%');
  }

  @keyframes pulse {
    0% {
      transform: scale(var(--scale-start)) translate(-50%, -50%);
    }
    50% {
      transform: scale(var(--scale-end)) translate(-50%, -50%);
    }
    100% {
      transform: scale(var(--scale-start)) translate(-50%, -50%);
    }
  }
</style>
