// Check JS is Connected
console.log('OK');

// get JSON data
// create anchor link for each item
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    const myLinks = document.getElementById('myLinks');
    const fragment = document.createDocumentFragment();

    // data.myLinks.forEach(({ url, name }) => {
    //   const li = document.createElement('li');
    //   li.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
    //   fragment.appendChild(li);
    // });

    data.myLinks.forEach(({ url, name }) => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${url}" target="_blank" id="${name}">${name}</a>`;
      fragment.appendChild(li);
    });

    myLinks.appendChild(fragment);
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
});


document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('pages.json');
    const data = await response.json();

    const pagesContainers = document.getElementsByClassName('pages');
    const fragment = document.createDocumentFragment();

    const currentPage = window.location.pathname;

    data.pages.forEach(({ url, name }) => {
      const a = document.createElement('a');
      a.href = url;
      a.textContent = name;
      a.className = "titlebutton";


      //check if on current page, and attach currentpage id to it
      if (url === '/' && currentPage === '/') {
        a.id = "currentpage";
      }
      else if (url !== '/' && currentPage === url) {
        a.id = "currentpage";
      }

      fragment.appendChild(a);
    });

    // pagesContainers.appendChild(fragment);

    Array.from(pagesContainers).forEach(container => {
      container.appendChild(fragment.cloneNode(true));
    });
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
});
