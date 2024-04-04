import ContentLoader from "react-content-loader";

const ProductSkeleton = (props: any) => (
  <ContentLoader
    width={"100%"}
    height={"100%"}
    // viewBox="0 0 450 400"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="304" rx="4" ry="4" width="271" height="9" />
    <rect x="0" y="323" rx="3" ry="3" width="119" height="6" />
    <rect x="0" y="77" rx="10" ry="10" width="388" height="400" />
  </ContentLoader>
);

export default ProductSkeleton;
