import * as React from 'react';
export interface ISourcePagesProps {
}
export interface ISourcePagesState {
}
export default class SourcePages extends React.Component<ISourcePagesProps, ISourcePagesState> {
    private _performance;
    constructor(props: ISourcePagesProps);
    componentDidMount(): Promise<void>;
    componentDidUpdate(_prevProps: ISourcePagesProps): void;
    render(): React.ReactElement<ISourcePagesProps>;
}
