import { Link } from "react-router-dom";
import { ProductType } from "../../TypeScript/products/types";
import "./ItemCard.css";

interface Props {
  item: ProductType
}

const ItemCard = ({ item }: Props) => {
  return (
    <>
      <li key={item.item_id}>
        <div className="item">
          <Link to={'/product/' + item.item_id} className="item-image-wrapper">
              <img className="item-image" src={item.imageUrl} alt="item" />
          </Link>
          <div className="item-info">
            <div className="item-name">
              <Link to={'/product/' + item.item_id}>{item.name}</Link>
            </div>
            <div className="item-brand">{item.title}</div>
            <div className="item-price">${item.price}</div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ItemCard;
