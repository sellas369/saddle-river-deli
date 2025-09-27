<script lang="ts">
  import type { CollectionEntry } from 'astro:content';
  type MenuboardSchema = CollectionEntry<'menuboard'>['data'];
  type MenuSchema = CollectionEntry<'menu'>['data'];

  interface Menuboard extends MenuboardSchema {
    board: Array<
      MenuSchema & {
        double: boolean;
      }
    >;
  }

  let { item }: { item: Menuboard } = $props();

  const { title, board: items } = item;
  const group = true;

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;

  // items = items.map((item) => {
  //   const hasRegular = item.items.find((i) => i.regular !== false);
  //   const hasLarge = item.items.find((i) => i.large !== false);

  //   item.double = hasRegular !== undefined && hasLarge !== undefined;

  //   return item;
  // });
</script>

<section class={['container', group ? 'grouped' : '']}>
  {#each items as item}
    <table class="table">
      <caption>
        <div class="table--caption">
          <h2 class="table--title">{item.title}</h2>
          {#if item.description}
            <p class="table--description">{item.description}</p>
          {/if}
        </div>
      </caption>
      {#if item.labeling}
        <thead>
          <tr>
            <td></td>
            <th class="cost">{item.labeling.regular}</th>
            {#if item.double}
              <th class="cost">{item.labeling.large}</th>
            {/if}
          </tr>
        </thead>
      {/if}
      <tbody>
        {#each item.items as i}
          <tr>
            <td>{i.name}</td>
            {#if item.double}
              {#if i.regular && !i.large}
                <td class="cost">{currency(i.regular)}</td>
                <td class="cost">-</td>
              {:else if i.large && !i.regular}
                <td class="cost">-</td>
                <td class="cost">{currency(i.large)}</td>
              {:else}
                <td class="cost">{currency(i.regular)}</td>
                <td class="cost">{currency(i.large)}</td>
              {/if}
            {:else}
              <td class="cost">{currency(i.regular)}</td>
            {/if}
          </tr>
        {/each}
      </tbody>
    </table>
  {/each}
</section>

<style lang="scss">
  .container {
    width: 100%;
    max-width: 80ch;
    margin-inline: auto;

    &.grouped {
      display: grid;
      gap: 2rem;
    }

    @supports not (display: masonry) {
      display: grid;
      gap: 2rem;
      margin-block: 1rem;
      border: 0.5rem solid red;
      padding: 0.5rem;
    }

    &:not(.grouped) {
      @supports (display: masonry) {
        display: contents;
      }
    }
  }

  .table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;

    caption {
      border: 1px solid black;
      border-bottom: 0;
    }

    &--caption {
      padding: 0.5rem;
      display: grid;
      gap: 0.25rem;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: #0c7f00;
      color: white;
    }

    &--title {
      font-size: 1.25rem;
      font-weight: 500;
    }

    &--title,
    &--description {
      margin: 0;
      padding: 0;
    }

    &--description {
      font-size: 0.9rem;
      font-weight: 300;
    }
  }

  tr {
    width: 100%;
  }

  td,
  th {
    text-align: left;
    font-weight: 300;
    border: 1px solid black;
    padding-inline: 0.5rem;
    padding-block: 0.25rem;
  }

  th {
    font-weight: 500;
  }

  .cost {
    width: 8ch;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }
</style>
