// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            black: '#000';
            white: '#fff';
        };

        spacings: {
            xsmall: '0.5rem';
            small: '1rem';
            medium: '2rem';
            large: '4rem';
        };
    }
}
