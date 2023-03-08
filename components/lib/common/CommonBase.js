import { ObjectUtils } from '../utils/Utils';

export const CommonBase = {
    mixins: {
        placeholder: (content = '') => `
::-webkit-input-placeholder {
    ${content}
}
:-moz-placeholder {
    ${content}
}
::-moz-placeholder {
    ${content}
}
:-ms-input-placeholder {
    ${content}
}
        `
    },
    getComputedStyle: (props) => {
        const variables = {
            inputPaddingLeft: 'var(--p-common-input-padding-left, var(--p-input-padding-left))',
            inputPaddingRight: 'var(--p-common-input-padding-right, var(--p-input-padding-right))',
            inputPlaceholderColor: 'var(--p-common-input-placeholder-color, var(--p-input-placeholder-color))',
            errorColor: 'var(--p-common-error-color, var(--p-error-color))',
            inputIconColor: 'var(--p-common-input-icon-color, var(--p-input-icon-color))',
            primeiconFontSize: 'var(--p-common-primeicon-font-size, var(--p-primeicon-font-size))'
        };
        const unstyled = `
.p-component, .p-component * {
    box-sizing: border-box;
}

.p-hidden {
    display: none;
}

.p-hidden-space {
    visibility: hidden;
}

.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled, .p-disabled * {
    cursor: default !important;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overflow-hidden {
    overflow: hidden;
}

.p-unselectable-text {
    user-select: none;
}

.p-scrollbar-measure {
    width: 100px;
    height: 100px;
    overflow: scroll;
    position: absolute;
    top: -9999px;
}

@-webkit-keyframes p-fadein {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}
@keyframes p-fadein {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}

.p-link {
    text-align: left;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
    cursor: default;
}

/* Non react overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
}

/* React based overlay animations */
.p-connected-overlay-enter {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-enter-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-enter-done {
    transform: none;
}

.p-connected-overlay-exit {
    opacity: 1;
}

.p-connected-overlay-exit-active {
    opacity: 0;
    transition: opacity .1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter {
    max-height: 0;
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
}

.p-toggleable-content-enter-done {
    transform: none;
}

.p-toggleable-content-exit {
    max-height: 1000px;
}

.p-toggleable-content-exit-active {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
}
        `;
        const styled = `
/***** _inputtext.scss *****/
.p-float-label > label {
    left: var(--p-common-input-padding-left);
    color: var(--p-common-input-placeholder-color);
    transition-duration: $transitionDuration;
}

.p-float-label > label.p-error {
    color: var(--p-common-error-color);
}

.p-input-icon-left > i:first-of-type,
.p-input-icon-left > svg:first-of-type,
.p-input-icon-left > .p-input-prefix {
    left: var(--p-common-input-padding-left);
    color: var(--p-common-input-icon-color);
}

.p-input-icon-left > .p-inputtext {
    padding-left: calc(calc(var(--p-common-input-padding-left) * 2) + var(--p-primeicon-font-size));
}

.p-input-icon-left.p-float-label > label {
    left: calc(calc(var(--p-common-input-padding-left) * 2) + var(--p-primeicon-font-size));
}

.p-input-icon-right > i:last-of-type,
.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > .p-input-suffix {
    right: var(--p-common-input-padding-right);
    color: var(--p-common-input-icon-color);
}

.p-input-icon-right > .p-inputtext {
    padding-right: calc(calc(var(--p-common-input-padding-right) * 2) + var(--p-primeicon-font-size));
}

${CommonBase.mixins.placeholder(`color: var(--p-common-input-placeholder-color);`)}
        `;

        const cssVariables = ObjectUtils.convertToString(ObjectUtils.convertToCSSVariables(variables, 'p-common-'));

        return `
/** module: common **/
:root {
    ${cssVariables}
}
${unstyled}
${styled}
        `;
    }
};
