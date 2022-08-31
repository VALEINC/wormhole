import React from "react";

type PrimaryButtonProps = {
    onClick: () => void;
    children?: React.ReactNode;
    width: string;
    marginX: string;
    enabled?: boolean;
    disabledText: string;
    currentPath?: string;
    startIcon?: JSX.Element;
};

const defaultProps = {
    enabled: true,
    currentPath: "/"
};

function PrimaryButton({ onClick, children, width, marginX, enabled, disabledText, currentPath, startIcon }: PrimaryButtonProps) {
    return (
        <>
            {enabled
                ?
                <button
                    type="button"
                    onClick={onClick}
                    className={"bg-[#FE6577] hover:bg-red-500" + " " + "text-white" + " " + marginX + " " + width + " " + `inline-flex items-center my-2 px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white`}
                >
                    <div className="mx-auto flex flex-row gap-3 items-center">
                        {startIcon && startIcon}
                        {children}
                    </div>

                </button>
                :
                <button
                    disabled
                    type="button"
                    className={marginX + " " + width + " " + "inline-flex items-center my-2 px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-gray-300 bg-gray-600 cursor-default"}
                >
                    <div className="mx-auto">
                        {disabledText}
                    </div>

                </button>
            }
        </>
    );
}
PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;