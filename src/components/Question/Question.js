import React from "react";

export const Question = ({ text, author }) => {

    return (
        <div>
            <span>
                {author}: {text}
            </span>
        </div>
    );
};
