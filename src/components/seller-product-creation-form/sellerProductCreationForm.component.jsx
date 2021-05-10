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
} from './optionsData';

const initialValues = {
  productImages: ['dadasdsadssasa.png'],
  productName: '',
  categories: [],
  brand: [],
  price: 0,
  size: [],
  color: [],
  quantity: 0,
  description: '',
};

const ProductCreationForm = () => {
  return (
    <div className="product-creation-form-wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          //make async call
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({
          values,
          isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
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
              <span className="row-label">NAME</span>
              <input
                className="input-field"
                name="productName"
                value={values.productName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Linen Party Shirt"
              />
            </div>
            <div className="seller-product-creation-row">
              <span className="row-label">CATEGORIES</span>
              <div className="input-field">
                <Select
                  options={categoriesOptions}
                  onChange={(value) => setFieldValue('categories', value)}
                  placeholder="Party Dresses"
                  isSearchable
                  isMulti
                />
              </div>
            </div>
            <div className="seller-product-creation-row">
              <span className="row-label">BRAND</span>
              <Select
                className="input-field"
                options={brandOptions}
                onChange={(value) => setFieldValue('brand', value)}
                placeholder="Zara"
                isSearchable
                isMulti
              />
            </div>

            <div className="seller-product-creation-row">
              <span className="row-label">PRICE ($)</span>
              <input
                className="input-field"
                name="price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="seller-product-creation-row">
              <span className="row-label">SIZE</span>
              <Select
                className="input-field"
                options={sizeOptions}
                onChange={(value) => setFieldValue('size', value)}
                placeholder="S"
                isSearchable
                isMulti
              />
            </div>
            <div className="seller-product-creation-row">
              <span className="row-label">COLORS</span>
              <Select
                className="input-field"
                options={colorOptions}
                onChange={(value) => setFieldValue('color', value)}
                placeholder="White"
                isSearchable
                isMulti
              />
            </div>
            <div className="seller-product-creation-row">
              <span className="row-label">QUANTITY</span>
              <input
                className="input-field"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="seller-product-creation-row">
              <span className="row-label">DESCRIPTION</span>
              <textarea
                className="input-field"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

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
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>s */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ProductCreationForm;
