   // Tabs
    document.getElementById('list-tab').addEventListener('click', () => {
      document.getElementById('list-view').classList.remove('d-none');
      document.getElementById('map-view').classList.add('d-none');
      document.getElementById('list-tab').classList.replace('btn-outline-primary','btn-primary');
      document.getElementById('map-tab').classList.replace('btn-primary','btn-outline-primary');
    });
    document.getElementById('map-tab').addEventListener('click', () => {
      document.getElementById('map-view').classList.remove('d-none');
      document.getElementById('list-view').classList.add('d-none');
      document.getElementById('map-tab').classList.replace('btn-outline-primary','btn-primary');
      document.getElementById('list-tab').classList.replace('btn-primary','btn-outline-primary');
    });

    // Tag filters
    document.querySelectorAll('.tag-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        document.querySelectorAll('.card-item').forEach(card => {
          card.style.display = card.classList.contains(tag) ? 'block' : 'none';
        });
      });
    });

    // Sticky logic with animation
    const filterBar = document.getElementById('filterBar');
    const spacer = document.getElementById('spacer');
    const fullSearch = document.getElementById('initialSearch');
    const locationBtn = document.getElementById('locationBtn');
    const findBtn = document.getElementById('findBtn');
    const filterSearch = document.getElementById('filterSearch');
    const triggerOffset = filterBar.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.scrollY >= triggerOffset) {
        filterBar.classList.add('sticky');
        spacer.style.height = filterBar.offsetHeight + 'px';
        // hide only buttons
        locationBtn.style.opacity = '0';
        findBtn.style.opacity = '0';
        // show small search
        filterSearch.style.display = 'flex';
        setTimeout(() => { filterSearch.style.opacity = '1'; }, 10);
      } else {
        filterBar.classList.remove('sticky');
        spacer.style.height = '0px';
        locationBtn.style.opacity = '1';
        findBtn.style.opacity = '1';
        filterSearch.style.opacity = '0';
        setTimeout(() => { filterSearch.style.display = 'none'; }, 300);
      }
    });