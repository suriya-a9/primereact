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
    background: ${variables.hover.background};
    color: ${variables.hover.color};
    border-width: ${variables.hover.border.width};
    border-style: ${variables.hover.border.style};
    border-color: ${variables.hover.border.color};
}
.p-button:enabled:active,
.p-button:not(button):not(a):not(.p-disabled):active {
    background: ${variables.active.background};
    color: ${variables.active.color};
    border-width: ${variables.active.border.width};
    border-style: ${variables.active.border.style};
    border-color: ${variables.active.border.color};
}
        `;

        return `
/** module: button **/
${unstyled}
${styled}
        `;
    }
};
