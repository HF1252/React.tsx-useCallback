import React from 'react';

type Props = {
    buttonText: string;
    onClick: () => void;
};

//React.memoでラップすることでButtonコンポーネントに渡すPropsに変更がない場合は再レンダリングされない
//React.memoでPropsの前後の値を比較してレンダリングするかを決定しています。
const Button: React.VFC<Props> = React.memo(({ buttonText, onClick }) => {
    console.log(`Button${buttonText}`);

    return (
        <div>
            <button
                style={{
                    backgroundColor: '#13448f',
                    borderRadius: 22,
                    border: 'none',
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 'bold',
                    padding: '8px 16px',
                    width: 160,
                    cursor: 'pointer',
                }}
                onClick={onClick}
                type="button"
            >
                {buttonText}
            </button>
        </div>
    );
});

export default Button;
