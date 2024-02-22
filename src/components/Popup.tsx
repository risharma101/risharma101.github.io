// Popup.tsx
import React from 'react';
import { motion } from 'framer-motion';
import profpic from '../assets/profilepic.jpg';
import { SlideData } from '../types';

interface PopupProps {
    onClose: () => void;
    slideData: SlideData;
}

const Popup: React.FC<PopupProps> = ({ onClose, slideData }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000, // Ensure it's above other content
        }}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'relative',
                    width: '80%', // Adjust width as needed
                    height: '80%',
                    // maxHeight: '70%', // Adjust height as needed
                    backgroundColor: '#141414',
                    padding: '20px',
                    overflowY: 'auto', // Make content scrollable
                    borderRadius: '10px', // Optional: adds rounded corners
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 2)', // Optional: adds a subtle shadow
                }}
            >
                <motion.button onClick={onClose} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ cursor: 'pointer', backgroundColor: 'transparent', color: 'white', border: 'none', fontSize: '24px', fontStyle: 'bold',  position: 'absolute', top: '20px', right: '20px' }}>X</motion.button>
                {/* <h3>{slideData.title}</h3>
                <p>{slideData.description}</p>
                <img src={slideData.img} style={{ height: '500px', maxHeight: '500px' }} /> */}
                {slideData.component && <slideData.component />}

            </motion.div>
        </div>
    );
};

export default Popup;
