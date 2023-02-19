import Directory from "../../components/directory/Directory";
import categoriesData from "../../data/catagoriesData";

const Home = () => {
  return <Directory categories={categoriesData} />;
};

export default Home;
