import { ChangeEvent, FC } from 'react';

import css from './textarea.module.scss';

interface TextAreaProps {
    defaultValue?: string;
    onChange?: (this: Window, ev: ChangeEvent<HTMLTextAreaElement>) => any;
}

const TextArea: FC<TextAreaProps> = ({ defaultValue, onChange }) => {
    return <textarea className={css.textarea} defaultValue={defaultValue} onChange={onChange} />;
}

export default TextArea;
