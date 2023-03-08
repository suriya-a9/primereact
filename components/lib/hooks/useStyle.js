/* eslint-disable */
import * as React from 'react';
import { DomHandler } from '../utils/Utils';

/* @todo */
//data-prime="global"
export const useStyle = (styles, options = {}) => {
    if (!DomHandler.hasDOM()) return;

    React.useInsertionEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.setAttribute('data-prime', 'global');
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    return 'status'; // styleElement
};
/* eslint-enable */
