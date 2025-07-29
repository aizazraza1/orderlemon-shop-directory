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

  document.querySelectorAll('.tag-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      document.querySelectorAll('.card-item').forEach(card => {
        card.style.display = card.classList.contains(tag) ? 'block' : 'none';
      });
    });
  });

window.addEventListener("scroll", function () {
  const header = document.getElementById("stickyHeaderWrap");
  if (window.scrollY > 100) {
    header.classList.add("hide-initial-search");
  } else {
    header.classList.remove("hide-initial-search");
  }
}
);
// window.addEventListener("scroll", function () {
//   const header = document.getElementById("stickyHeaderWrap");
//   if (window.scrollY > 100) {
//     header.classList.add("sticky-animate");
//   } else {
//     header.classList.remove("sticky-animate");
//   }
// });