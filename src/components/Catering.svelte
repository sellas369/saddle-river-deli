<script lang="ts">
  import type { CollectionEntry } from 'astro:content';

  let { menu }: { menu: CollectionEntry<'catering'> } = $props();

  const { data, rendered } = menu;

  const currencyIntl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;

  const currency = (p: number) => {
    if (p) {
      const formatted = currencyIntl(p);
      if (formatted.endsWith('.00')) {
        return formatted.substring(0, formatted.length - 3);
      }
      return formatted;
    }

    return 'M/P';
  };

  interface Price {
    platter?: boolean;
    cost: number;
    title: string;
  }

  const title = (price: Price, addon: boolean = false) => {
    const c = currency(price.cost);
    if (price.cost) {
      if (price.platter) return price.title + ' ' + c;
      return c + ' ' + price.title;
    }

    if (addon) {
      return c + ' ' + price.title;
    }

    return c;
  };
</script>

<section id={menu.slug}>
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
                {title(price)}
              </li>
            {/each}
          </ul>
          {#if option.extras.length}
            <div class="bonus">
              <p>Add-Ons</p>
              <ul class="extras" role="list">
                {#each option.extras as price}
                  <li>
                    {title(price, true)}
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
  section:first-child h2 {
    @media (min-width: 800px) {
      margin-block-start: 0;
    }
  }

  .list,
  .prices {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25ch, 1fr));
    gap: 1rem;

    :not(.bonus) li,
    :not(.extras) li {
      text-align: center;
    }
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
    text-align: center;
  }

  p {
    margin: 0;
  }

  .body {
    text-align: center;
  }

  .item {
    border: 1px solid black;
    // padding: 1rem;
    display: grid;
    // gap: 1rem;
    grid-template-rows: min-content 1fr auto;

    > *:not(:first-child) {
      margin-top: 1rem;
    }

    &:last-of-type:nth-of-type(odd) {
      grid-column: 1 / -1;

      li {
        grid-column: span 1;
      }
    }
  }

  .prices {
    grid-template-columns: repeat(auto-fit, minmax(11ch, 1fr));
    column-gap: 0.5rem;
    row-gap: 0.5rem;
    align-items: center;
    text-align: center;
    font-weight: bold;
    container-type: inline-size;

    li:last-child:nth-child(3n) {
      grid-column: 1 / -1;
      @container (min-width: calc(33ch + 1rem)) {
        grid-column: unset;
      }
    }
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

    li {
      text-align: left !important;
    }
  }

  .price-block {
    grid-row: 3 / span 1;
    display: grid;
    gap: 1rem;

    &:not(:has(.minimum)) {
      padding-block-end: 1rem;
    }
  }
  h2 + .type {
    margin-block-start: -1rem;
  }
</style>
