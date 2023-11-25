const products = [
  {
    id: '1',
    name: 'Sony Alpha 7II',
    price: 1000,
    category: 'Camaras',
    img: 'https://i.ebayimg.com/images/g/1AIAAOSwyNRlLVlJ/s-l1600.jpg',
    stock: 10,
    description: 'Descripcion de Camara Sony'
  },
  {
    id: '2',
    name: 'Sony 85mm F 1.8',
    price: 500,
    category: 'Lentes',
    img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/lens/q/d/m/-original-imagjsavnhgmyv3w.jpeg?q=90',
    stock: 15,
    description: 'Descripcion de Objetivo Sony'
  },
  {
    id: '3',
    name: 'Sony 28-70mm F 3.5',
    price: 300,
    category: 'Lentes',
    img: 'https://media.the-digital-picture.com/Images/Review/Sony-FE-28-70mm-f-3.5-5.6-OSS-Lens.jpg',
    stock: 20,
    description: 'Descripcion de Lente Sony'
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    },)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
}

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.category === categoryId))
    }, 500)
  })
}