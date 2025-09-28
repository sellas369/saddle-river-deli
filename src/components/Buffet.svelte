<script lang="ts">
  import type { CollectionEntry } from 'astro:content';

  let { menu }: { menu: CollectionEntry<'buffet'> } = $props();

  const { data, rendered } = menu;

  const currencyIntl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;

  const currency = (p) => {
    if (p) return currencyIntl(p);

    return 'M/P';
  };
</script>

<section>
  <h2>{data.title}</h2>
  <p class="cost">
    {currency(data.cost)} per guest, {data.minimum} guest minimum.
  </p>
  {#if rendered?.html}
    <div class="type">
      {@html rendered.html}
    </div>
  {/if}
  <div class="menus">
    {#each data.menu as m}
      <section class="menu">
        <div class="wrapper">
          <h3 class="buffet-title">
            {m.title} <span>Select {m.choices}</span>
          </h3>
          <ul role="list">
            {#each m.options as o}
              <li>{o}</li>
            {/each}
          </ul>
        </div>
      </section>
    {/each}
  </div>
</section>

<style lang="scss">
  .cost {
    font-size: 1.15em;
    font-weight: bold;
  }

  .menu {
    border: 0.5rem solid red;
    padding-inline: 0.5rem;
    padding-block: 0.5rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .buffet-title {
    margin: 0;
    background: #0c7f00;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    color: white;
  }

  .menus {
    display: grid;
    gap: 1rem;
  }

  .wrapper {
    border: 1px solid black;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h3 span {
    font-size: 0.9rem;
    justify-self: flex-end;
    margin-inline-start: auto;
  }
</style>
