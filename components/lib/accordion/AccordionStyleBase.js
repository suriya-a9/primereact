import { CommonStyleBase } from '../common/CommonStyleBase';

export const AccordionStyleBase = {
    prefix: '--p-accordion-',
    getVariables() {
        const { prefix } = this;
        const common_variables = CommonStyleBase.getVariables();

        return {
            spacing: `var(${prefix}spacing, 0)`,
            header: {
                font: {
                    family: `var(${prefix}header-font-family)`,
                    size: `var(${prefix}header-font-size)`,
                    weight: `var(${prefix}header-font-weight)`
                },
                background: `var(${prefix}header-background)`,
                color: `var(${prefix}header-color)`,
                transition: `var(${prefix}header-transition)`,
                padding: {
                    top: `var(${prefix}header-padding-top)`,
                    right: `var(${prefix}header-padding-right)`,
                    bottom: `var(${prefix}header-padding-bottom)`,
                    left: `var(${prefix}header-padding-left)`
                },
                border: {
                    width: `var(${prefix}header-border-width)`,
                    style: `var(${prefix}header-border-style)`,
                    color: `var(${prefix}header-border-color)`,
                    radius: `var(${prefix}header-border-radius)`
                },
                states: {
                    focus: {
                        outline: {
                            style: `var(${prefix}header-focus-outline-style, ${common_variables.focus.outline.style})`,
                            color: `var(${prefix}header-focus-outline-color, ${common_variables.focus.outline.color})`,
                            width: `var(${prefix}header-focus-outline-width, ${common_variables.focus.outline.width})`,
                            offset: `var(${prefix}header-focus-outline-offset, ${common_variables.focus.outline.offset})`
                        },
                        shadow: `var(${prefix}header-focus-shadow, ${common_variables.focus.shadow})`
                    },
                    hover: {
                        background: `var(${prefix}header-hover-background)`,
                        color: `var(${prefix}header-hover-color)`,
                        border: {
                            width: `var(${prefix}header-hover-border-width)`,
                            style: `var(${prefix}header-hover-border-style)`,
                            color: `var(${prefix}header-hover-border-color)`,
                            radius: `var(${prefix}header-hover-border-radius)`
                        }
                    },
                    active: {
                        background: `var(${prefix}header-active-background)`,
                        color: `var(${prefix}header-active-color)`,
                        border: {
                            width: `var(${prefix}header-active-border-width)`,
                            style: `var(${prefix}header-active-border-style)`,
                            color: `var(${prefix}header-active-border-color)`,
                            radius: `var(${prefix}header-active-border-radius)`
                        },
                        states: {
                            hover: {
                                background: `var(${prefix}header-active-hover-background)`,
                                color: `var(${prefix}header-active-hover-color)`,
                                border: {
                                    width: `var(${prefix}header-active-hover-border-width)`,
                                    style: `var(${prefix}header-active-hover-border-style)`,
                                    color: `var(${prefix}header-active-hover-border-color)`,
                                    radius: `var(${prefix}header-active-hover-border-radius)`
                                }
                            }
                        }
                    }
                }
            },
            toggleIcon: {
                margin: {
                    top: `var(${prefix}toggle-icon-margin-top)`,
                    right: `var(${prefix}toggle-icon-margin-right, ${common_variables.inlineSpacing})`,
                    bottom: `var(${prefix}toggle-icon-margin-bottom)`,
                    left: `var(${prefix}toggle-icon-margin-left)`
                }
            },
            content: {
                color: `var(${prefix}content-color)`,
                background: `var(${prefix}content-background)`,
                padding: {
                    top: `var(${prefix}content-padding-top)`,
                    right: `var(${prefix}content-padding-right)`,
                    bottom: `var(${prefix}content-padding-bottom)`,
                    left: `var(${prefix}content-padding-left)`
                },
                border: {
                    width: `var(${prefix}content-border-width)`,
                    style: `var(${prefix}content-border-style)`,
                    color: `var(${prefix}content-border-color)`,
                    radius: `var(${prefix}content-border-radius, ${common_variables.border.radius})`
                }
            },
            tab: {
                margin: {
                    top: `var(${prefix}tab-margin-top)`,
                    right: `var(${prefix}tab-margin-right)`,
                    bottom: `var(${prefix}tab-margin-bottom, var(${prefix}spacing, 0))`,
                    left: `var(${prefix}tab-margin-left)`
                }
            }
        };
    },
    getComputedStyle() {
        const variables = this.getVariables();
        const unstyled = `
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    text-decoration: none;
}
.p-accordion-header-link:focus {
    z-index: 1;
}
.p-accordion-header-text {
    line-height: 1;
}
        `;
        const styled = `

        `;

        return `
/** module: accordion **/
${unstyled}
${styled}
        `;
    }
};
