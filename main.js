const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('searchbox');

searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '120px') {
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none';
  } else {
    searchBox.style.top = '120px';
    searchBox.style.pointerEvents = 'auto';
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
});


let isSearchBoxVisible = false;

searchIcon.addEventListener('click', function() {
  // Toggle the visibility of the search box
  if (searchBox.style.visibility === 'visible') {
      searchBox.style.visibility = 'hidden';
  } else {
      searchBox.style.visibility = 'visible';
  }
});

document.addEventListener('click', function(event) {
    const isClickInsideSearchBox = searchBox.contains(event.target);
    const isClickOnSearchIcon = event.target === searchIcon;

    if (!isClickInsideSearchBox && !isClickOnSearchIcon) {
        hideSearchBox();
    }
});
