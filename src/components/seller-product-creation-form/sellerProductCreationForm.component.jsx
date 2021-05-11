import './sellerProductCreationForm.styles.scss';
import React from 'react';

import { Formik } from 'formik';
import { Button } from '@material-ui/core';
import Select from 'react-select';

import {
  colorOptions,
  sizeOptions,
  categoriesOptions,
  brandOptions,
  handleSubmit,
} from './productCreationFormUtils';

import * as Yup from 'yup';
const prod = {
  size: ['S', 'L', 'XS'],
  name: 'Lime Skirt',
  brand: ['Zara'],
  price: 400,
  color: ['blue', 'black', 'brown'],
  stock: 500,
  categories: ['MaxiMidiDresses', 'Clothes'],
};
const productCreationSchema = Yup.object().shape({
  productImages: Yup.array(),
  productName: Yup.string().required(),
  categories: Yup.array().required(),
  brand: Yup.object().required(),
  price: Yup.number().required(),
  size: Yup.array().required(),
  color: Yup.array().required(),
  quantity: Yup.number().required(),
  description: Yup.string().required(),
});

const initialValues = {
  productImages: '',
  productName: '',
  categories: '',
  brand: '',
  price: '',
  size: '',
  color: '',
  quantity: '',
  description: '',
};

const ProductCreationForm = () => {
  return (
    <div className="product-creation-form-wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleSubmit(data);
          setSubmitting(false);
          resetForm();
        }}
        validationSchema={productCreationSchema}
      >
        {({
          values,
          isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} className="product-creation-form">
            <div className="seller-product-creation-row">
              <span className="row-label">PHOTOS</span>
              <div className="upload-image-buttons">
                <button className="upload-button">
                  <span className="icon icon-add-solid"></span>
                </button>
                <button className="upload-button">
                  <span className="icon icon-add-solid"></span>
                </button>
                <button className="upload-button">
                  <span className="icon icon-add-solid"></span>
                </button>
                <button className="upload-button">
                  <span className="icon icon-add-solid"></span>
                </button>
              </div>
            </div>
            <div className="seller-product-creation-row">
              <span className="row-label">NAME*</span>
              <input
                className="input-field"
                name="productName"
                value={values.productName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Linen Party Shirt"
              />
            </div>
            {errors.productName && touched.productName ? (
              <div className="seller-form-error">{errors.productName}</div>
            ) : null}
            <div className="seller-product-creation-row">
              <span className="row-label">CATEGORIES*</span>
              <div className="input-field">
                <Select
                  value={values.categories || ''}
                  options={categoriesOptions}
                  onChange={(value) => setFieldValue('categories', value)}
                  onBlur={() => setFieldTouched('categories', true)}
                  isSearchable
                  isMulti
                />
              </div>
            </div>
            {errors.categories && touched.categories ? (
              <div className="seller-form-error">{errors.categories}</div>
            ) : null}
            <div className="seller-product-creation-row">
              <span className="row-label">BRAND*</span>
              <Select
                className="input-field"
                value={values.brand || ''}
                options={brandOptions}
                onChange={(value) => setFieldValue('brand', value)}
                onBlur={() => setFieldTouched('brand', true)}
                isSearchable
              />
            </div>
            {errors.brand && touched.brand ? (
              <div className="seller-form-error">{errors.brand}</div>
            ) : null}
            <div className="seller-product-creation-row">
              <span className="row-label">PRICE ($)*</span>
              <input
                className="input-field"
                name="price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.price && touched.price ? (
              <div className="seller-form-error">{errors.price}</div>
            ) : null}
            <div className="seller-product-creation-row">
              <span className="row-label">SIZE*</span>
              <Select
                value={values.size || ''}
                className="input-field"
                options={sizeOptions}
                onChange={(value) => setFieldValue('size', value)}
                onBlur={() => setFieldTouched('size', true)}
                isSearchable
                isMulti
              />
            </div>
            {errors.size && touched.size ? (
              <div className="seller-form-error">{errors.size}</div>
            ) : null}
            <div className="seller-product-creation-row">
              <span className="row-label">COLORS*</span>
              <Select
                className="input-field"
                value={values.color || ''}
                options={colorOptions}
                onChange={(value) => setFieldValue('color', value)}
                onBlur={() => setFieldTouched('color', true)}
                isSearchable
                isMulti
              />
            </div>
            {errors.color && touched.color ? (
              <div className="seller-form-error">{errors.color}</div>
            ) : null}
            <div className="seller-product-creation-row">
              <span className="row-label">QUANTITY*</span>
              <input
                className="input-field"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.quantity && touched.quantity ? (
              <div className="seller-form-error">{errors.quantity}</div>
            ) : null}
            <div className="seller-product-creation-row">
              <span className="row-label">DESCRIPTION*</span>
              <textarea
                className="input-field"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.description && touched.description ? (
              <div className="seller-form-error">{errors.description}</div>
            ) : null}
            <div className="seller-product-creation-row">
              <Button
                className="product-creation-form__button-secondary"
                disabled={isSubmitting}
              >
                cancel
              </Button>
              <Button
                className="product-creation-form__button-primary"
                disabled={isSubmitting}
                type="submit"
              >
                Complete
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ProductCreationForm;
