export const CommonStyleBase = {
    prefix: '--p-',
    mixins: {
        placeholder(content = '') {
            return `
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
}`;
        }
    },
    getVariables() {
        const { prefix } = this;

        return {
            font: {
                family: `var(${prefix}font-family)`,
                size: `var(${prefix}font-size)`,
                weight: `var(${prefix}font-weight)`
            },
            border: {
                radius: `var(${prefix}border-radius)`
            },
            transition: {
                duration: `var(${prefix}transition-duration)`
            },
            formElement: {
                transition: `var(${prefix}form-element-transition)`
            },
            actionIcon: {
                transition: `var(${prefix}action-icon-transition)`
            },
            listItem: {
                transition: `var(${prefix}list-item-transition)`
            },
            primeicon: {
                font: {
                    size: `var(${prefix}primeicon-font-size)`
                }
            },
            inlineSpacing: `var(${prefix}inline-spacing)`,
            mask: {
                background: `var(${prefix}mask-background)`
            },
            loadingIcon: {
                font: {
                    size: `var(${prefix}loading-icon-font-size)`
                }
            },
            error: {
                color: `var(${prefix}error-color)`
            },
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
            actionIcon: {
                width: `var(${prefix}action-icon-width)`,
                height: `var(${prefix}action-icon-height)`,
                background: `var(${prefix}action-icon-background)`,
                color: `var(${prefix}action-icon-color)`,
                border: {
                    width: `var(${prefix}action-icon-border-width)`,
                    style: `var(${prefix}action-icon-border-style)`,
                    color: `var(${prefix}action-icon-border-color)`,
                    radius: `var(${prefix}action-icon-border-radius)`
                },
                states: {
                    hover: {
                        background: `var(${prefix}action-icon-hover-background)`,
                        color: `var(${prefix}action-icon-hover-color)`,
                        border: {
                            width: `var(${prefix}action-icon-hover-border-width)`,
                            style: `var(${prefix}action-icon-hover-border-style)`,
                            color: `var(${prefix}action-icon-hover-border-color)`,
                            radius: `var(${prefix}action-icon-hover-border-radius)`
                        }
                    }
                }
            },
            input: {
                font: {
                    family: `var(${prefix}input-font-family)`,
                    size: `var(${prefix}input-font-size)`
                },
                padding: {
                    top: `var(${prefix}input-padding-top)`,
                    right: `var(${prefix}input-padding-right)`,
                    bottom: `var(${prefix}input-padding-bottom)`,
                    left: `var(${prefix}input-padding-left)`
                },
                background: `var(${prefix}input-background)`,
                color: `var(${prefix}input-color)`,
                border: {
                    width: `var(${prefix}input-border-width)`,
                    style: `var(${prefix}input-border-style)`,
                    color: `var(${prefix}input-border-color)`,
                    radius: `var(${prefix}input-border-radius)`
                },
                states: {
                    hover: {
                        border: {
                            width: `var(${prefix}input-hover-border-width)`,
                            style: `var(${prefix}input-hover-border-style)`,
                            color: `var(${prefix}input-hover-border-color)`,
                            radius: `var(${prefix}input-hover-border-radius)`
                        }
                    },
                    focus: {
                        border: {
                            width: `var(${prefix}input-focus-border-width)`,
                            style: `var(${prefix}input-focus-border-style)`,
                            color: `var(${prefix}input-focus-border-color)`,
                            radius: `var(${prefix}input-focus-border-radius)`
                        }
                    },
                    error: {
                        border: {
                            width: `var(${prefix}input-error-border-width)`,
                            style: `var(${prefix}input-error-border-style)`,
                            color: `var(${prefix}input-error-border-color)`,
                            radius: `var(${prefix}input-error-border-radius)`
                        }
                    }
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
            },
            inputGroup: {
                background: `var(${prefix}input-group-background)`,
                color: `var(${prefix}input-group-color)`,
                slots: {
                    addOn: {
                        minWidth: `var(${prefix}input-group-add-on-min-width)`
                    }
                }
            },
            inputList: {
                background: `var(${prefix}input-list-background)`,
                color: `var(${prefix}input-list-color)`,
                border: {
                    width: `var(${prefix}input-list-border-width)`,
                    style: `var(${prefix}input-list-border-style)`,
                    color: `var(${prefix}input-list-border-color)`,
                    radius: `var(${prefix}input-list-border-radius)`
                },
                padding: {
                    top: `var(${prefix}input-list-padding-top)`,
                    right: `var(${prefix}input-list-padding-right)`,
                    bottom: `var(${prefix}input-list-padding-bottom)`,
                    left: `var(${prefix}input-list-padding-left)`
                },
                slots: {
                    item: {
                        background: `var(${prefix}input-list-item-background)`,
                        color: `var(${prefix}input-list-item-color)`,
                        padding: {
                            top: `var(${prefix}input-list-item-padding-top)`,
                            right: `var(${prefix}input-list-item-padding-right)`,
                            bottom: `var(${prefix}input-list-item-padding-bottom)`,
                            left: `var(${prefix}input-list-item-padding-left)`
                        },
                        border: {
                            width: `var(${prefix}input-list-item-border-width)`,
                            style: `var(${prefix}input-list-item-border-style)`,
                            color: `var(${prefix}input-list-item-border-color)`,
                            radius: `var(${prefix}input-list-item-border-radius)`
                        },
                        margin: {
                            top: `var(${prefix}input-list-item-margin-top)`,
                            right: `var(${prefix}input-list-item-margin-right)`,
                            bottom: `var(${prefix}input-list-item-margin-bottom)`,
                            left: `var(${prefix}input-list-item-margin-left)`
                        },
                        states: {
                            hover: {
                                background: `var(${prefix}input-list-item-hover-background)`,
                                color: `var(${prefix}input-list-item-hover-color)`
                            },
                            focus: {
                                shadow: `var(${prefix}input-list-item-focus-shadow)`
                            }
                        }
                    },
                    header: {
                        background: `var(${prefix}input-list-header-background)`,
                        color: `var(${prefix}input-list-header-color)`,
                        padding: {
                            top: `var(${prefix}input-list-header-padding-top)`,
                            right: `var(${prefix}input-list-header-padding-right)`,
                            bottom: `var(${prefix}input-list-header-padding-bottom)`,
                            left: `var(${prefix}input-list-header-padding-left)`
                        },
                        margin: {
                            top: `var(${prefix}input-list-header-margin-top)`,
                            right: `var(${prefix}input-list-header-margin-right)`,
                            bottom: `var(${prefix}input-list-header-margin-bottom)`,
                            left: `var(${prefix}input-list-header-margin-left)`
                        },
                        border: {
                            width: `var(${prefix}input-list-header-border-width)`,
                            style: `var(${prefix}input-list-header-border-style)`,
                            color: `var(${prefix}input-list-header-border-color)`,
                            radius: `var(${prefix}input-list-header-border-radius)`
                        }
                    }
                }
            },
            inputOverlay: {
                background: `var(${prefix}input-overlay-background)`,
                border: {
                    width: `var(${prefix}input-overlay-border-width)`,
                    style: `var(${prefix}input-overlay-border-style)`,
                    color: `var(${prefix}input-overlay-border-color)`,
                    radius: `var(${prefix}input-overlay-border-radius)`
                },
                shadow: `var(${prefix}input-overlay-shadow)`,
                slots: {
                    header: {
                        background: `var(${prefix}input-overlay-header-background)`
                    }
                }
            }
        };
    },
    getComputedStyle() {
        const variables = this.getVariables();
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
