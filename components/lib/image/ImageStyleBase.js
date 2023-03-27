export const ImageStyleBase = {
    prefix: '--p-image-',
    getVariables() {
        const { prefix } = this;

        return {
            slots: {
                mask: {
                    background: `var(${prefix}mask-background)`
                },
                preview: {
                    slots: {
                        indicator: {
                            background: `var(${prefix}preview-indicator-background, transparent)`,
                            color: `var(${prefix}preview-indicator-color)`,
                            transition: `var(${prefix}preview-indicator-transition, var(--p-action-icon-transition))`
                        },
                        container: {
                            states: {
                                hover: {
                                    slots: {
                                        indicator: {
                                            background: `var(${prefix}preview-container-hover-indicator-background)`
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                toolbar: {
                    padding: {
                        top: `var(${prefix}toolbar-padding-top)`,
                        right: `var(${prefix}toolbar-padding-right)`,
                        bottom: `var(${prefix}toolbar-padding-bottom)`,
                        left: `var(${prefix}toolbar-padding-left)`
                    }
                },
                action: {
                    background: `var(${prefix}action-background)`,
                    color: `var(${prefix}action-color)`,
                    width: `var(${prefix}action-width)`,
                    height: `var(${prefix}action-height)`,
                    border: {
                        width: `var(${prefix}action-border-width)`,
                        style: `var(${prefix}action-border-style)`,
                        color: `var(${prefix}action-border-color)`,
                        radius: `var(${prefix}action-border-radius)`
                    },
                    transition: `var(${prefix}action-transition)`,
                    margin: {
                        top: `var(${prefix}action-margin-top)`,
                        right: `var(${prefix}action-margin-right, --p-inline-spacing)`,
                        bottom: `var(${prefix}action-margin-bottom)`,
                        left: `var(${prefix}action-margin-left)`
                    },
                    states: {
                        hover: {
                            background: `var(${prefix}action-hover-background)`,
                            color: `var(${prefix}action-hover-color)`
                        }
                    },
                    slots: {
                        icon: {
                            font: {
                                size: `var(${prefix}action-hover-icon-font-size)`
                            }
                        }
                    }
                }
            }
        };
    },
    getComputedStyle() {
        const variables = this.getVariables();
        const unstyled = `
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-image-preview-container {
    position: relative;
    display: inline-block;
}
.p-image-preview-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity .3s;
}
.p-image-preview-icon {
    font-size: 1.5rem;
}
.p-image-preview-container:hover > .p-image-preview-indicator {
    opacity: 1;
    cursor: pointer;
}
.p-image-preview-container > img {
    cursor: pointer;
}
.p-image-toolbar {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    z-index: 1;
}
.p-image-action.p-link {
    display: flex;
    justify-content: center;
    align-items: center;
}
.p-image-preview {
    transition: transform .15s;
    max-width: 100vw;
    max-height: 100vh;
}
.p-image-preview-enter {
    opacity: 0;
    transform: scale(0.7);
}
.p-image-preview-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-image-preview-enter-done {
    transform: none;
}
.p-image-preview-exit {
    opacity: 1;
}
.p-image-preview-exit-active {
    opacity: 0;
    transform: scale(0.7);
    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
        `;
        const styled = `
.p-image-mask {
    background: ${variables.slots.mask.background};
}
.p-image-preview-indicator {
    background: ${variables.slots.preview.slots.indicator.background};
    color: ${variables.slots.preview.slots.indicator.color};
    transition: ${variables.slots.preview.slots.indicator.transition};
}
.p-image-preview-container:hover > .p-image-preview-indicator {
    background: ${variables.slots.preview.slots.container.states.hover.slots.indicator.background};
}
.p-image-toolbar {
    padding-top: ${variables.slots.toolbar.padding.top};
    padding-right: ${variables.slots.toolbar.padding.right};
    padding-bottom: ${variables.slots.toolbar.padding.bottom};
    padding-left: ${variables.slots.toolbar.padding.left};
}
.p-image-action.p-link {
    color: ${variables.slots.action.color};
    background: ${variables.slots.action.background};
    width: ${variables.slots.action.width};
    height: ${variables.slots.action.height};
    border-width: ${variables.slots.action.border.width};
    border-style: ${variables.slots.action.border.style};
    border-color: ${variables.slots.action.border.color};
    border-radius: ${variables.slots.action.border.radius};
    transition: ${variables.slots.action.transition};
    margin-top: ${variables.slots.action.margin.top};
    margin-right: ${variables.slots.action.margin.right};
    margin-bottom: ${variables.slots.action.margin.bottom};
    margin-left: ${variables.slots.action.margin.left};
}
.p-image-action.p-link:last-child {
    margin-right: 0;
}
.p-image-action.p-link:hover {
    color: ${variables.slots.action.states.hover.color};
    background-color: ${variables.slots.action.states.hover.background};
}
.p-image-action.p-link i {
    font-size: ${variables.slots.action.slots.icon.font.size};
}
        `;

        return `
/** module: image **/
${unstyled}
${styled}
        `;
    }
};
