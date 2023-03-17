import * as React from 'react';
import { CommonBase } from '../common/CommonBase';
import { useStyle } from '../hooks/useStyle';
import { ObjectUtils } from '../utils/Utils';

export const PrimeReactContext = React.createContext();

export const PrimeReactProvider = (props) => {
    const [state, setState] = React.useState({
        themeProps: null
    });

    const { addStyle } = useStyle({ style: CommonBase.getComputedStyle(), options: { key: 'common' } });

    const changeTheme = React.useCallback((value) => {
        //setState((prevState) => ({ ...prevState, themeProps: value }));
        const cssVariables = ObjectUtils.convertToString(ObjectUtils.convertToCSSVariables(value));
        const style = `
    :root {
        ${cssVariables}
    }
        `;

        addStyle(style, 'global');
    }, []);

    React.useEffect(() => {
        const cssVariables = ObjectUtils.convertToString(ObjectUtils.convertToCSSVariables(props.themeProps));
        const style = `
    :root {
        ${cssVariables}
    }
        `;

        addStyle(style, 'global');
    }, []);

    const value = React.useMemo(
        () => ({
            state,
            changeTheme
        }),
        [state, changeTheme]
    );

    return <PrimeReactContext.Provider value={value}>{props.children}</PrimeReactContext.Provider>;
};
