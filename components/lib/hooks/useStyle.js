/* eslint-disable */
import * as React from 'react';
import { DomHandler } from '../utils/Utils';

/* @todo */
//data-prime-type="global | scoped"
//data-prime-key="...."

// options.use = "join | split" include | exclude
export const useStyle = ({ style, options = {}, props = {} }) => {
    if (!DomHandler.hasDOM()) return;

    const scoped = options.type === 'scoped';
    const type = scoped ? 'scoped' : 'global';
    const global = !scoped;
    const styleElement = React.useRef(undefined);
    const key = React.useRef(options.key);

    React.useInsertionEffect(() => {
        styleElement.current = DomHandler.findSingle(document, `style[data-prime-type="${type}"]`) || document.createElement('style');
        Object.entries(props).forEach(([pKey, pVal]) => styleElement.current.setAttribute(pKey, pVal));
        styleElement.current.setAttribute('data-prime-type', scoped ? 'scoped' : 'global');
        //scoped && styleElement.current.setAttribute('data-prime-key', key);
        //styleElement.current.innerHTML += styles;
        styleElement.current.primeStyleMap = styleElement.current.primeStyleMap || new Map();
        styleElement.current.primeStyleMap.set(key.current, style);
        styleElement.current.innerHTML = '';
        styleElement.current.primeStyleMap.forEach((v) => (styleElement.current.innerHTML += v));
        document.head.appendChild(styleElement.current);

        return () => {
            styleElement.current.primeStyleMap.delete(key.current);
            styleElement.current.primeStyleMap.size === 0 && styleElement.current?.remove();
        };
    }, []);

    return 'status'; // styleElement
};
/* eslint-enable */
