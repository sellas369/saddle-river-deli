<script lang="ts">
  import { onMount } from 'svelte';

  interface MenuItem {
    title: string;
    slug: string;
  }
  let {
    menu,
    title,
    submenu,
  }: { menu: Array<MenuItem>; title: MenuItem; submenu: string } = $props();

  let details: HTMLDetailsElement;

  onMount(() => {
    if (window.innerWidth >= 800) {
      details.setAttribute('aria-expanded', 'true');
    }

    window.addEventListener('resize', (e) => {
      if (window.innerWidth >= 800) {
        details.setAttribute('aria-expanded', 'true');
      } else {
        details.removeAttribute('aria-expanded');
      }
    });

    details.addEventListener('click', (e: Event) => {
      const { target } = e;
      if (window.innerWidth < 800 && target.nodeName === 'A') {
        details.removeAttribute('open');
      }
    });
  });

  let toplink = $state('span') as 'span' | 'a';

  onMount(() => {
    if (window.innerWidth < 800) {
      toplink = 'span';
    } else {
      toplink = 'a';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 800) {
        toplink = 'span';
      } else {
        toplink = 'a';
      }
    });
  });
</script>

<nav>
  <details bind:this={details}>
    <summary>
      {#if toplink === 'span'}
        <span class="jump">{submenu}</span>
      {:else}
        <a class="jump" href="#">{title.title}</a>
      {/if}
      <!-- Icon from Material Symbols (c) Google -->
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
      </svg>
    </summary>
    <ul role="list">
      {#each menu as m}
        <li><a href={`#${m.slug}`}>{m.title}</a></li>
      {/each}
    </ul>
  </details>
</nav>

<style lang="scss">
  a {
    color: currentColor;
    text-decoration: none;
    display: block;
  }

  .jump {
    text-transform: uppercase;
    // text-decoration: underline;
  }

  nav {
    background: white;
    border: 0.5rem solid red;
    scroll-target-group: auto;
    max-height: calc(100vh - 2rem);
    overflow: auto;
  }

  details {
    padding: 0;
    margin: 0;
    summary {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1.25rem;
      gap: 0.5rem;
      align-items: center;
      font-size: 1.25rem;
      padding: 0.5rem;

      &::-webkit-details-marker {
        display: none;
      }
    }

    &[open] .icon {
      transform: rotate(90deg);
    }

    @media (min-width: 800px) {
      &::details-content {
        content-visibility: visible;
        height: auto !important;
      }

      .icon {
        display: none;
      }
    }
  }

  .icon {
    height: 1.25rem;
    width: 1.25rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0.25rem 0.5rem;
  }

  li:has(:target-current),
  li:hover {
    background-color: #0c7f00;
    color: white;
  }

  // .icon {
  //   height: 1.25rem;
  //   width: 1.25rem;
  // }
</style>
