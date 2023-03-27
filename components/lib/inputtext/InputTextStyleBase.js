export const ImageStyleBase = {
    prefix: '--p-inputtext-',
    getVariables() {
        const { prefix } = this;

        return {
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
            appearance: `var(${prefix}appearance, none)`,
            transition: `var(${prefix}transition, var(--p-form-element-transition))`,
            states: {
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
                }
            },
            types: {
                scale: {
                    small: `var(${prefix}scale-small, var(--p-scale-small, 1))`,
                    large: `var(${prefix}scale-large, var(--p-scale-large, 1))`
                }
            }
        };
    },
    getComputedStyle() {
        const variables = this.getVariables();
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
    appearance: ${variables.appearance};
}
.p-inputtext:enabled:hover {
    border-width: ${variables.states.hover.border.width};
    border-style: ${variables.states.hover.border.style};
    border-color: ${variables.states.hover.border.color};
}
.p-inputtext:enabled:focus {
    outline-style: ${variables.states.focus.outline.style};
    outline-color: ${variables.states.focus.outline.color};
    outline-width: ${variables.states.focus.outline.width};
    outline-offset: ${variables.states.focus.outline.offset};
    border-width: ${variables.states.focus.border.width};
    border-style: ${variables.states.focus.border.style};
    border-color: ${variables.states.focus.border.color};
    box-shadow: ${variables.states.focus.shadow};
}
.p-inputtext.p-invalid.p-component {
    border-width: ${variables.states.error.border.width};
    border-style: ${variables.states.error.border.style};
    border-color: ${variables.states.error.border.color};
}
.p-inputtext.p-inputtext-sm {
    font-size: calc(${variables.font.size} * ${variables.types.scale.small});
    padding-top: calc(${variables.padding.top} * ${variables.types.scale.small});
    padding-right: calc(${variables.padding.right} * ${variables.types.scale.small});
    padding-bottom: calc(${variables.padding.bottom} * ${variables.types.scale.small});
    padding-left: calc(${variables.padding.left} * ${variables.types.scale.small});
}
.p-inputtext.p-inputtext-lg {
    font-size: calc(${variables.font.size} * ${variables.types.scale.large});
    padding-top: calc(${variables.padding.top} * ${variables.types.scale.large});
    padding-right: calc(${variables.padding.right} * ${variables.types.scale.large});
    padding-bottom: calc(${variables.padding.bottom} * ${variables.types.scale.large});
    padding-left: calc(${variables.padding.left} * ${variables.types.scale.large});
}
        `;

        return `
/** module: inputtext **/
${unstyled}
${styled}
        `;
    }
};
