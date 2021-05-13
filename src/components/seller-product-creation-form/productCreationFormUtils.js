import axios from 'axios';
// eslint-disable-next-line
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

export const handleUploadFile = ({ ...data }) => {
  const formData = new FormData();

  const processedFormData = formDataProcessor({ formData, data });

  axios
    .post('http://localhost:5000/api/products/create', processedFormData)
    .then((res) => console.log('res.data', res.data))
    .catch((err) => console.log('err', err));
};

export const turnImageInto64Base = (image) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onloadend = () => {
    return reader.result;
  };
};
export const formDataProcessor = ({ formData, data }) => {
  const {
    uploaded_image,
    productName,
    categories,
    brand,
    size,
    color,
    price,
    quantity,
    description,
  } = data;
  for (let i = 0; i < uploaded_image.length; i++) {
    formData.append('uploaded_image', uploaded_image[i]);
  }

  appendObjArrayToArrayInFormData(formData, categories, 'categories[]');
  appendObjArrayToArrayInFormData(formData, size, 'size[]');
  appendObjArrayToArrayInFormData(formData, color, 'color[]');
  formData.append('productName', productName);
  formData.append('brand', brand.value);
  formData.append('price', price);
  formData.append('quantity', quantity);
  formData.append('description', description);
  return formData;
};

export const toValueArray = (arrayOfObjects) => {
  const result = [];
  arrayOfObjects.forEach(({ value }) => {
    result.push(value);
  });
  return result;
};

export const appendObjArrayToArrayInFormData = (formData, ObjArray, label) => {
  ObjArray.forEach(({ value }) => {
    formData.append(label, value);
  });
  return formData;
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
