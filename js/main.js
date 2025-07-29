// Tabs (List / Map) Toggle
const listTab = document.getElementById('list-tab');
const mapTab = document.getElementById('map-tab');
const listView = document.getElementById('list-view');
const mapView = document.getElementById('map-view');

listTab.addEventListener('click', () => switchTab('list'));
mapTab.addEventListener('click', () => switchTab('map'));

function switchTab(view) {
  const isList = view === 'list';

  listView.classList.toggle('d-none', !isList);
  mapView.classList.toggle('d-none', isList);

  listTab.classList.toggle('btn-primary', isList);
  listTab.classList.toggle('btn-outline-primary', !isList);
  listTab.classList.toggle('active', isList);

  mapTab.classList.toggle('btn-primary', !isList);
  mapTab.classList.toggle('btn-outline-primary', isList);
  mapTab.classList.toggle('active', !isList);
}

// Tag Filter Buttons
document.querySelectorAll('.tag-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.tag;

    // Filter cards
    document.querySelectorAll('.card-item').forEach(card => {
      card.style.display = card.classList.contains(tag) ? 'block' : 'none';
    });

    // Manage active button
    document.querySelectorAll('.tag-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Sticky Header Scroll Behavior
window.addEventListener("scroll", () => {
  const header = document.getElementById("stickyHeaderWrap");
  header.classList.toggle("hide-initial-search", window.scrollY > 100);
});
