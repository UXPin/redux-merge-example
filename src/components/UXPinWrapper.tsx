import { ReactNode } from 'react';
import store from '../store';

export default function UXPinWrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
