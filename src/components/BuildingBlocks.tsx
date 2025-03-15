import React from "react";
import { motion } from "framer-motion";
import "./BuildingBlocks.css";

const BuildingBlocks = () => {
    // Define all 6 blocks in their rows
    const blockRows = [
        // Bottom row (3 blocks)
        [
            { id: "block1", x: -90 },
            { id: "block2", x: 0 },
            { id: "block3", x: 90 },
        ],
        // Middle row (2 blocks)
        [
            { id: "block4", x: -45 },
            { id: "block5", x: 45 },
        ],
        // Top row (1 block)
        [
            { id: "block6", x: 0 },
        ],
    ];

    return (
        <div className="building-blocks-container">
            {blockRows
                .slice() // Create a copy of the array
                .reverse() // Reverse the order of rows
                .map((row, rowIndex) => (
                    <div key={rowIndex} className="block-row">
                        {row.map((block, blockIndex) => (
                            <motion.div
                                key={block.id}
                                className="block"
                                // drag // Enables drag-and-drop
                                // dragConstraints={{
                                //     top: -200,
                                //     bottom: 200,
                                //     left: -200,
                                //     right: 200,
                                // }} // Limits the drag area
                                // whileDrag={{
                                //     scale: 1.1,
                                // }}
                                initial={{ y: 200, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                    delay: 2.5 - rowIndex * 0.9 - (2 - blockIndex) * 0.3, // Sequential delay for each block
                                }}
                            />
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default BuildingBlocks;
