// import React from 'react';

// const Product = ({ image, name, price }) => {
//   // console.log(image, name, price)    // try this if errors
//   return <article className='product'>
//     {/* <h4>single product</h4> */}
//     <img src={image.url} alt={name} />
//     <h4>{name}</h4>
//     <p>${price}</p>
//   </article >;
// };

// export default Product;



import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  const url = image && image.url
  console.log(image, name, price)
  return (
    <article className='product'>
      {/* <h4>single product</h4> */}
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  )
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

// Product.defaultProps = {
//   name: 'default-name',
//   price: 3.99,
//   image: defaultImage
// }

export default Product;