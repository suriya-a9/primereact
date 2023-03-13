import { ObjectUtils } from '../utils/Utils';

export const ButtonBase = {
    defaultProps: {
        __TYPE: 'Button',
        label: null,
        icon: null,
        iconPos: 'left',
        badge: null,
        severity: null,
        rounded: false,
        raised: false,
        outlined: false,
        text: false,
        link: false,
        badgeClassName: null,
        tooltip: null,
        size: null,
        tooltipOptions: null,
        disabled: false,
        loading: false,
        loadingIcon: 'pi pi-spinner pi-spin',
        visible: true,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ButtonBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ButtonBase.defaultProps),
    getComputedStyle: (props) => {
        const prefix = '--p-button-';
        const variables = {
            font: {
                family: `var(${prefix}font-family, var(--p-font-family))`,
                size: `var(${prefix}font-size, var(--p-font-size))`
            },
            color: `var(${prefix}color)`,
            background: `var(${prefix}background)`,
            padding: {
                top: `var(${prefix}padding-top)`,
                right: `var(${prefix}padding-right)`,
                bottom: `var(${prefix}padding-bottom)`,
                left: `var(${prefix}padding-left)`
            },
            border: {
                width: `var(${prefix}border-width)`,
                style: `var(${prefix}border-style)`,
                color: `var(${prefix}border-color)`,
                radius: `var(${prefix}border-radius, var(--p-border-radius))`
            },
            transition: `var(${prefix}transition, var(--p-form-element-transition))`,
            states: {
                hover: {
                    background: `var(${prefix}hover-background)`,
                    color: `var(${prefix}hover-color)`,
                    border: {
                        width: `var(${prefix}hover-border-width)`,
                        style: `var(${prefix}hover-border-style)`,
                        color: `var(${prefix}hover-border-color)`
                    }
                },
                active: {
                    background: `var(${prefix}active-background)`,
                    color: `var(${prefix}active-color)`,
                    border: {
                        width: `var(${prefix}active-border-width)`,
                        style: `var(${prefix}active-border-style)`,
                        color: `var(${prefix}active-border-color)`
                    }
                },
                focus: {
                    outline: {
                        style: `var(${prefix}focus-outline-style, var(--p-focus-outline-style))`,
                        color: `var(${prefix}focus-outline-color, var(--p-focus-outline-color))`,
                        width: `var(${prefix}focus-outline-width, var(--p-focus-outline-width))`,
                        offset: `var(${prefix}focus-outline-offset, var(--p-focus-outline-offset))`
                    },
                    shadow: `var(${prefix}focus-shadow, var(--p-button-shadow))`
                }
            },
            types: {
                outlined: {
                    background: `var(${prefix}outlined-background, transparent)`,
                    color: `var(${prefix}outlined-color, ${variables.background})`,
                    border: {
                        width: `var(${prefix}outlined-border-width)`,
                        style: `var(${prefix}outlined-border-style)`,
                        color: `var(${prefix}outlined-border-color)`
                    },
                    states: {
                        hover: {
                            background: `var(${prefix}outlined-hover-background)`,
                            color: `var(${prefix}outlined-hover-color)`,
                            border: {
                                width: `var(${prefix}outlined-hover-border-width)`,
                                style: `var(${prefix}outlined-hover-border-style)`,
                                color: `var(${prefix}outlined-hover-border-color)`
                            }
                        },
                        active: {
                            background: `var(${prefix}outlined-active-background)`,
                            color: `var(${prefix}outlined-active-color)`,
                            border: {
                                width: `var(${prefix}outlined-active-border-width)`,
                                style: `var(${prefix}outlined-active-border-style)`,
                                color: `var(${prefix}outlined-active-border-color)`
                            }
                        }
                    }
                },
                plain: {
                    color: `var(${prefix}plain-color)`,
                    border: {
                        width: `var(${prefix}plain-border-width)`,
                        style: `var(${prefix}plain-border-style)`,
                        color: `var(${prefix}plain-border-color)`
                    },
                    states: {
                        hover: {
                            background: `var(${prefix}plain-hover-background)`,
                            color: `var(${prefix}plain-hover-color)`,
                            border: {
                                width: `var(${prefix}plain-hover-border-width)`,
                                style: `var(${prefix}plain-hover-border-style)`,
                                color: `var(${prefix}plain-hover-border-color)`
                            }
                        },
                        active: {
                            background: `var(${prefix}plain-active-background)`,
                            color: `var(${prefix}plain-active-color)`,
                            border: {
                                width: `var(${prefix}plain-active-border-width)`,
                                style: `var(${prefix}plain-active-border-style)`,
                                color: `var(${prefix}plain-active-border-color)`
                            }
                        }
                    }
                },
                text: {
                    background: `var(${prefix}text-background, transparent)`,
                    color: `var(${prefix}text-color, ${variables.background})`,
                    border: {
                        width: `var(${prefix}text-border-width)`,
                        style: `var(${prefix}text-border-style)`,
                        color: `var(${prefix}text-border-color, transparent)`
                    },
                    states: {
                        hover: {
                            background: `var(${prefix}text-hover-background)`,
                            color: `var(${prefix}text-hover-color)`,
                            border: {
                                width: `var(${prefix}text-hover-border-width)`,
                                style: `var(${prefix}text-hover-border-style)`,
                                color: `var(${prefix}text-hover-border-color, transparent)`
                            }
                        },
                        active: {
                            background: `var(${prefix}text-active-background)`,
                            color: `var(${prefix}text-active-color)`,
                            border: {
                                width: `var(${prefix}text-active-border-width)`,
                                style: `var(${prefix}text-active-border-style)`,
                                color: `var(${prefix}text-active-border-color, transparent)`
                            }
                        }
                    }
                },
                raised: {
                    shadow: `var(${prefix}raised-shadow)`
                },
                rounded: {
                    border: {
                        radius: `var(${prefix}rounded-border-radius)`
                    }
                },
                iconOnly: {
                    width: `var(${prefix}icon-only-width)`,
                    padding: {
                        top: `var(${prefix}icon-only-padding-top)`,
                        right: `var(${prefix}icon-only-padding-right)`,
                        bottom: `var(${prefix}icon-only-padding-bottom)`,
                        left: `var(${prefix}icon-only-padding-left)`
                    }
                },
                scale: {
                    small: `var(${prefix}scale-small, var(--p-scale-small, 1))`,
                    large: `var(${prefix}scale-large, var(--p-scale-large, 1))`
                }
            },
            slots: {
                label: {
                    transition: `var(${prefix}label-transition)`
                },
                icon: {
                    top: {
                        margin: {
                            top: `var(${prefix}icon-left-margin-top)`,
                            right: `var(${prefix}icon-left-margin-right)`,
                            bottom: `var(${prefix}icon-left-margin-bottom, var(--p-inline-spacing))`,
                            left: `var(${prefix}icon-left-margin-left)`
                        }
                    },
                    right: {
                        margin: {
                            top: `var(${prefix}icon-left-margin-top)`,
                            right: `var(${prefix}icon-left-margin-right)`,
                            bottom: `var(${prefix}icon-left-margin-bottom)`,
                            left: `var(${prefix}icon-left-margin-left, var(--p-inline-spacing))`
                        }
                    },
                    bottom: {
                        margin: {
                            top: `var(${prefix}icon-left-margin-top, var(--p-inline-spacing))`,
                            right: `var(${prefix}icon-left-margin-right)`,
                            bottom: `var(${prefix}icon-left-margin-bottom)`,
                            left: `var(${prefix}icon-left-margin-left)`
                        }
                    },
                    left: {
                        margin: {
                            top: `var(${prefix}icon-left-margin-top)`,
                            right: `var(${prefix}icon-left-margin-right, var(--p-inline-spacing))`,
                            bottom: `var(${prefix}icon-left-margin-bottom)`,
                            left: `var(${prefix}icon-left-margin-left)`
                        }
                    }
                },
                badge: {
                    margin: {
                        top: `var(${prefix}badge-margin-top)`,
                        right: `var(${prefix}badge-margin-right)`,
                        bottom: `var(${prefix}badge-margin-bottom)`,
                        left: `var(${prefix}badge-margin-left, var(--p-inline-spacing))`
                    },
                    min: {
                        width: `var(${prefix}badge-min-width, ${variables.font.size})`
                    },
                    height: `var(${prefix}badge-height, ${variables.font.size})`,
                    line: {
                        height: `var(${prefix}badge-line-height, ${variables.font.size})`
                    },
                    color: `var(${prefix}badge-color, ${variables.background})`,
                    background: `var(${prefix}badge-background, ${variables.color})`
                }
            }
        };
        const unstyled = `
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}
.p-button-label {
    flex: 1 1 auto;
}
.p-button-icon-right {
    order: 1;
}
.p-button:disabled {
    cursor: default;
}
.p-button-icon-only {
    justify-content: center;
}
.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}
.p-button-vertical {
    flex-direction: column;
}
.p-button-icon-bottom {
    order: 2;
}
.p-buttonset .p-button {
    margin: 0;
}
.p-buttonset .p-button:not(:last-child) {
    border-right: 0 none;
}
.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}
.p-buttonset .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.p-buttonset .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
        `;
        const styled = `
.p-button {
    font-family: ${variables.font.family};
    font-size: ${variables.font.size};
    color: ${variables.color};
    background: ${variables.background};
    border-width: ${variables.border.width};
    border-style: ${variables.border.style};
    border-color: ${variables.border.color};
    border-radius: ${variables.border.radius};
    padding-top: ${variables.padding.top};
    padding-right: ${variables.padding.right};
    padding-bottom: ${variables.padding.bottom};
    padding-left: ${variables.padding.left};
    transition: ${variables.transition};
}
.p-button:enabled:hover,
.p-button:not(button):not(a):not(.p-disabled):hover {
    background: ${variables.states.hover.background};
    color: ${variables.states.hover.color};
    border-width: ${variables.states.hover.border.width};
    border-style: ${variables.states.hover.border.style};
    border-color: ${variables.states.hover.border.color};
}
.p-button:enabled:active,
.p-button:not(button):not(a):not(.p-disabled):active {
    background: ${variables.states.active.background};
    color: ${variables.states.active.color};
    border-width: ${variables.states.active.border.width};
    border-style: ${variables.states.active.border.style};
    border-color: ${variables.states.active.border.color};
}
.p-button:focus {
    outline-style: ${variables.states.focus.outline.style};
    outline-color: ${variables.states.focus.outline.color};
    outline-width: ${variables.states.focus.outline.width};
    outline-offset: ${variables.states.focus.outline.offset};
    box-shadow: ${variables.states.focus.shadow};
}
.p-button .p-button-label {
    transition: ${variables.slots.label};
}
.p-button .p-button-icon-top {
    margin-top: ${variables.slots.icon.top.margin.top};
    margin-right: ${variables.slots.icon.top.margin.right};
    margin-bottom: ${variables.slots.icon.top.margin.bottom};
    margin-left: ${variables.slots.icon.top.margin.left};
}
.p-button .p-button-icon-right {
    margin-top: ${variables.slots.icon.right.margin.top};
    margin-right: ${variables.slots.icon.right.margin.right};
    margin-bottom: ${variables.slots.icon.right.margin.bottom};
    margin-left: ${variables.slots.icon.right.margin.left};
}
.p-button .p-button-icon-bottom {
    margin-top: ${variables.slots.icon.bottom.margin.top};
    margin-right: ${variables.slots.icon.bottom.margin.right};
    margin-bottom: ${variables.slots.icon.bottom.margin.bottom};
    margin-left: ${variables.slots.icon.bottom.margin.left};
}
.p-button .p-button-icon-left {
    margin-top: ${variables.slots.icon.left.margin.top};
    margin-right: ${variables.slots.icon.left.margin.right};
    margin-bottom: ${variables.slots.icon.left.margin.bottom};
    margin-left: ${variables.slots.icon.left.margin.left};
}
.p-button .p-badge {
    margin-top: ${variables.slots.badge.margin.top};
    margin-right: ${variables.slots.badge.margin.right};
    margin-bottom: ${variables.slots.badge.margin.bottom};
    margin-left: ${variables.slots.badge.margin.left};
    min-width: ${variables.slots.badge.min.width};
    height: ${variables.slots.badge.height};
    line-height: ${variables.slots.badge.line.height};
    color: ${variables.slots.badge.color};
    background: ${variables.slots.badge.background};
}
.p-button-outlined {
    background: ${variables.types.outlined.background};
    color: ${variables.types.outlined.color};
    border-width: ${variables.types.outlined.border.width};
    border-style: ${variables.types.outlined.border.style};
    border-color: ${variables.types.outlined.border.color};
}
.p-button-outlined:enabled:hover,
.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
    background: ${variables.types.outlined.states.hover.background};
    color: ${variables.types.outlined.states.hover.color};
    border-width: ${variables.types.outlined.states.hover.border.width};
    border-style: ${variables.types.outlined.states.hover.border.style};
    border-color: ${variables.types.outlined.states.hover.border.color};
}
.p-button-outlined:enabled:active,
.p-button-outlined:not(button):not(a):not(.p-disabled):active {
    background: ${variables.types.outlined.states.active.background};
    color: ${variables.types.outlined.states.active.color};
    border-width: ${variables.types.outlined.states.active.border.width};
    border-style: ${variables.types.outlined.states.active.border.style};
    border-color: ${variables.types.outlined.states.active.border.color};
}
.p-button-outlined.p-button-plain {
    border-width: ${variables.types.plain.border.width};
    border-style: ${variables.types.plain.border.style};
    border-color: ${variables.types.plain.border.color};
}
.p-button-text {
    background: ${variables.types.text.background};
    color: ${variables.types.text.color};
    border-width: ${variables.types.text.border.width};
    border-style: ${variables.types.text.border.style};
    border-color: ${variables.types.text.border.color};
}
.p-button-text:enabled:hover,
.p-button-text:not(button):not(a):not(.p-disabled):hover {
    background: ${variables.types.text.states.hover.background};
    color: ${variables.types.text.states.hover.color};
    border-width: ${variables.types.text.states.hover.border.width};
    border-style: ${variables.types.text.states.hover.border.style};
    border-color: ${variables.types.text.states.hover.border.color};
}
.p-button-text:enabled:active,
.p-button-text:not(button):not(a):not(.p-disabled):active {
    background: ${variables.types.text.states.active.background};
    color: ${variables.types.text.states.active.color};
    border-width: ${variables.types.text.states.active.border.width};
    border-style: ${variables.types.text.states.active.border.style};
    border-color: ${variables.types.text.states.active.border.color};
}
.p-button-plain {
    color: ${variables.types.plain.color};
}
.p-button-plain:enabled:hover,
.p-button-plain:not(button):not(a):not(.p-disabled):hover {
    background: ${variables.types.plain.states.hover.background};
    color: ${variables.types.plain.states.hover.color};
    border-width: ${variables.types.plain.states.hover.border.width};
    border-style: ${variables.types.plain.states.hover.border.style};
    border-color: ${variables.types.plain.states.hover.border.color};
}
.p-button-plain:enabled:active,
.p-button-plain:not(button):not(a):not(.p-disabled):active {
    background: ${variables.types.plain.states.active.background};
    color: ${variables.types.plain.states.active.color};
    border-width: ${variables.types.plain.states.active.border.width};
    border-style: ${variables.types.plain.states.active.border.style};
    border-color: ${variables.types.plain.states.active.border.color};
}
.p-button-raised {
    box-shadow: ${variables.types.raised.shadow};
}
.p-button-rounded {
    border-radius: ${variables.types.rounded.border.radius};
}
.p-button-icon-only {
    width:  ${variables.types.iconOnly.width};
    padding-top: ${variables.types.iconOnly.padding.top};
    padding-right: ${variables.types.iconOnly.padding.right};
    padding-bottom: ${variables.types.iconOnly.padding.bottom};
    padding-left: ${variables.types.iconOnly.padding.left};
}
.p-button-icon-only .p-button-icon-left,
.p-button-icon-only .p-button-icon-right {
    margin: 0;
}
.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${variables.types.iconOnly.width};
}
.p-button-sm {
    font-size: calc(${variables.font.size} * ${variables.types.scale.small});
    padding-top: calc(${variables.padding.top} * ${variables.types.scale.small});
    padding-right: calc(${variables.padding.right} * ${variables.types.scale.small});
    padding-bottom: calc(${variables.padding.bottom} * ${variables.types.scale.small});
    padding-left: calc(${variables.padding.left} * ${variables.types.scale.small});
}
.p-button-sm .p-button-icon {
    font-size: calc(var(--p-common-primeicon-font-size, var(--p-primeicon-font-size)) * ${variables.types.scale.small});
}
.p-button-lg {
    font-size: calc(${variables.font.size} * ${variables.types.scale.large});
    padding-top: calc(${variables.padding.top} * ${variables.types.scale.large});
    padding-right: calc(${variables.padding.right} * ${variables.types.scale.large});
    padding-bottom: calc(${variables.padding.bottom} * ${variables.types.scale.large});
    padding-left: calc(${variables.padding.left} * ${variables.types.scale.large});
}
.p-button-lg .p-button-icon {
    font-size: calc(var(--p-common-primeicon-font-size, var(--p-primeicon-font-size)) * ${variables.types.scale.large});
}
        `;

        return `
/** module: button **/
${unstyled}
${styled}
        `;
    }
};
