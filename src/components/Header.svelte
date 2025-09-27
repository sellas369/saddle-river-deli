<script lang="ts">
  import type { CollectionEntry } from 'astro:content';
  import InfoBlock from './InfoBlock.svelte';

  type ConfigSchema = CollectionEntry<'config'>['data'];

  let { config }: { config: ConfigSchema } = $props();
</script>

<div class="top-wrapper">
  <header>
    <div class="title">
      <h1><a href="/saddle-river-deli">{config.title}</a></h1>
      <p>{config.subtitle}</p>
    </div>

    <footer>
      <InfoBlock {config} />
    </footer>
  </header>
  <nav>
    <ul>
      <li><a href="/saddle-river-deli/menu">Menu</a></li>
      <li><a href="/saddle-river-deli/catering">Catering</a></li>
    </ul>
  </nav>
</div>

<style lang="scss">
  .title {
    text-align: center;
    display: grid;
    gap: 0.5rem;
    padding-top: 1rem;
    p {
      font-size: 1.25rem;
      line-height: 1;
      margin: 0;
      padding: 0;
      text-shadow:
        1px 1px black,
        1px -1px black,
        -1px 1px black,
        -1px -1px black;
    }
  }

  .top-wrapper {
    display: grid;
    background: #0c7f00;
  }
  header {
    padding: 1rem;
    color: white;
    display: grid;
    gap: 2rem;
  }

  a {
    color: currentColor;
  }

  h1 {
    --tt: var(--on);
    margin: 0;
    line-height: 1;
    padding: 0;
    font-size: 2.85rem;
    font-style: italic;
    text-align: center;
    animation-name: header-h1;
    text-shadow:
      1px 1px black,
      2px 2px black,
      3px 3px black,
      4px 4px black,
      5px 5px black,
      6px 6px black,
      7px 7px black,
      8px 8px black,
      9px 9px black,
      10px 10px black;

    a {
      text-decoration: none;
    }
  }

  @keyframes header-h1 {
    from {
      font-size: 1.25rem;
    }
    to {
      font-size: 3.5rem;
    }
  }

  // .hours {
  //   margin-top: 1rem;
  // }

  nav {
    margin: 0;
    margin-block-start: 1rem;
    // background-color: blue;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
    }

    li {
      width: 50%;
      list-style: none;
      text-align: center;
      color: white;
      display: grid;
    }

    a {
      padding: 1rem;
      text-decoration: none;
      background-color: rgba(black, 0.25);
      border: 1px solid rgb(black, 0.5);
      font-size: 1.15rem;
      height: 100%;
      display: grid;
      align-items: center;

      &:hover {
        background-color: rgba(black, 0.5);
      }
      &:active {
        background-color: rgba(black, 0.15);
      }
    }
  }
</style>
