import React from "react";
import Example from "./Card1";

function FourCards() {
    const cardData = [
        {
            title: "ENVIRONMENTAL SUSTAINABILITY",
            description: ["SDG 6: Clean Water and Sanitation", "SDG 7: Affordable and Clean Energy", "SDG 11: Sustainable Cities and Communities", "SDG 12: Responsible Consumption and Production", "SDG 12: Responsible Consumption and Production", "SDG 14: Life Below Water", "SDG 15: Life On Land"],
            color: "green",
        },
        {
            title: "ECONOMIC DEVELOPMENT",
            description: ["SDG 1: No Poverty", "SDG 2: Zero Hunger", "SDG 8: Decent Work and Economic Growth","SDG 9: Industry, Innovation, and Infrastructure","SDG 10: Reduced Inequalities"],
            color: "blue",
        },
        {
            title: "SOCIAL DEVELOPMENT",
            description: ["SDG 3: Good Health and Well-Being", "SDG 4: Quality Education", "SDG 5: Gender Equality"],
            color: "pink",
        },
        {
            title: "PARTNERSHIPS FOR THE GOAL",
            description: ["SDG 17: Partnerships for the Goals"],
            color: "purple",
        }
    ];

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-row items-center">
                {cardData.map((card, index) => (
                    <Example
                        key={index}
                        title={card.title}
                        description={card.description}
                        color={card.color}
                    />
                ))}
            </div>
        </div>
    );
}

export default FourCards;
