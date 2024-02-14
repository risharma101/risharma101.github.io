import React from 'react';

// Define a type for the component props
interface SkillButtonProps {
  svg: React.ElementType; // Specifies that 'svg' is a React component
  label: string;
}

const SkillButton: React.FC<SkillButtonProps> = ({ svg: SvgIcon, label }) => {
  return (
    <div 
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '5px',
      }}
    >
      {/* Render the SVG component passed as prop */}
      <SvgIcon style={{ width: '50px', height: '50px' }} />
      <p style={{ marginTop: '5px' }}>{label}</p>
    </div>
  );
};

export default SkillButton;
