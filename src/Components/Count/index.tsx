import React from 'react';

type Props = {
    countTitle: string;
    count: number;
};

const Count: React.VFC<Props> = React.memo(({ countTitle, count }) => {
    console.log(`Count:${countTitle}`);

    return (
        <div
            style={{
                marginBottom: 8,
                fontSize: 24,
                fontWeight: 600,
            }}
        >
            {countTitle}:
            <span
                style={{
                    marginLeft: 4,
                }}
            >
                {count}人
            </span>
        </div>
    );
});

export default Count;
