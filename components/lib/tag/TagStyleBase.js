export const TagStyleBase = {
    prefix: '--p-tag-',
    getVariables() {
        const { prefix } = this;

        return {
            font: {
                family: `var(${prefix}font-family)`,
                size: `var(${prefix}font-size)`,
                weight: `var(${prefix}font-weight)`
            },
            background: `var(${prefix}background)`,
            color: `var(${prefix}color)`,
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
                radius: `var(${prefix}border-radius)`
            },
            types: {
                success: {
                    background: `var(${prefix}success-background)`,
                    color: `var(${prefix}success-color)`
                },
                info: {
                    background: `var(${prefix}info-background)`,
                    color: `var(${prefix}info-color)`
                },
                warning: {
                    background: `var(${prefix}warning-background)`,
                    color: `var(${prefix}warning-color)`
                },
                danger: {
                    background: `var(${prefix}danger-background)`,
                    color: `var(${prefix}danger-color)`
                }
            },
            slots: {
                icon: {
                    margin: {
                        top: `var(${prefix}icon-margin-top)`,
                        right: `var(${prefix}icon-margin-right)`,
                        bottom: `var(${prefix}icon-margin-bottom)`,
                        left: `var(${prefix}icon-margin-left)`
                    },
                    font: {
                        size: `var(${prefix}icon-font-size, var(${prefix}font-size))`
                    }
                }
            }
        };
    },
    getComputedStyle() {
        const variables = this.getVariables();
        const unstyled = `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.p-tag-icon,
.p-tag-value,
.p-tag-icon.pi {
    line-height: 1.5;
}
.p-tag.p-tag-rounded {
    border-radius: 10rem;
}
        `;
        const styled = `
.p-tag {
    background: ${variables.background};
    color: ${variables.color};
    font-family: ${variables.font.family};
    font-size: ${variables.font.size};
    font-weight: ${variables.font.weight};
    padding-top: ${variables.padding.top};
    padding-right: ${variables.padding.right};
    padding-bottom: ${variables.padding.bottom};
    padding-left: ${variables.padding.left};
    border-width: ${variables.border.width};
    border-style: ${variables.border.style};
    border-color: ${variables.border.color};
    border-radius: ${variables.border.radius};
}
.p-tag-success {
    background: ${variables.types.success.background};
    color: ${variables.types.success.color};
}
.p-tag-info {
    background: ${variables.types.info.background};
    color: ${variables.types.info.color};
}
.p-tag-warning {
    background: ${variables.types.warning.background};
    color: ${variables.types.warning.color};
}
.p-tag-danger {
    background: ${variables.types.danger.background};
    color: ${variables.types.danger.color};
}
.p-tag .p-tag-icon {
    margin-top: ${variables.slots.icon.margin.top};
    margin-right: ${variables.slots.icon.margin.right};
    margin-bottom: ${variables.slots.icon.margin.bottom};
    margin-left: ${variables.slots.icon.margin.left};
    font-size: ${variables.slots.icon.font.size}
}
        `;

        return `
/** module: tag **/
${unstyled}
${styled}
        `;
    }
};
