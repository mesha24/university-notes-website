const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search');
const filterButtons = document.querySelectorAll('.button-value');
const notes = document.querySelectorAll('.box');

searchInput.addEventListener('keyup', () => {
  const searchTerm = searchInput.value.toLowerCase();
  notes.forEach(note => {
    const noteTitle = note.querySelector('h3').textContent.toLowerCase();
    const noteDescription = note.querySelector('p').textContent.toLowerCase();
    if (searchTerm === '' || noteTitle.includes(searchTerm) || noteDescription.includes(searchTerm)) {
      note.style.display = 'block';
    } else {
      note.style.display = 'none';
    }
  });
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.textContent.toLowerCase();
    const searchTerm = searchInput.value.toLowerCase();
    notes.forEach(note => {
      const noteCategory = note.querySelector('.category h4').textContent.toLowerCase();
      const noteTitle = note.querySelector('h3').textContent.toLowerCase();
      const noteDescription = note.querySelector('p').textContent.toLowerCase();
      if (category === 'all' || category === noteCategory) {
        if (searchTerm === '' || noteTitle.includes(searchTerm) || noteDescription.includes(searchTerm)) {
          note.style.display = 'block';
        } else {
          note.style.display = 'none';
        }
      } else {
        note.style.display = 'none';
      }
    });
  });
});




 










buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const selectedButton = event.target;
    const selectedValue = selectedButton.textContent;

    // Update the page based on the selected value
    switch (selectedValue) {
      case 'All':
        // Display all items
        break;
      case 'community':
        // Display community items
        break;
      case 'popular':
        // Display popular items
        break;
      case 'jobs':
        // Display jobs items
        break;
      case 'notes':
        // Display notes items
        break;
    }
  });
});

































const navToggle = document.querySelector('.navbar h4');
const navLinks = document.querySelector('.navbar ul');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    const targetOffset = target.offsetTop;
    const scrollDuration = 700;
    const scrollStep = Math.round((targetOffset - window.scrollY) / scrollDuration * 5);
    const scrollInterval = setInterval(() => {
      if (window.scrollY === targetOffset || window.scrollY > targetOffset - scrollStep) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10);
  });
});








  


  




    
    

  



      
        
    
 
  







