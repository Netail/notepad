import { ChangeEvent, FC, ReactNode } from 'react';

import css from './textarea.module.scss';

interface TextAreaProps {
    children?: ReactNode;
    onChange?: (this: Window, ev: ChangeEvent<HTMLTextAreaElement>) => any;
}

const TextArea: FC<TextAreaProps> = ({ children, onChange }) => {
    return (
        <textarea className={css.textarea} onChange={onChange}>
            { children }
        </textarea>
    );
}

export default TextArea;
