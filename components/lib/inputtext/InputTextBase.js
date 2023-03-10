import { ObjectUtils } from '../utils/Utils';

export const InputTextBase = {
    defaultProps: {
        __TYPE: 'InputText',
        keyfilter: null,
        validateOnly: false,
        tooltip: null,
        tooltipOptions: null,
        themeProps: null,
        onInput: null,
        onKeyDown: null,
        onPaste: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, InputTextBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, InputTextBase.defaultProps),
    getComputedStyle: (props) => {
        const prefix = '--p-inputtext-';
        const variables = {
            font: {
                family: `var(${prefix}font-family, var(--p-font-family))`,
                size: `var(${prefix}font-size, var(--p-input-font-size, var(--p-font-size)))`
            },
            color: `var(${prefix}color, var(--p-input-color))`,
            background: `var(${prefix}background, var(--p-input-background))`,
            padding: {
                top: `var(${prefix}padding-top, var(--p-input-padding-top))`,
                right: `var(${prefix}padding-right, var(--p-input-padding-right))`,
                bottom: `var(${prefix}padding-bottom, var(--p-input-padding-bottom))`,
                left: `var(${prefix}padding-left, var(--p-input-padding-left))`
            },
            border: {
                width: `var(${prefix}border-width, var(--p-input-border-width))`,
                style: `var(${prefix}border-style, var(--p-input-border-style))`,
                color: `var(${prefix}border-color, var(--p-input-border-color))`,
                radius: `var(${prefix}border-radius, var(--p-border-radius))`
            },
            transition: `var(${prefix}transition, var(--p-form-element-transition))`,
            hover: {
                border: {
                    width: `var(${prefix}hover-border-width, var(--p-input-hover-border-width))`,
                    style: `var(${prefix}hover-border-style, var(--p-input-hover-border-style))`,
                    color: `var(${prefix}hover-border-color, var(--p-input-hover-border-color))`
                }
            },
            focus: {
                outline: {
                    color: `var(${prefix}focus-outline-color, var(--p-focus-outline-color))`,
                    style: `var(${prefix}focus-outline-style, var(--p-focus-outline-style))`,
                    width: `var(${prefix}focus-outline-width, var(--p-focus-outline-width))`,
                    offset: `var(${prefix}focus-outline-offset, var(--p-focus-outline-offset))`
                },
                border: {
                    width: `var(${prefix}focus-border-width, var(--p-input-focus-border-width))`,
                    style: `var(${prefix}focus-border-style, var(--p-input-focus-border-style))`,
                    color: `var(${prefix}focus-border-color, var(--p-input-focus-border-color))`
                },
                shadow: `var(${prefix}focus-shadow, var(--p-focus-shadow))`
            },
            error: {
                border: {
                    width: `var(${prefix}error-border-width, var(--p-input-error-border-width))`,
                    style: `var(${prefix}error-border-style, var(--p-input-error-border-style))`,
                    color: `var(${prefix}error-border-color, var(--p-input-error-border-color))`
                }
            },
            scale: {
                small: `var(${prefix}scale-small, var(--p-scale-small, 1))`,
                large: `var(${prefix}scale-large, var(--p-scale-large, 1))`
            }
        };
        const unstyled = `
.p-inputtext {
    margin: 0;
}
.p-fluid .p-inputtext {
    width: 100%;
}
/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}
.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}
.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}
/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}
.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}
.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}
.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
    top: -.75rem;
    font-size: 12px;
}
.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}
.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}
.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}
.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}
.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
        `;
        const styled = `
.p-inputtext {
    font-family: ${variables.font.family};
    font-size: ${variables.font.size};
    color: ${variables.color};
    background: ${variables.background};
    padding-top: ${variables.padding.top};
    padding-right: ${variables.padding.right};
    padding-bottom: ${variables.padding.bottom};
    padding-left: ${variables.padding.left};
    border-width: ${variables.border.width};
    border-style: ${variables.border.style};
    border-color: ${variables.border.color};
    border-radius: ${variables.border.radius};
    transition: ${variables.transition};
    appearance: none;
}
.p-inputtext:enabled:hover {
    border-width: ${variables.hover.border.width};
    border-style: ${variables.hover.border.style};
    border-color: ${variables.hover.border.color};
}
.p-inputtext:enabled:focus {
    outline-style: ${variables.focus.outline.style};
    outline-color: ${variables.focus.outline.color};
    outline-width: ${variables.focus.outline.width};
    outline-offset: ${variables.focus.outline.offset};
    border-width: ${variables.focus.border.width};
    border-style: ${variables.focus.border.style};
    border-color: ${variables.focus.border.color};
    box-shadow: ${variables.focus.shadow};
}
.p-inputtext.p-invalid.p-component {
    border-width: ${variables.error.border.width};
    border-style: ${variables.error.border.style};
    border-color: ${variables.error.border.color};
}
.p-inputtext-sm {
    font-size: calc(${variables.font.size} * ${variables.scale.small});
    padding-top: calc(${variables.padding.top} * ${variables.scale.small});
    padding-right: calc(${variables.padding.right} * ${variables.scale.small});
    padding-bottom: calc(${variables.padding.bottom} * ${variables.scale.small});
    padding-left: calc(${variables.padding.left} * ${variables.scale.small});
}
.p-inputtext-lg {
    font-size: calc(${variables.font.size} * ${variables.scale.large});
    padding-top: calc(${variables.padding.top} * ${variables.scale.large});
    padding-right: calc(${variables.padding.right} * ${variables.scale.large});
    padding-bottom: calc(${variables.padding.bottom} * ${variables.scale.large});
    padding-left: calc(${variables.padding.left} * ${variables.scale.large});
}
        `;

        //const cssVariables = ObjectUtils.convertToString(ObjectUtils.convertToCSSVariables(variables, 'p-inputtext-'));

        return `
/** module: inputtext **/
${unstyled}
${styled}
        `;
    }
};
