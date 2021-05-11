import axios from 'axios';

const formDataExample = {
  productImages: '',
  productName: 'Linen someothing',
  categories: [
    {
      value: 'MaxiMidiDresses',
      label: 'Maxi / Midi Dresses',
    },
    {
      value: 'RompersJumpsuits',
      label: 'Rompers / Jumpsuits',
    },
  ],
  brand: [
    {
      value: 'Zara',
      label: 'Zara',
    },
  ],
  price: '200',
  size: [
    {
      value: 'S',
      label: 'S',
    },
    {
      value: 'L',
      label: 'L',
    },
    {
      value: 'XS',
      label: 'XS',
    },
  ],
  color: [
    {
      value: 'blue',
      label: 'blue',
    },
    {
      value: 'yellow',
      label: 'yellow',
    },
    {
      value: 'orange',
      label: 'orange',
    },
  ],
  quantity: '340',
  description: 'Idol size: s\n-chest size: s\n-height: 180cm',
};

export const handleSubmit = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/products', {
      params: formDataProcessor(formData),
    });
    console.log('new product', response.data);
  } catch (err) {
    throw new Error(err.message);
  }
};
export const formDataProcessor = (formData) => {
  const {
    productName,
    categories,
    brand,
    size,
    color,
    price,
    quantity,
    description,
  } = formData;

  return {
    name: productName,
    categories: toValueArray(categories),
    brand: brand.value,
    size: toValueArray(size),
    color: toValueArray(color),
    price: price,
    stock: quantity,
    description: description,
  };
};

export const toValueArray = (arrayOfObjects) => {
  const result = [];
  arrayOfObjects.forEach(({ value }) => {
    result.push(value);
  });
  return result;
};

export const colorOptions = [
  { value: 'blue', label: 'blue' },
  { value: 'brown', label: 'brown' },
  { value: 'black', label: 'black' },
  { value: 'pink', label: 'pink' },
  { value: 'yellow', label: 'yellow' },
  { value: 'orange', label: 'orange' },
  { value: 'white', label: 'white' },
];

export const sizeOptions = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: 'XS', label: 'XS' },
];

export const categoriesOptions = [
  { value: 'MaxiMidiDresses', label: 'Maxi / Midi Dresses' },
  { value: 'RompersJumpsuits', label: 'Rompers / Jumpsuits' },
  { value: 'GoingOutDresses', label: 'Going Out Dresses' },
  { value: 'CasualDresses', label: 'Casual Dresses' },
  { value: 'PartyOccasionDresses', label: 'Party / Occasion Dresses' },
  { value: 'MiniDresses', label: 'Mini Dresses' },
  { value: 'Clothes', label: 'Clothes' },
  { value: 'woman', label: 'Woman' },
  { value: 'men', label: 'Men' },
];

export const brandOptions = [{ value: 'Zara', label: 'Zara' }];
