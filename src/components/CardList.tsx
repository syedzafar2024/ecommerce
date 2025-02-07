import React from "react";
import Card from "./Card";

const CardList: React.FC = () => {
  const cards = [
    { image: "/img/Mask table.png", title: "Side Table" },
    { image: "/img/sofa.png", title: "Sofa" },
  ];

  return (
    <div className= "flex w-[1440] h-[672] md:flex-row flex-col gap-10 bg-mygray">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-24 py-6">
      {cards.map((card, index) =>  (
        <Card key={index} image={card.image} title={card.title} />
      ))}
    </div>
    </div>
  );
};

export default CardList;
