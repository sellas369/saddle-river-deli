<script>
  let { title, items, group = false } = $props();

  items = items.map((item) => {
    const hasRegular = item.items.find((i) => i.regular !== false);
    const hasLarge = item.items.find((i) => i.large !== false);

    item.double = hasRegular !== undefined && hasLarge !== undefined;

    return item;
  });
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
      {#if !item.double}
        {#if item.regular}
          <thead>
            <tr>
              <td></td>
              <th class="cost">{item.regular}</th>
            </tr>
          </thead>
        {/if}
        <tbody>
          {#each item.items as i}
            <tr>
              <td>{i.item}</td>
              <td class="cost">{i.regular}</td>
            </tr>
          {/each}
        </tbody>
      {:else}
        <thead>
          <tr>
            <td></td>
            <th class="cost">{item.regular}</th>
            <th class="cost">{item.large}</th>
          </tr>
        </thead>
        <tbody>
          {#each item.items as i}
            <tr>
              <td>{i.item}</td>
              <td class="cost">{i.regular || '-'}</td>
              <td class="cost">{i.large || '-'}</td>
            </tr>
          {/each}
        </tbody>
      {/if}
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
