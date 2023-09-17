import {
  IProductForCart,
  ICategorizedProductsWithAttributesAndVariants,
  IProductWithPriceVariantsAndAttributes,
} from './interface';

export function parseProductsForCart(
  products: ICategorizedProductsWithAttributesAndVariants[]
): IProductForCart[] {
  const productsForCart = [];

  for (const category of products) {
    for (const product of category.products) {
      const productForCart = {
        id: product.id,
        name: product.name,
        quantity: 1,
        imagePath: product.imagePath,
        sellingPrice: product.sellingPrice,
        colorsAvailable: [] as string[],
        sizesAvailable: [] as string[],
      };

      if (product.attributes) {
        for (const attribute of product.attributes) {
          if (attribute.key === 'color') {
            productForCart.colorsAvailable.push(attribute.asset);
          }
          if (attribute.key === 'size') {
            productForCart.sizesAvailable.push(attribute.asset);
          }
        }
      }

      if (product.variants) {
        for (const variant of product.variants) {
          if (variant.attributes) {
            for (const attribute of variant.attributes) {
              if (attribute.key === 'color') {
                productForCart.colorsAvailable.push(attribute.asset);
              }
              if (attribute.key === 'size') {
                productForCart.sizesAvailable.push(attribute.asset);
              }
            }
          }
        }
      }

      productsForCart.push(productForCart);
    }
  }

  return productsForCart;
}

export function parseProductForCart(
  product: IProductWithPriceVariantsAndAttributes
): IProductForCart {
  const productForCart: IProductForCart = {
    id: product.id,
    name: product.name,
    imagePath: product.imagePath,
    quantity: 1,
    sellingPrice: product.sellingPrice,
    colorsAvailable: [],
    sizesAvailable: [],
  };

  if (product.attributes) {
    for (const attribute of product.attributes) {
      if (attribute.key === 'color') {
        productForCart.colorsAvailable.push(attribute.asset);
      }
      if (attribute.key === 'size') {
        productForCart.sizesAvailable.push(attribute.asset);
      }
    }
  }

  if (product.variants) {
    for (const variant of product.variants) {
      if (variant.attributes) {
        for (const attribute of variant.attributes) {
          if (attribute.key === 'color') {
            productForCart.colorsAvailable.push(attribute.asset);
          }
          if (attribute.key === 'size') {
            productForCart.sizesAvailable.push(attribute.asset);
          }
        }
      }
    }
  }

  return productForCart;
}
