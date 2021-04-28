import React, { useState } from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
const sections = [
  {
    title: 'OUTFIT OF THE WEEK',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    size: 'large',
    id: 1,
  },
  {
    title: 'men',
    imageUrl:
      'https://i.pinimg.com/564x/1c/cc/be/1cccbe0ec79b484a367a704c8d08bfbf.jpg',
    id: 2,
  },
  {
    title: 'ladies',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    id: 3,
  },
  {
    title: 'boys',
    imageUrl:
      'https://img.pngio.com/bad-boy-style-outfits-for-men-mens-fashion-leather-jacket-man-in-bad-clothes-png-638_1128.png',
    id: 4,
  },
  {
    title: 'girl',
    imageUrl:
      'https://www.pngkey.com/png/full/212-2126022_iu-fashion-gangnam-style-park-shin-hye-korean.png',
    id: 5,
  },
];

const Directory = () => {
  // eslint-disable-next-line
  const [section, setSections] = useState(sections);
  return (
    <div className="directory-menu">
      {section.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
