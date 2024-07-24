import { ProductList, Slider } from "./_components";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
