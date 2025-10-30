const tags = document.querySelectorAll('.tag');
const books = document.querySelectorAll('.book');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    const selectedTag = tag.dataset.tag;

    books.forEach(book => {
      const bookTags = book.dataset.tags.split(',');
      if (bookTags.includes(selectedTag)) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });
});
