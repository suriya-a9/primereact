import { CommonBase } from '../common/CommonBase';
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
    getStyleProps: (props) => {
        const { variables: common_variables } = CommonBase.getStyleProps(props);

        const prefix = '--p-button-';
        const variables = {
            font: {
                family: `var(${prefix}font-family, ${common_variables.font.family})`,
                size: `var(${prefix}font-size, ${common_variables.font.size})`
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
                radius: `var(${prefix}border-radius, ${common_variables.border.radius})`
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
                        style: `var(${prefix}focus-outline-style, ${common_variables.focus.outline.style})`,
                        color: `var(${prefix}focus-outline-color, ${common_variables.focus.outline.color})`,
                        width: `var(${prefix}focus-outline-width, ${common_variables.focus.outline.width})`,
                        offset: `var(${prefix}focus-outline-offset, ${common_variables.focus.outline.offset})`
                    },
                    shadow: `var(${prefix}focus-shadow, ${common_variables.focus.shadow})`
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
                    small: `var(${prefix}scale-small, ${common_variables.scale.small})`,
                    large: `var(${prefix}scale-large, ${common_variables.scale.large})`
                },
                loading: {
                    top: {
                        margin: {
                            top: `var(${prefix}loading-top-margin-top, ${common_variables.inlineSpacing})`,
                            right: `var(${prefix}loading-top-margin-right)`,
                            bottom: `var(${prefix}loading-top-margin-bottom)`,
                            left: `var(${prefix}loading-top-margin-left)`
                        }
                    },
                    right: {
                        margin: {
                            top: `var(${prefix}loading-right-margin-top)`,
                            right: `var(${prefix}loading-right-margin-right, ${common_variables.inlineSpacing})`,
                            bottom: `var(${prefix}loading-right-margin-bottom)`,
                            left: `var(${prefix}loading-right-margin-left)`
                        }
                    },
                    bottom: {
                        margin: {
                            top: `var(${prefix}loading-bottom-margin-top)`,
                            right: `var(${prefix}loading-bottom-margin-right)`,
                            bottom: `var(${prefix}loading-bottom-margin-bottom, ${common_variables.inlineSpacing})`,
                            left: `var(${prefix}loading-bottom-margin-left)`
                        }
                    },
                    left: {
                        margin: {
                            top: `var(${prefix}loading-left-margin-top)`,
                            right: `var(${prefix}loading-left-margin-right)`,
                            bottom: `var(${prefix}loading-left-margin-bottom)`,
                            left: `var(${prefix}loading-left-margin-left, ${common_variables.inlineSpacing})`
                        }
                    },
                    icon: {
                        margin: {
                            top: `var(${prefix}loading-icon-margin-top, 0)`,
                            right: `var(${prefix}loading-icon-margin-right, 0)`,
                            bottom: `var(${prefix}loading-icon-margin-bottom, 0)`,
                            left: `var(${prefix}loading-icon-margin-left, 0)`
                        }
                    }
                },
                secondary: {
                    color: `var(${prefix}secondary-color)`,
                    background: `var(${prefix}secondary-background)`,
                    border: {
                        width: `var(${prefix}secondary-border-width)`,
                        style: `var(${prefix}secondary-border-style)`,
                        color: `var(${prefix}secondary-border-color)`
                    },
                    states: {
                        hover: {
                            color: `var(${prefix}secondary-hover-color)`,
                            background: `var(${prefix}secondary-hover-background)`,
                            border: {
                                width: `var(${prefix}secondary-hover-border-width, ${variables.types.secondary.border.width})`,
                                style: `var(${prefix}secondary-hover-border-style, ${variables.types.secondary.border.style})`,
                                color: `var(${prefix}secondary-hover-border-color, ${variables.types.secondary.border.color})`
                            }
                        },
                        focus: {
                            shadow: `var(${prefix}secondary-focus-shadow)`
                        },
                        active: {
                            color: `var(${prefix}secondary-active-color)`,
                            background: `var(${prefix}secondary-active-background)`,
                            border: {
                                width: `var(${prefix}secondary-active-border-width, ${variables.types.secondary.border.width})`,
                                style: `var(${prefix}secondary-active-border-style, ${variables.types.secondary.border.style})`,
                                color: `var(${prefix}secondary-active-border-color, ${variables.types.secondary.border.color})`
                            }
                        }
                    },
                    types: {
                        outlined: {
                            color: `var(${prefix}secondary-outlined-color, ${variables.types.secondary.background})`,
                            background: `var(${prefix}secondary-outlined-background, transparent)`,
                            border: {
                                width: `var(${prefix}secondary-outlined-border-width, ${variables.types.outlined.border.width})`,
                                style: `var(${prefix}secondary-outlined-border-style, ${variables.types.outlined.border.style})`,
                                color: `var(${prefix}secondary-outlined-border-color, ${variables.types.outlined.border.color})`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}secondary-outlined-hover-color, ${variables.types.secondary.background})`,
                                    background: `var(${prefix}secondary-outlined-hover-background)`,
                                    border: {
                                        width: `var(${prefix}secondary-outlined-hover-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}secondary-outlined-hover-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}secondary-outlined-hover-border-color, ${variables.types.outlined.border.color})`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}secondary-outlined-active-color, ${variables.types.secondary.background})`,
                                    background: `var(${prefix}secondary-outlined-active-background)`,
                                    border: {
                                        width: `var(${prefix}secondary-outlined-active-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}secondary-outlined-active-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}secondary-outlined-active-border-color, ${variables.types.outlined.border.color})`
                                    }
                                }
                            }
                        },
                        text: {
                            color: `var(${prefix}secondary-text-color, ${variables.types.secondary.background})`,
                            background: `var(${prefix}secondary-text-background, transparent)`,
                            border: {
                                width: `var(${prefix}secondary-text-border-width, ${variables.types.secondary.border.width})`,
                                style: `var(${prefix}secondary-text-border-style, ${variables.types.secondary.border.style})`,
                                color: `var(${prefix}secondary-text-border-color, transparent)`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}secondary-text-hover-color, ${variables.types.secondary.background})`,
                                    background: `var(${prefix}secondary-text-hover-background)`,
                                    border: {
                                        width: `var(${prefix}secondary-text-hover-border-width, ${variables.types.secondary.border.width})`,
                                        style: `var(${prefix}secondary-text-hover-border-style, ${variables.types.secondary.border.style})`,
                                        color: `var(${prefix}secondary-text-hover-border-color, transparent)`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}secondary-text-active-color, ${variables.types.secondary.background})`,
                                    background: `var(${prefix}secondary-text-active-background)`,
                                    border: {
                                        width: `var(${prefix}secondary-text-active-border-width, ${variables.types.secondary.border.width})`,
                                        style: `var(${prefix}secondary-text-active-border-style, ${variables.types.secondary.border.style})`,
                                        color: `var(${prefix}secondary-text-active-border-color, transparent)`
                                    }
                                }
                            }
                        }
                    }
                },
                info: {
                    color: `var(${prefix}info-color)`,
                    background: `var(${prefix}info-background)`,
                    border: {
                        width: `var(${prefix}info-border-width)`,
                        style: `var(${prefix}info-border-style)`,
                        color: `var(${prefix}info-border-color)`
                    },
                    states: {
                        hover: {
                            color: `var(${prefix}info-hover-color)`,
                            background: `var(${prefix}info-hover-background)`,
                            border: {
                                width: `var(${prefix}info-hover-border-width, ${variables.types.info.border.width})`,
                                style: `var(${prefix}info-hover-border-style, ${variables.types.info.border.style})`,
                                color: `var(${prefix}info-hover-border-color, ${variables.types.info.border.color})`
                            }
                        },
                        focus: {
                            shadow: `var(${prefix}info-focus-shadow)`
                        },
                        active: {
                            color: `var(${prefix}info-active-color)`,
                            background: `var(${prefix}info-active-background)`,
                            border: {
                                width: `var(${prefix}info-active-border-width, ${variables.types.info.border.width})`,
                                style: `var(${prefix}info-active-border-style, ${variables.types.info.border.style})`,
                                color: `var(${prefix}info-active-border-color, ${variables.types.info.border.color})`
                            }
                        }
                    },
                    types: {
                        outlined: {
                            color: `var(${prefix}info-outlined-color, ${variables.types.info.background})`,
                            background: `var(${prefix}info-outlined-background, transparent)`,
                            border: {
                                width: `var(${prefix}info-outlined-border-width, ${variables.types.outlined.border.width})`,
                                style: `var(${prefix}info-outlined-border-style, ${variables.types.outlined.border.style})`,
                                color: `var(${prefix}info-outlined-border-color, ${variables.types.outlined.border.color})`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}info-outlined-hover-color, ${variables.types.info.background})`,
                                    background: `var(${prefix}info-outlined-hover-background)`,
                                    border: {
                                        width: `var(${prefix}info-outlined-hover-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}info-outlined-hover-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}info-outlined-hover-border-color, ${variables.types.outlined.border.color})`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}info-outlined-active-color, ${variables.types.info.background})`,
                                    background: `var(${prefix}info-outlined-active-background)`,
                                    border: {
                                        width: `var(${prefix}info-outlined-active-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}info-outlined-active-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}info-outlined-active-border-color, ${variables.types.outlined.border.color})`
                                    }
                                }
                            }
                        },
                        text: {
                            color: `var(${prefix}info-text-color, ${variables.types.info.background})`,
                            background: `var(${prefix}info-text-background, transparent)`,
                            border: {
                                width: `var(${prefix}info-text-border-width, ${variables.types.info.border.width})`,
                                style: `var(${prefix}info-text-border-style, ${variables.types.info.border.style})`,
                                color: `var(${prefix}info-text-border-color, transparent)`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}info-text-hover-color, ${variables.types.info.background})`,
                                    background: `var(${prefix}info-text-hover-background)`,
                                    border: {
                                        width: `var(${prefix}info-text-hover-border-width, ${variables.types.info.border.width})`,
                                        style: `var(${prefix}info-text-hover-border-style, ${variables.types.info.border.style})`,
                                        color: `var(${prefix}info-text-hover-border-color, transparent)`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}info-text-active-color, ${variables.types.info.background})`,
                                    background: `var(${prefix}info-text-active-background)`,
                                    border: {
                                        width: `var(${prefix}info-text-active-border-width, ${variables.types.info.border.width})`,
                                        style: `var(${prefix}info-text-active-border-style, ${variables.types.info.border.style})`,
                                        color: `var(${prefix}info-text-active-border-color, transparent)`
                                    }
                                }
                            }
                        }
                    }
                },
                success: {
                    color: `var(${prefix}success-color)`,
                    background: `var(${prefix}success-background)`,
                    border: {
                        width: `var(${prefix}success-border-width)`,
                        style: `var(${prefix}success-border-style)`,
                        color: `var(${prefix}success-border-color)`
                    },
                    states: {
                        hover: {
                            color: `var(${prefix}success-hover-color)`,
                            background: `var(${prefix}success-hover-background)`,
                            border: {
                                width: `var(${prefix}success-hover-border-width, ${variables.types.success.border.width})`,
                                style: `var(${prefix}success-hover-border-style, ${variables.types.success.border.style})`,
                                color: `var(${prefix}success-hover-border-color, ${variables.types.success.border.color})`
                            }
                        },
                        focus: {
                            shadow: `var(${prefix}success-focus-shadow)`
                        },
                        active: {
                            color: `var(${prefix}success-active-color)`,
                            background: `var(${prefix}success-active-background)`,
                            border: {
                                width: `var(${prefix}success-active-border-width, ${variables.types.success.border.width})`,
                                style: `var(${prefix}success-active-border-style, ${variables.types.success.border.style})`,
                                color: `var(${prefix}success-active-border-color, ${variables.types.success.border.color})`
                            }
                        }
                    },
                    types: {
                        outlined: {
                            color: `var(${prefix}success-outlined-color, ${variables.types.success.background})`,
                            background: `var(${prefix}success-outlined-background, transparent)`,
                            border: {
                                width: `var(${prefix}success-outlined-border-width, ${variables.types.outlined.border.width})`,
                                style: `var(${prefix}success-outlined-border-style, ${variables.types.outlined.border.style})`,
                                color: `var(${prefix}success-outlined-border-color, ${variables.types.outlined.border.color})`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}success-outlined-hover-color, ${variables.types.success.background})`,
                                    background: `var(${prefix}success-outlined-hover-background)`,
                                    border: {
                                        width: `var(${prefix}success-outlined-hover-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}success-outlined-hover-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}success-outlined-hover-border-color, ${variables.types.outlined.border.color})`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}success-outlined-active-color, ${variables.types.success.background})`,
                                    background: `var(${prefix}success-outlined-active-background)`,
                                    border: {
                                        width: `var(${prefix}success-outlined-active-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}success-outlined-active-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}success-outlined-active-border-color, ${variables.types.outlined.border.color})`
                                    }
                                }
                            }
                        },
                        text: {
                            color: `var(${prefix}success-text-color, ${variables.types.success.background})`,
                            background: `var(${prefix}success-text-background, transparent)`,
                            border: {
                                width: `var(${prefix}success-text-border-width, ${variables.types.success.border.width})`,
                                style: `var(${prefix}success-text-border-style, ${variables.types.success.border.style})`,
                                color: `var(${prefix}success-text-border-color, transparent)`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}success-text-hover-color, ${variables.types.success.background})`,
                                    background: `var(${prefix}success-text-hover-background)`,
                                    border: {
                                        width: `var(${prefix}success-text-hover-border-width, ${variables.types.success.border.width})`,
                                        style: `var(${prefix}success-text-hover-border-style, ${variables.types.success.border.style})`,
                                        color: `var(${prefix}success-text-hover-border-color, transparent)`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}success-text-active-color, ${variables.types.success.background})`,
                                    background: `var(${prefix}success-text-active-background)`,
                                    border: {
                                        width: `var(${prefix}success-text-active-border-width, ${variables.types.success.border.width})`,
                                        style: `var(${prefix}success-text-active-border-style, ${variables.types.success.border.style})`,
                                        color: `var(${prefix}success-text-active-border-color, transparent)`
                                    }
                                }
                            }
                        }
                    }
                },
                warning: {
                    color: `var(${prefix}warning-color)`,
                    background: `var(${prefix}warning-background)`,
                    border: {
                        width: `var(${prefix}warning-border-width)`,
                        style: `var(${prefix}warning-border-style)`,
                        color: `var(${prefix}warning-border-color)`
                    },
                    states: {
                        hover: {
                            color: `var(${prefix}warning-hover-color)`,
                            background: `var(${prefix}warning-hover-background)`,
                            border: {
                                width: `var(${prefix}warning-hover-border-width, ${variables.types.warning.border.width})`,
                                style: `var(${prefix}warning-hover-border-style, ${variables.types.warning.border.style})`,
                                color: `var(${prefix}warning-hover-border-color, ${variables.types.warning.border.color})`
                            }
                        },
                        focus: {
                            shadow: `var(${prefix}warning-focus-shadow)`
                        },
                        active: {
                            color: `var(${prefix}warning-active-color)`,
                            background: `var(${prefix}warning-active-background)`,
                            border: {
                                width: `var(${prefix}warning-active-border-width, ${variables.types.warning.border.width})`,
                                style: `var(${prefix}warning-active-border-style, ${variables.types.warning.border.style})`,
                                color: `var(${prefix}warning-active-border-color, ${variables.types.warning.border.color})`
                            }
                        }
                    },
                    types: {
                        outlined: {
                            color: `var(${prefix}warning-outlined-color, ${variables.types.warning.background})`,
                            background: `var(${prefix}warning-outlined-background, transparent)`,
                            border: {
                                width: `var(${prefix}warning-outlined-border-width, ${variables.types.outlined.border.width})`,
                                style: `var(${prefix}warning-outlined-border-style, ${variables.types.outlined.border.style})`,
                                color: `var(${prefix}warning-outlined-border-color, ${variables.types.outlined.border.color})`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}warning-outlined-hover-color, ${variables.types.warning.background})`,
                                    background: `var(${prefix}warning-outlined-hover-background)`,
                                    border: {
                                        width: `var(${prefix}warning-outlined-hover-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}warning-outlined-hover-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}warning-outlined-hover-border-color, ${variables.types.outlined.border.color})`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}warning-outlined-active-color, ${variables.types.warning.background})`,
                                    background: `var(${prefix}warning-outlined-active-background)`,
                                    border: {
                                        width: `var(${prefix}warning-outlined-active-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}warning-outlined-active-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}warning-outlined-active-border-color, ${variables.types.outlined.border.color})`
                                    }
                                }
                            }
                        },
                        text: {
                            color: `var(${prefix}warning-text-color, ${variables.types.warning.background})`,
                            background: `var(${prefix}warning-text-background, transparent)`,
                            border: {
                                width: `var(${prefix}warning-text-border-width, ${variables.types.warning.border.width})`,
                                style: `var(${prefix}warning-text-border-style, ${variables.types.warning.border.style})`,
                                color: `var(${prefix}warning-text-border-color, transparent)`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}warning-text-hover-color, ${variables.types.warning.background})`,
                                    background: `var(${prefix}warning-text-hover-background)`,
                                    border: {
                                        width: `var(${prefix}warning-text-hover-border-width, ${variables.types.warning.border.width})`,
                                        style: `var(${prefix}warning-text-hover-border-style, ${variables.types.warning.border.style})`,
                                        color: `var(${prefix}warning-text-hover-border-color, transparent)`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}warning-text-active-color, ${variables.types.warning.background})`,
                                    background: `var(${prefix}warning-text-active-background)`,
                                    border: {
                                        width: `var(${prefix}warning-text-active-border-width, ${variables.types.warning.border.width})`,
                                        style: `var(${prefix}warning-text-active-border-style, ${variables.types.warning.border.style})`,
                                        color: `var(${prefix}warning-text-active-border-color, transparent)`
                                    }
                                }
                            }
                        }
                    }
                },
                help: {
                    color: `var(${prefix}help-color)`,
                    background: `var(${prefix}help-background)`,
                    border: {
                        width: `var(${prefix}help-border-width)`,
                        style: `var(${prefix}help-border-style)`,
                        color: `var(${prefix}help-border-color)`
                    },
                    states: {
                        hover: {
                            color: `var(${prefix}help-hover-color)`,
                            background: `var(${prefix}help-hover-background)`,
                            border: {
                                width: `var(${prefix}help-hover-border-width, ${variables.types.help.border.width})`,
                                style: `var(${prefix}help-hover-border-style, ${variables.types.help.border.style})`,
                                color: `var(${prefix}help-hover-border-color, ${variables.types.help.border.color})`
                            }
                        },
                        focus: {
                            shadow: `var(${prefix}help-focus-shadow)`
                        },
                        active: {
                            color: `var(${prefix}help-active-color)`,
                            background: `var(${prefix}help-active-background)`,
                            border: {
                                width: `var(${prefix}help-active-border-width, ${variables.types.help.border.width})`,
                                style: `var(${prefix}help-active-border-style, ${variables.types.help.border.style})`,
                                color: `var(${prefix}help-active-border-color, ${variables.types.help.border.color})`
                            }
                        }
                    },
                    types: {
                        outlined: {
                            color: `var(${prefix}help-outlined-color, ${variables.types.help.background})`,
                            background: `var(${prefix}help-outlined-background, transparent)`,
                            border: {
                                width: `var(${prefix}help-outlined-border-width, ${variables.types.outlined.border.width})`,
                                style: `var(${prefix}help-outlined-border-style, ${variables.types.outlined.border.style})`,
                                color: `var(${prefix}help-outlined-border-color, ${variables.types.outlined.border.color})`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}help-outlined-hover-color, ${variables.types.help.background})`,
                                    background: `var(${prefix}help-outlined-hover-background)`,
                                    border: {
                                        width: `var(${prefix}help-outlined-hover-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}help-outlined-hover-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}help-outlined-hover-border-color, ${variables.types.outlined.border.color})`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}help-outlined-active-color, ${variables.types.help.background})`,
                                    background: `var(${prefix}help-outlined-active-background)`,
                                    border: {
                                        width: `var(${prefix}help-outlined-active-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}help-outlined-active-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}help-outlined-active-border-color, ${variables.types.outlined.border.color})`
                                    }
                                }
                            }
                        },
                        text: {
                            color: `var(${prefix}help-text-color, ${variables.types.help.background})`,
                            background: `var(${prefix}help-text-background, transparent)`,
                            border: {
                                width: `var(${prefix}help-text-border-width, ${variables.types.help.border.width})`,
                                style: `var(${prefix}help-text-border-style, ${variables.types.help.border.style})`,
                                color: `var(${prefix}help-text-border-color, transparent)`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}help-text-hover-color, ${variables.types.help.background})`,
                                    background: `var(${prefix}help-text-hover-background)`,
                                    border: {
                                        width: `var(${prefix}help-text-hover-border-width, ${variables.types.help.border.width})`,
                                        style: `var(${prefix}help-text-hover-border-style, ${variables.types.help.border.style})`,
                                        color: `var(${prefix}help-text-hover-border-color, transparent)`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}help-text-active-color, ${variables.types.help.background})`,
                                    background: `var(${prefix}help-text-active-background)`,
                                    border: {
                                        width: `var(${prefix}help-text-active-border-width, ${variables.types.help.border.width})`,
                                        style: `var(${prefix}help-text-active-border-style, ${variables.types.help.border.style})`,
                                        color: `var(${prefix}help-text-active-border-color, transparent)`
                                    }
                                }
                            }
                        }
                    }
                },
                danger: {
                    color: `var(${prefix}danger-color)`,
                    background: `var(${prefix}danger-background)`,
                    border: {
                        width: `var(${prefix}danger-border-width)`,
                        style: `var(${prefix}danger-border-style)`,
                        color: `var(${prefix}danger-border-color)`
                    },
                    states: {
                        hover: {
                            color: `var(${prefix}danger-hover-color)`,
                            background: `var(${prefix}danger-hover-background)`,
                            border: {
                                width: `var(${prefix}danger-hover-border-width, ${variables.types.danger.border.width})`,
                                style: `var(${prefix}danger-hover-border-style, ${variables.types.danger.border.style})`,
                                color: `var(${prefix}danger-hover-border-color, ${variables.types.danger.border.color})`
                            }
                        },
                        focus: {
                            shadow: `var(${prefix}danger-focus-shadow)`
                        },
                        active: {
                            color: `var(${prefix}danger-active-color)`,
                            background: `var(${prefix}danger-active-background)`,
                            border: {
                                width: `var(${prefix}danger-active-border-width, ${variables.types.danger.border.width})`,
                                style: `var(${prefix}danger-active-border-style, ${variables.types.danger.border.style})`,
                                color: `var(${prefix}danger-active-border-color, ${variables.types.danger.border.color})`
                            }
                        }
                    },
                    types: {
                        outlined: {
                            color: `var(${prefix}danger-outlined-color, ${variables.types.danger.background})`,
                            background: `var(${prefix}danger-outlined-background, transparent)`,
                            border: {
                                width: `var(${prefix}danger-outlined-border-width, ${variables.types.outlined.border.width})`,
                                style: `var(${prefix}danger-outlined-border-style, ${variables.types.outlined.border.style})`,
                                color: `var(${prefix}danger-outlined-border-color, ${variables.types.outlined.border.color})`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}danger-outlined-hover-color, ${variables.types.danger.background})`,
                                    background: `var(${prefix}danger-outlined-hover-background)`,
                                    border: {
                                        width: `var(${prefix}danger-outlined-hover-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}danger-outlined-hover-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}danger-outlined-hover-border-color, ${variables.types.outlined.border.color})`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}danger-outlined-active-color, ${variables.types.danger.background})`,
                                    background: `var(${prefix}danger-outlined-active-background)`,
                                    border: {
                                        width: `var(${prefix}danger-outlined-active-border-width, ${variables.types.outlined.border.width})`,
                                        style: `var(${prefix}danger-outlined-active-border-style, ${variables.types.outlined.border.style})`,
                                        color: `var(${prefix}danger-outlined-active-border-color, ${variables.types.outlined.border.color})`
                                    }
                                }
                            }
                        },
                        text: {
                            color: `var(${prefix}danger-text-color, ${variables.types.danger.background})`,
                            background: `var(${prefix}danger-text-background, transparent)`,
                            border: {
                                width: `var(${prefix}danger-text-border-width, ${variables.types.danger.border.width})`,
                                style: `var(${prefix}danger-text-border-style, ${variables.types.danger.border.style})`,
                                color: `var(${prefix}danger-text-border-color, transparent)`
                            },
                            states: {
                                hover: {
                                    color: `var(${prefix}danger-text-hover-color, ${variables.types.danger.background})`,
                                    background: `var(${prefix}danger-text-hover-background)`,
                                    border: {
                                        width: `var(${prefix}danger-text-hover-border-width, ${variables.types.danger.border.width})`,
                                        style: `var(${prefix}danger-text-hover-border-style, ${variables.types.danger.border.style})`,
                                        color: `var(${prefix}danger-text-hover-border-color, transparent)`
                                    }
                                },
                                active: {
                                    color: `var(${prefix}danger-text-active-color, ${variables.types.danger.background})`,
                                    background: `var(${prefix}danger-text-active-background)`,
                                    border: {
                                        width: `var(${prefix}danger-text-active-border-width, ${variables.types.danger.border.width})`,
                                        style: `var(${prefix}danger-text-active-border-style, ${variables.types.danger.border.style})`,
                                        color: `var(${prefix}danger-text-active-border-color, transparent)`
                                    }
                                }
                            }
                        }
                    }
                },
                link: {
                    background: `var(${prefix}link-background, transparent)`,
                    color: `var(${prefix}link-color)`,
                    border: {
                        width: `var(${prefix}link-border-width)`,
                        style: `var(${prefix}link-border-style)`,
                        color: `var(${prefix}link-border-color, transparent)`
                    },
                    states: {
                        hover: {
                            background: `var(${prefix}link-hover-background, transparent)`,
                            color: `var(${prefix}link-hover-color)`,
                            border: {
                                width: `var(${prefix}link-hover-border-width)`,
                                style: `var(${prefix}link-hover-border-style)`,
                                color: `var(${prefix}link-hover-border-color, transparent)`
                            },
                            textDecoration: `var(${prefix}link-hover-text-decoration)`
                        },
                        focus: {
                            background: `var(${prefix}link-focus-background, transparent)`,
                            color: `var(${prefix}link-focus-color)`,
                            border: {
                                width: `var(${prefix}link-focus-border-width)`,
                                style: `var(${prefix}link-focus-border-style)`,
                                color: `var(${prefix}link-focus-border-color, transparent)`
                            },
                            shadow: `var(${prefix}link-focus-shadow)`
                        },
                        active: {
                            background: `var(${prefix}link-active-background, transparent)`,
                            color: `var(${prefix}link-active-color, ${variables.types.link.color})`,
                            border: {
                                width: `var(${prefix}link-active-border-width)`,
                                style: `var(${prefix}link-active-border-style)`,
                                color: `var(${prefix}link-active-border-color, transparent)`
                            }
                        }
                    }
                }
            },
            slots: {
                label: {
                    transition: `var(${prefix}label-transition)`
                },
                icon: {
                    font: {
                        size: `var(${prefix}icon-font-size, ${common_variables.primeicon.font.size})`
                    },
                    top: {
                        margin: {
                            top: `var(${prefix}icon-top-margin-top)`,
                            right: `var(${prefix}icon-top-margin-right)`,
                            bottom: `var(${prefix}icon-top-margin-bottom, ${common_variables.inlineSpacing})`,
                            left: `var(${prefix}icon-top-margin-left)`
                        }
                    },
                    right: {
                        margin: {
                            top: `var(${prefix}icon-right-margin-top)`,
                            right: `var(${prefix}icon-right-margin-right)`,
                            bottom: `var(${prefix}icon-right-margin-bottom)`,
                            left: `var(${prefix}icon-right-margin-left, ${common_variables.inlineSpacing})`
                        }
                    },
                    bottom: {
                        margin: {
                            top: `var(${prefix}icon-bottom-margin-top, ${common_variables.inlineSpacing})`,
                            right: `var(${prefix}icon-bottom-margin-right)`,
                            bottom: `var(${prefix}icon-bottom-margin-bottom)`,
                            left: `var(${prefix}icon-bottom-margin-left)`
                        }
                    },
                    left: {
                        margin: {
                            top: `var(${prefix}icon-left-margin-top)`,
                            right: `var(${prefix}icon-left-margin-right, ${common_variables.inlineSpacing})`,
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
                        left: `var(${prefix}badge-margin-left, ${common_variables.inlineSpacing})`
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

        return { prefix, variables };
    },
    getComputedStyle: (props) => {
        const { variables } = ButtonBase.getStyleProps(props);
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
.p-fluid .p-button {
    width: 100%;
}

.p-fluid .p-buttonset {
    display: flex;
}
.p-fluid .p-buttonset .p-button {
    flex: 1;
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
.p-button.p-button-sm {
    font-size: calc(${variables.font.size} * ${variables.types.scale.small});
    padding-top: calc(${variables.padding.top} * ${variables.types.scale.small});
    padding-right: calc(${variables.padding.right} * ${variables.types.scale.small});
    padding-bottom: calc(${variables.padding.bottom} * ${variables.types.scale.small});
    padding-left: calc(${variables.padding.left} * ${variables.types.scale.small});
}
.p-button.p-button-sm .p-button-icon {
    font-size: calc(${variables.slots.icon.font.size} * ${variables.types.scale.small});
}
.p-button.p-button-lg {
    font-size: calc(${variables.font.size} * ${variables.types.scale.large});
    padding-top: calc(${variables.padding.top} * ${variables.types.scale.large});
    padding-right: calc(${variables.padding.right} * ${variables.types.scale.large});
    padding-bottom: calc(${variables.padding.bottom} * ${variables.types.scale.large});
    padding-left: calc(${variables.padding.left} * ${variables.types.scale.large});
}
.p-button.p-button-lg .p-button-icon {
    font-size: calc(${variables.slots.icon.font.size} * ${variables.types.scale.large});
}
.p-button-loading-top .p-button-label {
    margin-top: ${variables.types.loading.top.margin.top};
    margin-right: ${variables.types.loading.top.margin.right};
    margin-bottom: ${variables.types.loading.top.margin.bottom};
    margin-left: ${variables.types.loading.top.margin.left};
}
.p-button-loading-right .p-button-label {
    margin-top: ${variables.types.loading.right.margin.top};
    margin-right: ${variables.types.loading.right.margin.right};
    margin-bottom: ${variables.types.loading.right.margin.bottom};
    margin-left: ${variables.types.loading.right.margin.left};
}
.p-button-loading-bottom .p-button-label {
    margin-top: ${variables.types.loading.bottom.margin.top};
    margin-right: ${variables.types.loading.bottom.margin.right};
    margin-bottom: ${variables.types.loading.bottom.margin.bottom};
    margin-left: ${variables.types.loading.bottom.margin.left};
}
.p-button-loading-left .p-button-label {
    margin-top: ${variables.types.loading.left.margin.top};
    margin-right: ${variables.types.loading.left.margin.right};
    margin-bottom: ${variables.types.loading.left.margin.bottom};
    margin-left: ${variables.types.loading.left.margin.left};
}
.p-button-loading-icon {
    margin-top: ${variables.types.loading.icon.margin.top};
    margin-right: ${variables.types.loading.icon.margin.right};
    margin-bottom: ${variables.types.loading.icon.margin.bottom};
    margin-left: ${variables.types.loading.icon.margin.left};
}
.p-button.p-button-secondary {
    color: ${variables.types.secondary.color};
    background: ${variables.types.secondary.background};
    border-width: ${variables.types.secondary.border.width};
    border-style: ${variables.types.secondary.border.style};
    border-color: ${variables.types.secondary.border.color};
}
.p-button.p-button-secondary:enabled:hover,
.p-button.p-button-secondary:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.secondary.states.hover.color};
    background: ${variables.types.secondary.states.hover.background};
    border-width: ${variables.types.secondary.states.hover.border.width};
    border-style: ${variables.types.secondary.states.hover.border.style};
    border-color: ${variables.types.secondary.states.hover.border.color};
}
.p-button.p-button-secondary:enabled:focus,
.p-button.p-button-secondary:not(button):not(a):not(.p-disabled):focus {
    color: ${variables.types.secondary.states.focus.color};
    background: ${variables.types.secondary.states.focus.background};
    border-width: ${variables.types.secondary.states.focus.border.width};
    border-style: ${variables.types.secondary.states.focus.border.style};
    border-color: ${variables.types.secondary.states.focus.border.color};
}
.p-button.p-button-secondary:enabled:active,
.p-button.p-button-secondary:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.secondary.states.active.color};
    background: ${variables.types.secondary.states.active.background};
    border-width: ${variables.types.secondary.states.active.border.width};
    border-style: ${variables.types.secondary.states.active.border.style};
    border-color: ${variables.types.secondary.states.active.border.color};
}
.p-button.p-button-secondary.p-button-outlined {
    color: ${variables.types.secondary.types.outlined.color};
    background: ${variables.types.secondary.types.outlined.background};
    border-width: ${variables.types.secondary.types.outlined.border.width};
    border-style: ${variables.types.secondary.types.outlined.border.style};
    border-color: ${variables.types.secondary.types.outlined.border.color};
}
.p-button.p-button-secondary.p-button-outlined:enabled:hover,
.p-button.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.secondary.types.outlined.states.hover.color};
    background: ${variables.types.secondary.types.outlined.states.hover.background};
    border-width: ${variables.types.secondary.types.outlined.states.hover.border.width};
    border-style: ${variables.types.secondary.types.outlined.states.hover.border.style};
    border-color: ${variables.types.secondary.types.outlined.states.hover.border.color};
}
.p-button.p-button-secondary.p-button-outlined:enabled:active,
.p-button.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.secondary.types.outlined.states.active.color};
    background: ${variables.types.secondary.types.outlined.states.active.background};
    border-width: ${variables.types.secondary.types.outlined.states.active.border.width};
    border-style: ${variables.types.secondary.types.outlined.states.active.border.style};
    border-color: ${variables.types.secondary.types.outlined.states.active.border.color};
}
.p-button.p-button-secondary.p-button-text {
    color: ${variables.types.secondary.types.text.color};
    background: ${variables.types.secondary.types.text.background};
    border-width: ${variables.types.secondary.types.text.border.width};
    border-style: ${variables.types.secondary.types.text.border.style};
    border-color: ${variables.types.secondary.types.text.border.color};
}
.p-button.p-button-secondary.p-button-text:enabled:hover,
.p-button.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.secondary.types.text.states.hover.color};
    background: ${variables.types.secondary.types.text.states.hover.background};
    border-width: ${variables.types.secondary.types.text.states.hover.border.width};
    border-style: ${variables.types.secondary.types.text.states.hover.border.style};
    border-color: ${variables.types.secondary.types.text.states.hover.border.color};
}
.p-button.p-button-secondary.p-button-text:enabled:active,
.p-button.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.secondary.types.text.states.active.color};
    background: ${variables.types.secondary.types.text.states.active.background};
    border-width: ${variables.types.secondary.types.text.states.active.border.width};
    border-style: ${variables.types.secondary.types.text.states.active.border.style};
    border-color: ${variables.types.secondary.types.text.states.active.border.color};
}
.p-button.p-button-info {
    color: ${variables.types.info.color};
    background: ${variables.types.info.background};
    border-width: ${variables.types.info.border.width};
    border-style: ${variables.types.info.border.style};
    border-color: ${variables.types.info.border.color};
}
.p-button.p-button-info:enabled:hover,
.p-button.p-button-info:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.info.states.hover.color};
    background: ${variables.types.info.states.hover.background};
    border-width: ${variables.types.info.states.hover.border.width};
    border-style: ${variables.types.info.states.hover.border.style};
    border-color: ${variables.types.info.states.hover.border.color};
}
.p-button.p-button-info:enabled:focus,
.p-button.p-button-info:not(button):not(a):not(.p-disabled):focus {
    color: ${variables.types.info.states.focus.color};
    background: ${variables.types.info.states.focus.background};
    border-width: ${variables.types.info.states.focus.border.width};
    border-style: ${variables.types.info.states.focus.border.style};
    border-color: ${variables.types.info.states.focus.border.color};
}
.p-button.p-button-info:enabled:active,
.p-button.p-button-info:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.info.states.active.color};
    background: ${variables.types.info.states.active.background};
    border-width: ${variables.types.info.states.active.border.width};
    border-style: ${variables.types.info.states.active.border.style};
    border-color: ${variables.types.info.states.active.border.color};
}
.p-button.p-button-info.p-button-outlined {
    color: ${variables.types.info.types.outlined.color};
    background: ${variables.types.info.types.outlined.background};
    border-width: ${variables.types.info.types.outlined.border.width};
    border-style: ${variables.types.info.types.outlined.border.style};
    border-color: ${variables.types.info.types.outlined.border.color};
}
.p-button.p-button-info.p-button-outlined:enabled:hover,
.p-button.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.info.types.outlined.states.hover.color};
    background: ${variables.types.info.types.outlined.states.hover.background};
    border-width: ${variables.types.info.types.outlined.states.hover.border.width};
    border-style: ${variables.types.info.types.outlined.states.hover.border.style};
    border-color: ${variables.types.info.types.outlined.states.hover.border.color};
}
.p-button.p-button-info.p-button-outlined:enabled:active,
.p-button.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.info.types.outlined.states.active.color};
    background: ${variables.types.info.types.outlined.states.active.background};
    border-width: ${variables.types.info.types.outlined.states.active.border.width};
    border-style: ${variables.types.info.types.outlined.states.active.border.style};
    border-color: ${variables.types.info.types.outlined.states.active.border.color};
}
.p-button.p-button-info.p-button-text {
    color: ${variables.types.info.types.text.color};
    background: ${variables.types.info.types.text.background};
    border-width: ${variables.types.info.types.text.border.width};
    border-style: ${variables.types.info.types.text.border.style};
    border-color: ${variables.types.info.types.text.border.color};
}
.p-button.p-button-info.p-button-text:enabled:hover,
.p-button.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.info.types.text.states.hover.color};
    background: ${variables.types.info.types.text.states.hover.background};
    border-width: ${variables.types.info.types.text.states.hover.border.width};
    border-style: ${variables.types.info.types.text.states.hover.border.style};
    border-color: ${variables.types.info.types.text.states.hover.border.color};
}
.p-button.p-button-info.p-button-text:enabled:active,
.p-button.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.info.types.text.states.active.color};
    background: ${variables.types.info.types.text.states.active.background};
    border-width: ${variables.types.info.types.text.states.active.border.width};
    border-style: ${variables.types.info.types.text.states.active.border.style};
    border-color: ${variables.types.info.types.text.states.active.border.color};
}
.p-button.p-button-success {
    color: ${variables.types.success.color};
    background: ${variables.types.success.background};
    border-width: ${variables.types.success.border.width};
    border-style: ${variables.types.success.border.style};
    border-color: ${variables.types.success.border.color};
}
.p-button.p-button-success:enabled:hover,
.p-button.p-button-success:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.success.states.hover.color};
    background: ${variables.types.success.states.hover.background};
    border-width: ${variables.types.success.states.hover.border.width};
    border-style: ${variables.types.success.states.hover.border.style};
    border-color: ${variables.types.success.states.hover.border.color};
}
.p-button.p-button-success:enabled:focus,
.p-button.p-button-success:not(button):not(a):not(.p-disabled):focus {
    color: ${variables.types.success.states.focus.color};
    background: ${variables.types.success.states.focus.background};
    border-width: ${variables.types.success.states.focus.border.width};
    border-style: ${variables.types.success.states.focus.border.style};
    border-color: ${variables.types.success.states.focus.border.color};
}
.p-button.p-button-success:enabled:active,
.p-button.p-button-success:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.success.states.active.color};
    background: ${variables.types.success.states.active.background};
    border-width: ${variables.types.success.states.active.border.width};
    border-style: ${variables.types.success.states.active.border.style};
    border-color: ${variables.types.success.states.active.border.color};
}
.p-button.p-button-success.p-button-outlined {
    color: ${variables.types.success.types.outlined.color};
    background: ${variables.types.success.types.outlined.background};
    border-width: ${variables.types.success.types.outlined.border.width};
    border-style: ${variables.types.success.types.outlined.border.style};
    border-color: ${variables.types.success.types.outlined.border.color};
}
.p-button.p-button-success.p-button-outlined:enabled:hover,
.p-button.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.success.types.outlined.states.hover.color};
    background: ${variables.types.success.types.outlined.states.hover.background};
    border-width: ${variables.types.success.types.outlined.states.hover.border.width};
    border-style: ${variables.types.success.types.outlined.states.hover.border.style};
    border-color: ${variables.types.success.types.outlined.states.hover.border.color};
}
.p-button.p-button-success.p-button-outlined:enabled:active,
.p-button.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.success.types.outlined.states.active.color};
    background: ${variables.types.success.types.outlined.states.active.background};
    border-width: ${variables.types.success.types.outlined.states.active.border.width};
    border-style: ${variables.types.success.types.outlined.states.active.border.style};
    border-color: ${variables.types.success.types.outlined.states.active.border.color};
}
.p-button.p-button-success.p-button-text {
    color: ${variables.types.success.types.text.color};
    background: ${variables.types.success.types.text.background};
    border-width: ${variables.types.success.types.text.border.width};
    border-style: ${variables.types.success.types.text.border.style};
    border-color: ${variables.types.success.types.text.border.color};
}
.p-button.p-button-success.p-button-text:enabled:hover,
.p-button.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.success.types.text.states.hover.color};
    background: ${variables.types.success.types.text.states.hover.background};
    border-width: ${variables.types.success.types.text.states.hover.border.width};
    border-style: ${variables.types.success.types.text.states.hover.border.style};
    border-color: ${variables.types.success.types.text.states.hover.border.color};
}
.p-button.p-button-success.p-button-text:enabled:active,
.p-button.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.success.types.text.states.active.color};
    background: ${variables.types.success.types.text.states.active.background};
    border-width: ${variables.types.success.types.text.states.active.border.width};
    border-style: ${variables.types.success.types.text.states.active.border.style};
    border-color: ${variables.types.success.types.text.states.active.border.color};
}
.p-button.p-button-warning {
    color: ${variables.types.warning.color};
    background: ${variables.types.warning.background};
    border-width: ${variables.types.warning.border.width};
    border-style: ${variables.types.warning.border.style};
    border-color: ${variables.types.warning.border.color};
}
.p-button.p-button-warning:enabled:hover,
.p-button.p-button-warning:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.warning.states.hover.color};
    background: ${variables.types.warning.states.hover.background};
    border-width: ${variables.types.warning.states.hover.border.width};
    border-style: ${variables.types.warning.states.hover.border.style};
    border-color: ${variables.types.warning.states.hover.border.color};
}
.p-button.p-button-warning:enabled:focus,
.p-button.p-button-warning:not(button):not(a):not(.p-disabled):focus {
    color: ${variables.types.warning.states.focus.color};
    background: ${variables.types.warning.states.focus.background};
    border-width: ${variables.types.warning.states.focus.border.width};
    border-style: ${variables.types.warning.states.focus.border.style};
    border-color: ${variables.types.warning.states.focus.border.color};
}
.p-button.p-button-warning:enabled:active,
.p-button.p-button-warning:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.warning.states.active.color};
    background: ${variables.types.warning.states.active.background};
    border-width: ${variables.types.warning.states.active.border.width};
    border-style: ${variables.types.warning.states.active.border.style};
    border-color: ${variables.types.warning.states.active.border.color};
}
.p-button.p-button-warning.p-button-outlined {
    color: ${variables.types.warning.types.outlined.color};
    background: ${variables.types.warning.types.outlined.background};
    border-width: ${variables.types.warning.types.outlined.border.width};
    border-style: ${variables.types.warning.types.outlined.border.style};
    border-color: ${variables.types.warning.types.outlined.border.color};
}
.p-button.p-button-warning.p-button-outlined:enabled:hover,
.p-button.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.warning.types.outlined.states.hover.color};
    background: ${variables.types.warning.types.outlined.states.hover.background};
    border-width: ${variables.types.warning.types.outlined.states.hover.border.width};
    border-style: ${variables.types.warning.types.outlined.states.hover.border.style};
    border-color: ${variables.types.warning.types.outlined.states.hover.border.color};
}
.p-button.p-button-warning.p-button-outlined:enabled:active,
.p-button.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.warning.types.outlined.states.active.color};
    background: ${variables.types.warning.types.outlined.states.active.background};
    border-width: ${variables.types.warning.types.outlined.states.active.border.width};
    border-style: ${variables.types.warning.types.outlined.states.active.border.style};
    border-color: ${variables.types.warning.types.outlined.states.active.border.color};
}
.p-button.p-button-warning.p-button-text {
    color: ${variables.types.warning.types.text.color};
    background: ${variables.types.warning.types.text.background};
    border-width: ${variables.types.warning.types.text.border.width};
    border-style: ${variables.types.warning.types.text.border.style};
    border-color: ${variables.types.warning.types.text.border.color};
}
.p-button.p-button-warning.p-button-text:enabled:hover,
.p-button.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.warning.types.text.states.hover.color};
    background: ${variables.types.warning.types.text.states.hover.background};
    border-width: ${variables.types.warning.types.text.states.hover.border.width};
    border-style: ${variables.types.warning.types.text.states.hover.border.style};
    border-color: ${variables.types.warning.types.text.states.hover.border.color};
}
.p-button.p-button-warning.p-button-text:enabled:active,
.p-button.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.warning.types.text.states.active.color};
    background: ${variables.types.warning.types.text.states.active.background};
    border-width: ${variables.types.warning.types.text.states.active.border.width};
    border-style: ${variables.types.warning.types.text.states.active.border.style};
    border-color: ${variables.types.warning.types.text.states.active.border.color};
}
.p-button.p-button-help {
    color: ${variables.types.help.color};
    background: ${variables.types.help.background};
    border-width: ${variables.types.help.border.width};
    border-style: ${variables.types.help.border.style};
    border-color: ${variables.types.help.border.color};
}
.p-button.p-button-help:enabled:hover,
.p-button.p-button-help:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.help.states.hover.color};
    background: ${variables.types.help.states.hover.background};
    border-width: ${variables.types.help.states.hover.border.width};
    border-style: ${variables.types.help.states.hover.border.style};
    border-color: ${variables.types.help.states.hover.border.color};
}
.p-button.p-button-help:enabled:focus,
.p-button.p-button-help:not(button):not(a):not(.p-disabled):focus {
    color: ${variables.types.help.states.focus.color};
    background: ${variables.types.help.states.focus.background};
    border-width: ${variables.types.help.states.focus.border.width};
    border-style: ${variables.types.help.states.focus.border.style};
    border-color: ${variables.types.help.states.focus.border.color};
}
.p-button.p-button-help:enabled:active,
.p-button.p-button-help:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.help.states.active.color};
    background: ${variables.types.help.states.active.background};
    border-width: ${variables.types.help.states.active.border.width};
    border-style: ${variables.types.help.states.active.border.style};
    border-color: ${variables.types.help.states.active.border.color};
}
.p-button.p-button-help.p-button-outlined {
    color: ${variables.types.help.types.outlined.color};
    background: ${variables.types.help.types.outlined.background};
    border-width: ${variables.types.help.types.outlined.border.width};
    border-style: ${variables.types.help.types.outlined.border.style};
    border-color: ${variables.types.help.types.outlined.border.color};
}
.p-button.p-button-help.p-button-outlined:enabled:hover,
.p-button.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.help.types.outlined.states.hover.color};
    background: ${variables.types.help.types.outlined.states.hover.background};
    border-width: ${variables.types.help.types.outlined.states.hover.border.width};
    border-style: ${variables.types.help.types.outlined.states.hover.border.style};
    border-color: ${variables.types.help.types.outlined.states.hover.border.color};
}
.p-button.p-button-help.p-button-outlined:enabled:active,
.p-button.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.help.types.outlined.states.active.color};
    background: ${variables.types.help.types.outlined.states.active.background};
    border-width: ${variables.types.help.types.outlined.states.active.border.width};
    border-style: ${variables.types.help.types.outlined.states.active.border.style};
    border-color: ${variables.types.help.types.outlined.states.active.border.color};
}
.p-button.p-button-help.p-button-text {
    color: ${variables.types.help.types.text.color};
    background: ${variables.types.help.types.text.background};
    border-width: ${variables.types.help.types.text.border.width};
    border-style: ${variables.types.help.types.text.border.style};
    border-color: ${variables.types.help.types.text.border.color};
}
.p-button.p-button-help.p-button-text:enabled:hover,
.p-button.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.help.types.text.states.hover.color};
    background: ${variables.types.help.types.text.states.hover.background};
    border-width: ${variables.types.help.types.text.states.hover.border.width};
    border-style: ${variables.types.help.types.text.states.hover.border.style};
    border-color: ${variables.types.help.types.text.states.hover.border.color};
}
.p-button.p-button-help.p-button-text:enabled:active,
.p-button.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.help.types.text.states.active.color};
    background: ${variables.types.help.types.text.states.active.background};
    border-width: ${variables.types.help.types.text.states.active.border.width};
    border-style: ${variables.types.help.types.text.states.active.border.style};
    border-color: ${variables.types.help.types.text.states.active.border.color};
}
.p-button.p-button-danger {
    color: ${variables.types.danger.color};
    background: ${variables.types.danger.background};
    border-width: ${variables.types.danger.border.width};
    border-style: ${variables.types.danger.border.style};
    border-color: ${variables.types.danger.border.color};
}
.p-button.p-button-danger:enabled:hover,
.p-button.p-button-danger:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.danger.states.hover.color};
    background: ${variables.types.danger.states.hover.background};
    border-width: ${variables.types.danger.states.hover.border.width};
    border-style: ${variables.types.danger.states.hover.border.style};
    border-color: ${variables.types.danger.states.hover.border.color};
}
.p-button.p-button-danger:enabled:focus,
.p-button.p-button-danger:not(button):not(a):not(.p-disabled):focus {
    color: ${variables.types.danger.states.focus.color};
    background: ${variables.types.danger.states.focus.background};
    border-width: ${variables.types.danger.states.focus.border.width};
    border-style: ${variables.types.danger.states.focus.border.style};
    border-color: ${variables.types.danger.states.focus.border.color};
}
.p-button.p-button-danger:enabled:active,
.p-button.p-button-danger:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.danger.states.active.color};
    background: ${variables.types.danger.states.active.background};
    border-width: ${variables.types.danger.states.active.border.width};
    border-style: ${variables.types.danger.states.active.border.style};
    border-color: ${variables.types.danger.states.active.border.color};
}
.p-button.p-button-danger.p-button-outlined {
    color: ${variables.types.danger.types.outlined.color};
    background: ${variables.types.danger.types.outlined.background};
    border-width: ${variables.types.danger.types.outlined.border.width};
    border-style: ${variables.types.danger.types.outlined.border.style};
    border-color: ${variables.types.danger.types.outlined.border.color};
}
.p-button.p-button-danger.p-button-outlined:enabled:hover,
.p-button.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.danger.types.outlined.states.hover.color};
    background: ${variables.types.danger.types.outlined.states.hover.background};
    border-width: ${variables.types.danger.types.outlined.states.hover.border.width};
    border-style: ${variables.types.danger.types.outlined.states.hover.border.style};
    border-color: ${variables.types.danger.types.outlined.states.hover.border.color};
}
.p-button.p-button-danger.p-button-outlined:enabled:active,
.p-button.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.danger.types.outlined.states.active.color};
    background: ${variables.types.danger.types.outlined.states.active.background};
    border-width: ${variables.types.danger.types.outlined.states.active.border.width};
    border-style: ${variables.types.danger.types.outlined.states.active.border.style};
    border-color: ${variables.types.danger.types.outlined.states.active.border.color};
}
.p-button.p-button-danger.p-button-text {
    color: ${variables.types.danger.types.text.color};
    background: ${variables.types.danger.types.text.background};
    border-width: ${variables.types.danger.types.text.border.width};
    border-style: ${variables.types.danger.types.text.border.style};
    border-color: ${variables.types.danger.types.text.border.color};
}
.p-button.p-button-danger.p-button-text:enabled:hover,
.p-button.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.danger.types.text.states.hover.color};
    background: ${variables.types.danger.types.text.states.hover.background};
    border-width: ${variables.types.danger.types.text.states.hover.border.width};
    border-style: ${variables.types.danger.types.text.states.hover.border.style};
    border-color: ${variables.types.danger.types.text.states.hover.border.color};
}
.p-button.p-button-danger.p-button-text:enabled:active,
.p-button.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.danger.types.text.states.active.color};
    background: ${variables.types.danger.types.text.states.active.background};
    border-width: ${variables.types.danger.types.text.states.active.border.width};
    border-style: ${variables.types.danger.types.text.states.active.border.style};
    border-color: ${variables.types.danger.types.text.states.active.border.color};
}
.p-button.p-button-link {
    color: ${variables.types.link.color};
    background: ${variables.types.link.background};
    border-width: ${variables.types.link.border.width};
    border-style: ${variables.types.link.border.style};
    border-color: ${variables.types.link.border.color};
}
.p-button.p-button-link:enabled:hover,
.p-button.p-button-link:not(button):not(a):not(.p-disabled):hover {
    color: ${variables.types.link.states.hover.color};
    background: ${variables.types.link.states.hover.background};
    border-width: ${variables.types.link.states.hover.border.width};
    border-style: ${variables.types.link.states.hover.border.style};
    border-color: ${variables.types.link.states.hover.border.color};
}
.p-button.p-button-link:enabled:hover .p-button-label,
.p-button.p-button-link:not(button):not(a):not(.p-disabled):hover .p-button-label {
    text-decoration: ${variables.types.link.states.hover.textDecoration};
}
.p-button.p-button-link:enabled:focus,
.p-button.p-button-link:not(button):not(a):not(.p-disabled):focus {
    color: ${variables.types.link.states.focus.color};
    background: ${variables.types.link.states.focus.background};
    border-width: ${variables.types.link.states.focus.border.width};
    border-style: ${variables.types.link.states.focus.border.style};
    border-color: ${variables.types.link.states.focus.border.color};
    box-shadow: ${variables.types.link.states.focus.shadow};
}
.p-button.p-button-link:enabled:active,
.p-button.p-button-link:not(button):not(a):not(.p-disabled):active {
    color: ${variables.types.link.states.active.color};
    background: ${variables.types.link.states.active.background};
    border-width: ${variables.types.link.states.active.border.width};
    border-style: ${variables.types.link.states.active.border.style};
    border-color: ${variables.types.link.states.active.border.color};
}
.p-fluid .p-button-icon-only {
    width: ${variables.types.iconOnly.width};
}
        `;

        return `
/** module: button **/
${unstyled}
${styled}
        `;
    }
};
