<div class="top-wrapper">
  <header>
    <div class="title">
      <h1><a href="/saddle-river-deli">Saddle River Deli</a></h1>
      <p>Eat In | Take Out | Delivery | Catering</p>
    </div>

    <footer>
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
            href="https://www.google.com/maps/place/Saddle+River+Deli+%26+Catering/@41.0325398,-74.1103631,3571m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c2e43e0496b8b7:0xbbfbcc39534276b1!8m2!3d41.0325403!4d-74.1000634!16s%2Fg%2F1td2hvb7?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank">171 E Saddle River Rd, Saddle River, NJ 07458</a
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
            <a href="tel:+12013278578">201-327-8578</a> |
            <a href="tel:+12013270015">201-327-0015</a>
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
          >Monday - Saturday <time datetime="06:00">6:00am</time>-<time
            datetime="15:00">3:00pm</time
          ></span
        >
        <span class="hours--actual">Closed Sunday</span>
      </p>
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

  footer {
    display: grid;
    gap: 0.5rem;
    width: 100%;
    max-width: 80ch;
    margin: 0 auto;
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

  p {
    margin: 0;
    text-shadow: 1px 1px black;
    font-size: 1rem;
  }

  address {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    // gap: 1rem;
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
    column-gap: 0.5rem;

    svg {
      align-self: center;
    }

    &--actual {
      grid-column: 2;
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
