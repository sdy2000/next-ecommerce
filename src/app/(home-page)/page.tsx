import { CategoriesList, ProductList, Slider } from "./_components";

const HomePage = () => {
  return (
    <div className="">
      {/* <Slider /> */}
      {/* <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <ProductList />
      </div> */}
      <div className="mt-24">
        <h2 className="text-2xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h2>
        <CategoriesList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl font-semibold">New Products</h2>
      </div>
    </div>
  );
};

export default HomePage;
