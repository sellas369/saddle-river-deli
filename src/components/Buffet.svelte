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
  <p>Cost: {currency(data.cost)} per guest</p>
  <p>
    Minimum: {data.minimum} guests
  </p>
  {#if rendered?.html}
    <div class="type">
      {@html rendered.html}
    </div>
  {/if}
  {#each data.menu as m}
    <section>
      <h3>{m.title}</h3>
      <p>Choose {m.choices}</p>
      <ul>
        {#each m.options as o}
          <li>{o}</li>
        {/each}
      </ul>
    </section>
  {/each}
</section>
