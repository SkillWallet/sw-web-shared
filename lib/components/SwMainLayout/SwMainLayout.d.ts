/// <reference types="react" />
export interface SwLayoutProps {
    backgroundUrl?: any;
    contentBackgroundColor?: string;
    children?: JSX.Element;
    drawer?: JSX.Element;
}
declare const SwLayout: ({ backgroundUrl, contentBackgroundColor, children, drawer, }: SwLayoutProps) => JSX.Element;
export default SwLayout;
