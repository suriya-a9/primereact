import * as React from 'react';
import { useStyle } from '../hooks/useStyle';
import { classNames, IconUtils } from '../utils/Utils';
import { TagBase } from './TagBase';
import { TagStyleBase } from './TagStyleBase';

export const Tag = React.forwardRef((inProps, ref) => {
    const props = TagBase.getProps(inProps);

    useStyle({ style: TagStyleBase.getComputedStyle(), options: { key: 'tag' } });
    const elementRef = React.useRef(null);
    const otherProps = TagBase.getOtherProps(props);
    const className = classNames(
        'p-tag p-component',
        {
            [`p-tag-${props.severity}`]: props.severity !== null,
            'p-tag-rounded': props.rounded
        },
        props.className
    );
    const icon = IconUtils.getJSXIcon(props.icon, { className: 'p-tag-icon' }, { props });

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    return (
        <span ref={elementRef} className={className} style={props.style} {...otherProps}>
            {icon}
            <span className="p-tag-value">{props.value}</span>
            <span>{props.children}</span>
        </span>
    );
});

Tag.displayName = 'Tag';
