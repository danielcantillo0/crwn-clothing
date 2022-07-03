import HomeItem from "../home-item/home-item";

import { DirectoryContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <HomeItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
