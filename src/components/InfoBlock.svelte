<script lang="ts">
  import type { CollectionEntry } from 'astro:content';

  type ConfigSchema = CollectionEntry<'config'>['data'];

  let { config, shadow = false }: { config: ConfigSchema; shadow: boolean } =
    $props();

  const time = (t) =>
    new Date(`01/01/2000 ${t}`).toLocaleTimeString('en-US', {
      timeStyle: 'short',
    });
</script>

<div class="info {shadow ? 'shadow' : ''}">
  <address>
    <p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        viewBox="0 -960 960 960"
      >
        <title>Address</title>
        <path
          d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"
        />
      </svg>
      <a
        href={`https://www.google.com/maps/search/${config.address}`}
        target="_blank">{config.address}</a
      >
    </p>
    <p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        class="icon"
      >
        <title>Phone Number</title>
        <path
          d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
        />
      </svg>
      <span>
        {#each config.phone as phone, i}
          <a href={`tel:+1${phone.replace(/(-|\s)/g, '')}`}>{phone}</a
          >{#if i !== config.phone.length - 1}<span>&nbsp;|&nbsp;</span>
          {/if}
        {/each}
      </span>
    </p>
  </address>
  <p class="hours">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      viewBox="0 -960 960 960"
    >
      <title>Hours of Operation</title>
      <path
        d="M582-298 440-440v-200h80v167l118 118-56 57ZM440-720v-80h80v80h-80Zm280 280v-80h80v80h-80ZM440-160v-80h80v80h-80ZM160-440v-80h80v80h-80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
      />
    </svg>
    <span class="hours--actual"
      >{config.hours.open}
      <time datetime={config.hours.start}>{time(config.hours.start)}</time
      >-<time datetime={config.hours.end}>{time(config.hours.end)}</time></span
    >
    <span class="hours--actual">Closed {config.hours.closed}</span>
  </p>
</div>

<style lang="scss">
  .info {
    display: grid;
    gap: 0.5em;
    width: 100%;
    max-width: 80ch;
    margin: 0 auto;
  }

  a {
    color: currentColor;
  }

  p {
    margin: 0;

    font-size: 1em;

    .shadow & {
      text-shadow: 1px 1px black;
    }
  }

  address {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    // gap: 1em;
  }

  .icon {
    height: 1em;
    width: 1em;
    fill: currentColor;
    stroke: black;
    stroke-width: 10;
  }

  .hours,
  address p {
    display: grid;
    grid-template-columns: 1em auto;
    column-gap: 0.5em;

    svg {
      align-self: center;
    }

    &--actual {
      grid-column: 2;
    }
  }
</style>
