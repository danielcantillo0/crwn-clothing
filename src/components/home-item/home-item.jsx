import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./home-item.styles";

const HomeItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default HomeItem;
