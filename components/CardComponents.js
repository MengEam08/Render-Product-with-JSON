export const CardComponent = (product) => {
  const {
    _id,
    name,
    price: { minPrice },
    promoPrice: { minPrice: promoMinPrice },
    mainImage,
    stock,
    sold,
    merchant,
    provider,
    url,
  } = product;

  return `
    <div id="product-${_id}" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="${url}" target="_blank">
        <img class="mainImage p-8 rounded-t-lg h-[200px] w-auto object-cover" src="${
          mainImage || "No Image"
        }" alt="product image" />
      </a>
      <div class="px-5 pb-5">
        <a href="${url}" target="_blank">
          <h5 class="name line-clamp-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${name}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">${sold} sold</span>
          <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-3">${stock} in stock</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="price text-1xl font-bold text-gray-900 dark:text-white">${
            promoMinPrice ? promoMinPrice : minPrice
          } $</span>
          <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
        <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span class="merchant">Merchant: ${merchant}</span> |
          <span class="provider">Provider: ${provider}</span>
        </div>
      </div>
    </div>
  `;
};

// export function CardComponent(product) {
//   return `
//     <div class="bg-white shadow-md rounded-lg overflow-hidden my-4">
//       <img class="w-full h-48 object-cover" src="${product.mainImage}" alt="${product.name}">
//       <div class="p-4">
//         <h2 class="text-xl font-semibold">${product.name}</h2>
//         <p class="text-sm text-gray-500"><strong>Min Price:</strong> ${product.price.minPrice} <strong>Max Price:</strong> ${product.price.maxPrice}</p>
//         <p class="text-sm text-gray-500"><strong>Promo Price:</strong> Min: ${product.promoPrice.minPrice} Max: ${product.promoPrice.maxPrice}</p>
//         <p class="text-sm text-gray-500"><strong>Stock:</strong> ${product.stock} <strong>Sold:</strong> ${product.sold}</p>
//         <p class="text-sm text-gray-500"><a href="${product.url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700">View Product</a></p>
//       </div>
//     </div>
//   `;
// }
