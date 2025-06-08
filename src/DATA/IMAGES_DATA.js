// Import images
import image1 from '../assets/images/class_images/class_img_14.jpg';
import image2 from '../assets/images/class_images/class_img_2.jpg';
import image3 from '../assets/images/class_images/class_img_3.jpg';
import image4 from '../assets/images/class_images/class_img_4.jpg';
import image5 from '../assets/images/class_images/class_img_5.jpg';
import image6 from '../assets/images/class_images/class_img_12.jpg';
import image7 from '../assets/images/class_images/class_img_10.jpg';
import image8 from '../assets/images/class_images/class_img_8.jpg';

// Placeholder data for images

const IMAGES_DATA = [
    {
      id: 1,
      src: image1, // Use imported image
      alt: 'Hình ảnh hoạt động 1',
      category: 'Hoạt động',
      gridClass: 'md:col-span-2 md:row-span-2 aspect-[4/2.916]' // Rộng hơn, cao hơn (chiều cao tương đương Image 2)
    },
    {
      id: 2,
      src: image2, // Use imported image
      alt: 'Hình ảnh hoạt động 2',
      category: 'Hoạt động',
      gridClass: 'md:col-span-1 md:row-span-2 aspect-[2/3]' // Cao hơn, hẹp hơn (chiều cao tương đương Image 1)
    },
    {
      id: 3,
      src: image3, // Use imported image
      alt: 'Hình ảnh hoạt động 3',
      category: 'Hoạt động',
      gridClass: 'md:col-span-1 md:row-span-1 aspect-[8/9.176]' // Vuông nhỏ (chiều cao tương đương Image 4)
    },
    {
      id: 4,
      src: image4, // Use imported image
      alt: 'Hình ảnh hoạt động 4',
      category: 'Hoạt động',
      gridClass: 'md:col-span-2 md:row-span-1 aspect-[16/9]' // Rộng và ngắn (chiều cao tương đương Image 3)
    },
    {
      id: 5,
      src: image5, // Use imported image
      alt: 'Hình ảnh hoạt động 5',
      category: 'Hoạt động',
      gridClass: 'md:col-span-1 md:row-span-3 aspect-[4/8.73]' // Chiều cao bằng Image 6 + Image 8
    },
    {
      id: 6,
      src: image6, // Use imported image
      alt: 'Hình ảnh hoạt động 6',
      category: 'Hoạt động',
      gridClass: 'md:col-span-1 md:row-span-1 aspect-square' // Vuông nhỏ (tương tự 3)
    },
    {
      id: 7,
      src: image7, // Use imported image
      alt: 'Hình ảnh hoạt động 7',
      category: 'Hoạt động',
      gridClass: 'md:col-span-1 md:row-span-1 aspect-square' // Hình ảnh 7 nhỏ
    },
    {
      id: 8,
      src: image8, // Use imported image
      alt: 'Hình ảnh hoạt động 8',
      category: 'Hoạt động',
      gridClass: 'md:col-span-2 md:row-span-1 aspect-[16/9]' // Hình ảnh 8 chiếm phần còn lại
    }
  ];

  export default IMAGES_DATA;