import React from "react";
import "./Shipping-policy.css"; // External CSS file

const ShippingPolicy = () => {
  return (
    <article
      className="post-2885 page type-page status-publish ast-article-single"
      id="post-2885"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <header className="entry-header">
        <h1 className="entry-title" itemProp="headline">
          SHIPPING POLICY
        </h1>
      </header>

      <div
        className="entry-content clear"
        ast-blocks-layout="true"
        itemProp="text"
      >
        <h3 className="wp-block-heading has-text-align-center">
          SHIPPING POLICY
        </h3>

        <p>
          Generally, the processing takes 1 business day to hand over the
          products to the shipping partner. However, dispatch may take 1 to 7
          days in real time. Please allow us to bring the best product to your
          doorstep.
        </p>

        <p>
          We at Rong Dhong care for you, and we’ve waived off shipping fees
          across products. Shipping is free across India.
        </p>
      </div>
    </article>
  );
};

export default ShippingPolicy;
