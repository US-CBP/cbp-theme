const getCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const filterList = (arr, value) => (
  arr.filter(item => item.substr(0, value.length).toLowerCase() == value.toLowerCase())
)

const createListItem = (arr) => {
  arr.forEach(element => {
    const item = document.createElement('LI');
    item.innerHTML = element;

    return item;
  });
}

const handleInput = (e, arr) => {
  const { target: { value } } = e;
  const parent = e.target.closest('.autocomplete');
  const list = filterList(arr, value);
  const menu = list.length > 0 && document.createElement('UL');

  if (value.length === 0) {
    console.log('Remove Menu!');
  } else {
    parent.insertAdjacentElement('afterend', menu);

    list.forEach(element => {
      const item = document.createElement('LI');
      item.innerHTML = element;
      
      menu.appendChild(item);
    });
  }
}

const autocomplete2 = async (input) => {
  const countries = await getCountries();
  const countriesName = countries.map(items => items.name.common).sort();

  input.addEventListener('input', (e) => handleInput(e, countriesName))
};

// autocomplete2(document.getElementById('autocomplete-demo'))
