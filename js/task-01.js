const categoriesRef = document.querySelector("ul");

const categoriesListRef = categoriesRef.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesListRef.length}`);

categoriesListRef.forEach((elem) => 
console.log(`Category: ${elem.querySelector('h2').textContent}
Elements: ${elem.querySelectorAll('li').length}`));
