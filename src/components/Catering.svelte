<script lang="ts">
  import type { CollectionEntry } from 'astro:content';

  let { menu }: { menu: CollectionEntry<'catering'> } = $props();

  const { data, rendered } = menu;

  const currencyIntl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;

  const currency = (p) => {
    if (p) {
      const formatted = currencyIntl(p);
      if (formatted.endsWith('.00')) {
        return formatted.substring(0, formatted.length - 3);
      }
      return formatted;
    }

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
  <ul class="list" role="list">
    {#each data.options as option}
      <li class="item">
        <p class="title">{option.title}</p>
        {#if option.description}
          <p class="body">{option.description}</p>
        {/if}
        <div class="price-block">
          <ul class="prices" role="list">
            {#each option.price.servings as price}
              <li>
                {#if price.platter}
                  {price.title} {currency(price.cost)}
                {:else}
                  {currency(price.cost)} {price.title}
                {/if}
              </li>
            {/each}
          </ul>
          {#if option.extras.length}
            <div class="bonus">
              <p>Add-Ons</p>
              <ul class="extras" role="list">
                {#each option.extras as price}
                  <li>
                    {#if price.platter}
                      {price.title} {currency(price.cost)}
                    {:else}
                      {currency(price.cost)} {price.title}
                    {/if}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
          {#if option.price.minimum}
            <p class="minimum">Minimum {option.price.minimum}</p>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .list,
  .prices {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
    gap: 1rem;
  }

  .list {
    border: 0.5rem solid red;
    padding: 0.5rem;
  }

  .title {
    font-weight: bold;
    background-color: #0c7f00;
    color: white;
    padding-inline: 1rem;
    padding-block: 0.5rem;
  }

  .body,
  .prices,
  .minimum {
    padding-inline: 1rem;
  }

  .minimum {
    background-color: hsl(60, 85%, 75%);
    padding-block: 0.5rem;
  }

  p {
    margin: 0;
  }

  .item {
    border: 1px solid black;
    // padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-rows: min-content 1fr auto;
  }

  .prices {
    grid-template-columns: repeat(auto-fit, minmax(10ch, 1fr));
    column-gap: 0.5rem;
    row-gap: 0.5rem;
    align-items: center;
    text-align: center;
    font-weight: bold;
  }

  .bonus {
    padding-inline: 1rem;
    font-size: 0.9rem;
    > p {
      padding-block-end: 2px;
      border-bottom: 1px solid black;
      margin-block-end: 0.5rem;
    }
  }

  .extras {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.5rem;
  }

  .price-block {
    grid-row: 3 / span 1;
    display: grid;
    gap: 1rem;

    &:not(:has(.minimum)) {
      padding-block-end: 1rem;
    }
  }
</style>
