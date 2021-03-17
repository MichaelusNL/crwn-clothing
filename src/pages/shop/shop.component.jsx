import React from "react";
import shopping_data from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopping_data,
    };
  }
  render() {
    const { collections } = this.state;

    collections.map(({ id, ...restCol }) =>
      console.log({ ...restCol }, { restCol })
    );

    return (
      <div className="shop-page">
        {collections.map(({ id, ...restCol }) => (
          <CollectionPreview key={id} {...restCol} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
