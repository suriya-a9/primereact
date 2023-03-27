export const BadgeStyleBase = {
    prefix: '--p-badge-',
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
            minWidth: `var(${prefix}min-width)`,
            height: `var(${prefix}height)`,
            lineHeight: `var(${prefix}line-height)`,
            types: {
                secondary: {
                    background: `var(${prefix}secondary-background)`,
                    color: `var(${prefix}secondary-color)`
                },
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
            }
        };
    },
    getComputedStyle() {
        const variables = this.getVariables();
        const unstyled = `
.p-badge {
    display: inline-block;
    border-radius: 10px;
    text-align: center;
    padding: 0 .5rem;
}
.p-overlay-badge {
    position: relative;
}
.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%,-50%);
    transform-origin: 100% 0;
    margin: 0;
}
.p-badge-dot {
    width: .5rem;
    min-width: .5rem;
    height: .5rem;
    border-radius: 50%;
    padding: 0;
}
.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}
        `;
        const styled = `
.p-badge {
    background: ${variables.background};
    color: ${variables.color};
    font-family: ${variables.font.family};
    font-size: ${variables.font.size};
    font-weight: ${variables.font.weight};
    min-width: ${variables.minWidth};
    height: ${variables.height};
    line-height: ${variables.lineHeight};
}
.p-badge-secondary {
    background: ${variables.types.secondary.background};
    color: ${variables.types.secondary.color};
}
.p-badge-success {
    background: ${variables.types.success.background};
    color: ${variables.types.success.color};
}
.p-badge-info {
    background: ${variables.types.info.background};
    color: ${variables.types.info.color};
}
.p-badge-warning {
    background: ${variables.types.warning.background};
    color: ${variables.types.warning.color};
}
.p-badge-danger {
    background: ${variables.types.danger.background};
    color: ${variables.types.danger.color};
}
.p-badge-lg {
    font-size: calc(1.5 * ${variables.font.size});
    min-width: calc(1.5 * ${variables.minWidth});
    height: calc(1.5 * ${variables.height});
    line-height: calc(1.5 * ${variables.height});
}
.p-badge-xl {
    font-size: calc(2 * ${variables.font.size});
    min-width: calc(2 * ${variables.minWidth});
    height: calc(2 * ${variables.height});
    line-height: calc(2 * ${variables.height});
}
        `;

        return `
/** module: badge **/
${unstyled}
${styled}
        `;
    }
};
