import { ProductDetail } from "app/types/productDetail";

export default function Product({ product }: { product: ProductDetail }) {
  console.log(product);

  const totalStars = 5;

  return (
    <div className="bg-purple-600 min-h-screen py-6">
      <div className="container bg-white rounded-lg shadow-md mx-auto px-2 py-2">
        <div className="flex flex-wrap">
          <div className=" md:w-1/4 m-auto">
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="object-fit"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mt-4">
            <p className="text-sm tracking-tight text-blue-500">
              ={product.mkName}
            </p>
            <h2 className="mb-4">{product.productName}</h2>
            <div className="mb-6">
              {[...Array(totalStars)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <span
                    key={index}
                    style={{
                      color:
                        currentRating <= product.rating ? "#ffc107" : "#e4e5e9",
                    }}
                  >
                    &#9733;
                  </span>
                );
              })}
            </div>
            <p className="text-gray-700 mb-8">
              Intelligence is designed to protect your privacy at every step. It
              is integrated into the core of iPhone through on-device
              processing. So it is aware of your personal information without
              collecting your personal information.
            </p>

            <div className="mb-12">
              <p className="text-md font-semibold mb-2">Storage:</p>
              <div className="flex space-x-2">
                {product.storageOptions.map((storage) => (
                  <button
                    key={storage}
                    className="w-32 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            <button className="bg-amber-300 items-center text-gray-100 px-6 py-2 mb-12 rounded-md hover:bg-amber-400">
              Add to Cart
            </button>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Ultra Wide camera</li>
                <li>Even longer battery life</li>
                <li>Durable design</li>
                <li>Action button</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
