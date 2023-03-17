export const CommonBase = {
    getStyleProps: (props) => {
        const prefix = 'p-';
        const variables = {
            font: {
                family: `var(${prefix}font-family)`,
                size: `var(${prefix}font-size)`
            },
            error: {
                color: `var(${prefix}error-color)`
            },
            transition: {
                duration: `var(${prefix}transition-duration)`
            },
            border: {
                radius: `var(${prefix}border-radius)`
            },
            primeicon: {
                font: {
                    size: `var(${prefix}primeicon-font-size)`
                }
            },
            inlineSpacing: `var(${prefix}inline-spacing)`,
            scale: {
                small: `var(${prefix}scale-small, 1)`,
                large: `var(${prefix}scale-large, 1)`
            },
            focus: {
                outline: {
                    style: `var(${prefix}focus-outline-style)`,
                    color: `var(${prefix}focus-outline-color)`,
                    width: `var(${prefix}focus-outline-width)`,
                    offset: `var(${prefix}focus-outline-offset)`
                },
                shadow: `var(${prefix}focus-shadow)`
            },
            input: {
                font: {
                    family: `var(${prefix}input-font-family, var(${prefix}font-family))`,
                    size: `var(${prefix}input-font-size, var(${prefix}font-size))`
                },
                padding: {
                    top: `var(${prefix}input-padding-top)`,
                    right: `var(${prefix}input-padding-right)`,
                    bottom: `var(${prefix}input-padding-bottom)`,
                    left: `var(${prefix}input-padding-left)`
                },
                slots: {
                    placeholder: {
                        color: `var(${prefix}input-placeholder-color)`
                    },
                    icon: {
                        color: `var(${prefix}input-icon-color)`
                    }
                },
                types: {
                    filled: {
                        background: `var(${prefix}input-filled-background)`,
                        states: {
                            hover: {
                                background: `var(${prefix}input-filled-hover-background)`
                            },
                            focus: {
                                background: `var(${prefix}input-filled-focus-background)`
                            }
                        }
                    }
                }
            }
        };
        const mixins = {
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
        };

        return { prefix, variables, mixins };
    },
    getComputedStyle: (props) => {
        const { variables, mixins } = CommonBase.getStyleProps(props);
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
    left: ${variables.input.padding.left};
    color: ${variables.input.slots.placeholder.color};
    transition-duration: ${variables.transition.duration};
}
.p-float-label > label.p-error {
    color: ${variables.error.color};
}
.p-input-icon-left > i:first-of-type,
.p-input-icon-left > svg:first-of-type,
.p-input-icon-left > .p-input-prefix {
    left: ${variables.input.padding.left};
    color: ${variables.input.slots.icon.color};
}
.p-input-icon-left > .p-inputtext {
    padding-left: calc(calc(${variables.input.padding.left} * 2) + ${variables.primeicon.fontSize});
}
.p-input-icon-left.p-float-label > label {
    left: calc(calc(${variables.input.padding.left} * 2) + ${variables.primeicon.fontSize});
}
.p-input-icon-right > i:last-of-type,
.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > .p-input-suffix {
    right: ${variables.input.padding.right};
    color: ${variables.input.slots.icon.color};
}
.p-input-icon-right > .p-inputtext {
    padding-right: calc(calc(${variables.input.padding.right} * 2) + ${variables.primeicon.fontSize});
}
${mixins.placeholder(`color: ${variables.input.slots.placeholder.color};`)}
.p-input-filled .p-inputtext {
    background: ${variables.input.types.filled.background};
}
.p-input-filled .p-inputtext:enabled:hover {
    background: ${variables.input.types.filled.states.hover.background};
}
.p-input-filled .p-inputtext:enabled:focus {
    background: ${variables.input.types.filled.states.focus.background};
}
.p-inputtext-sm .p-inputtext {
    font-size: calc(${variables.input.font.size} * ${variables.scale.small});
    padding-top: calc(${variables.input.padding.top} * ${variables.scale.small});
    padding-right: calc(${variables.input.padding.right} * ${variables.scale.small});
    padding-bottom: calc(${variables.input.padding.bottom} * ${variables.scale.small});
    padding-left: calc(${variables.input.padding.left} * ${variables.scale.small});
}
.p-inputtext-lg .p-inputtext {
    font-size: calc(${variables.input.font.size} * ${variables.scale.large});
    padding-top: calc(${variables.input.padding.top} * ${variables.scale.large});
    padding-right: calc(${variables.input.padding.right} * ${variables.scale.large});
    padding-bottom: calc(${variables.input.padding.bottom} * ${variables.scale.large});
    padding-left: calc(${variables.input.padding.left} * ${variables.scale.large});
}

        `;

        return `
/** module: common **/
${unstyled}
${styled}
        `;
    }
};
