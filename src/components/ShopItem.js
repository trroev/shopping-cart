import React from "react";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

export const ShopItem = ({ id, name, price, imgUrl }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-itmes-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
