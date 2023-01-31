import Categories from "../../components/category-list/Categories";
import categoriesData from "../../data/catagoriesData";

const Home = () => {
  return <Categories categories={categoriesData} />;
};

export default Home;
