import tw from 'twin.macro';
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';

interface Props {
    title: string | React.ReactNode;
    className?: string;
    children: React.ReactNode;
}

const TitledGreyBox = ({ title, children, className }: Props) => (
    <div css={tw`shadow-2xl bg-neutral-900`} className={className}>
        <div css={tw`bg-neutral-900 p-3 border-b border-black`}>
            {typeof title === 'string' ? <p css={tw`font-semibold font-sans line-clamp-1 text-lg`}>{title}</p> : title}
        </div>
        <div css={tw`p-3`}>{children}</div>
    </div>
);

export default memo(TitledGreyBox, isEqual);
