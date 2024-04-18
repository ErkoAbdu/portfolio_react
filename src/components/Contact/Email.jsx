import React from "react";

const ButtonMailto = ({ mailto, label }) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = `mailto:${mailto}`;
    };

    return (
        <a href={`mailto:${mailto}`} onClick={handleClick}>
            {label}
        </a>
    );
};

export default ButtonMailto;
