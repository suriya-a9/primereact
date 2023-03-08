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
        const variables = {
            fontFamily: 'var(--p-inputtext-font-family, var(--p-font-family))',
            fontSize: 'var(--p-inputtext-font-size, var(--p-input-font-size, var(--p-font-size)))',
            color: 'var(--p-inputtext-color, var(--p-input-color))',
            background: 'var(--p-inputtext-background, var(--p-input-background))',
            paddingTop: 'var(--p-inputtext-padding-top, var(--p-input-padding-top))',
            paddingRight: 'var(--p-inputtext-padding-right, var(--p-input-padding-right))',
            paddingBottom: 'var(--p-inputtext-padding-bottom, var(--p-input-padding-bottom))',
            paddingLeft: 'var(--p-inputtext-padding-left, var(--p-input-padding-left))',
            borderWidth: 'var(--p-inputtext-border-width, var(--p-input-border-width))',
            borderStyle: 'var(--p-inputtext-border-style, var(--p-input-border-style))',
            borderColor: 'var(--p-inputtext-border-color, var(--p-input-border-color))',
            borderRadius: 'var(--p-inputtext-border-radius, var(--p-border-radius))',
            transition: 'var(--p-inputtext-transition, var(--p-form-element-transition))',
            hoverBorderWidth: 'var(--p-inputtext-hover-border-width, var(--p-input-hover-border-width))',
            hoverBorderStyle: 'var(--p-inputtext-hover-border-style, var(--p-input-hover-border-style))',
            hoverBorderColor: 'var(--p-inputtext-hover-border-color, var(--p-input-hover-border-color))',
            focusOutlineStyle: 'var(--p-inputtext-focus-outline-style, var(--p-focus-outline-style))',
            focusOutlineColor: 'var(--p-inputtext-focus-outline-color, var(--p-focus-outline-color))',
            focusOutlineWidth: 'var(--p-inputtext-focus-outline-width, var(--p-focus-outline-width))',
            focusOutlineOffset: 'var(--p-inputtext-focus-outline-offset, var(--p-focus-outline-offset))',
            focusBorderWidth: 'var(--p-inputtext-focus-border-width, var(--p-input-focus-border-width))',
            focusBorderStyle: 'var(--p-inputtext-focus-border-style, var(--p-input-focus-border-style))',
            focusBorderColor: 'var(--p-inputtext-focus-border-color, var(--p-input-focus-border-color))',
            focusShadow: 'var(--p-inputtext-focus-shadow, var(--p-focus-shadow))',
            errorBorderWidth: 'var(--p-inputtext-error-border-width, var(--p-input-error-border-width))',
            errorBorderStyle: 'var(--p-inputtext-error-border-style, var(--p-input-error-border-style))',
            errorBorderColor: 'var(--p-inputtext-error-border-color, var(--p-input-error-border-color))',
            scaleSmall: 'var(--p-inputtext-scale-small, var(--p-scale-small, 1))',
            scaleLarge: 'var(--p-inputtext-scale-large, var(--p-scale-large, 1))'
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
    font-family: var(--p-inputtext-font-family);
    font-size: var(--p-inputtext-font-size);
    color: var(--p-inputtext-color);
    background: var(--p-inputtext-background);
    padding-top: var(--p-inputtext-padding-top);
    padding-right: var(--p-inputtext-padding-right);
    padding-bottom: var(--p-inputtext-padding-bottom);
    padding-left: var(--p-inputtext-padding-left);
    border-width: var(--p-inputtext-border-width);
    border-style: var(--p-inputtext-border-style);
    border-color: var(--p-inputtext-border-color);
    border-radius: var(--p-inputtext-border-radius);
    transition: var(--p-inputtext-transition);
    appearance: none;
}
.p-inputtext:enabled:hover {
    border-width: var(--p-inputtext-hover-border-width);
    border-style: var(--p-inputtext-hover-border-style);
    border-color: var(--p-inputtext-hover-border-color);
}
.p-inputtext:enabled:focus {
    outline-style: var(--p-inputtext-focus-outline-style);
    outline-color: var(--p-inputtext-focus-outline-color);
    outline-width: var(--p-inputtext-focus-outline-width);
    outline-offset: var(--p-inputtext-focus-outline-offset);
    border-width: var(--p-inputtext-focus-border-width);
    border-style: var(--p-inputtext-focus-border-style);
    border-color: var(--p-inputtext-focus-border-color);
    box-shadow: var(--p-inputtext-focus-shadow);
}
.p-inputtext.p-invalid.p-component {
    border-width: var(--p-inputtext-error-border-width);
    border-style: var(--p-inputtext-error-border-style);
    border-color: var(--p-inputtext-error-border-color);
}
.p-inputtext-sm {
    font-size: calc(var(--p-inputtext-font-size) * var(--p-inputtext-scale-small));
    padding-top: calc(var(--p-inputtext-padding-top) * var(--p-inputtext-scale-small));
    padding-right: calc(var(--p-inputtext-padding-right) * var(--p-inputtext-scale-small));
    padding-bottom: calc(var(--p-inputtext-padding-bottom) * var(--p-inputtext-scale-small));
    padding-left: calc(var(--p-inputtext-padding-left) * var(--p-inputtext-scale-small));
}
.p-inputtext-lg {
    font-size: calc(var(--p-inputtext-font-size) * var(--p-inputtext-scale-large));
    padding-top: calc(var(--p-inputtext-padding-top) * var(--p-inputtext-scale-large));
    padding-right: calc(var(--p-inputtext-padding-right) * var(--p-inputtext-scale-large));
    padding-bottom: calc(var(--p-inputtext-padding-bottom) * var(--p-inputtext-scale-large));
    padding-left: calc(var(--p-inputtext-padding-left) * var(--p-inputtext-scale-large));
}
        `;

        const cssVariables = ObjectUtils.convertToString(ObjectUtils.convertToCSSVariables(variables, 'p-inputtext-'));

        return `
/** module: inputtext **/
.p-inputtext {
    ${cssVariables}
}
${unstyled}
${styled}
        `;
    }
};
