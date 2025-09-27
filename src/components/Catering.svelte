<script lang="ts">
  import type { CollectionEntry } from 'astro:content';

  let { menu }: { menu: CollectionEntry<'catering'> } = $props();

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
  {#if rendered?.html}
    <div class="type">
      {@html rendered.html}
    </div>
  {/if}
  <ul>
    {#each data.options as option}
      <li>
        <p>{option.title}</p>
        {#if option.description}
          <p>{option.description}</p>
        {/if}
        {#if option.price.minimum}
          <p>Minimum: {option.price.minimum}</p>
        {/if}
        <ul>
          {#each option.price.servings as price}
            <li>
              {#if price.platter}
                <p>{price.title} {currency(price.cost)}</p>
              {:else}
                <p>{currency(price.cost)} {price.title}</p>
              {/if}
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</section>
