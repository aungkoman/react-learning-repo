import { useParams } from "react-router-dom";
const ShopPage = () => {
    let { url } = useParams();

    return <h1>Shop Page - { url }</h1>;
};
export default ShopPage;