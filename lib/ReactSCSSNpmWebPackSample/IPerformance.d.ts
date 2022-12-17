export interface IPerformanceOp {
    label: string;
    start: Date;
    end?: Date;
    startStr: string;
    endStr?: string;
    ms?: number;
    c?: number;
    a?: number;
    mode?: DisplayMode;
    details: IPerformanceOp[];
}
export interface IPerformanceOpWithDetails extends IPerformanceOp {
    details: IPerformanceOp[];
}
/**
 * ILoadPerformance is Baseline common performance informance detail
 * For logging load times - it gets converted to IMinPerformance for saving a lighter version for analytics
 */
export interface ILoadPerformance {
    mode: DisplayMode;
    monitor: boolean;
    onInit: Date;
    constructor: Date;
    getAllProps?: boolean;
    history?: IHistoryPerformance[];
    sets: {
        setting0?: IMinPerformanceSetting;
        setting1?: IMinPerformanceSetting;
        setting2?: IMinPerformanceSetting;
        setting3?: IMinPerformanceSetting;
        setting4?: IMinPerformanceSetting;
        setting5?: IMinPerformanceSetting;
        setting6?: IMinPerformanceSetting;
        setting7?: IMinPerformanceSetting;
        setting8?: IMinPerformanceSetting;
        setting9?: IMinPerformanceSetting;
        setting10?: IMinPerformanceSetting;
        setting11?: IMinPerformanceSetting;
        setting12?: IMinPerformanceSetting;
    };
    ops: {
        fetch?: IPerformanceOp;
        analyze?: IPerformanceOp;
        superOnInit?: IPerformanceOp;
        renderWebPartStart?: IPerformanceOp;
        renderWebPartEnd?: IPerformanceOp;
        fetch0?: IPerformanceOp;
        fetch1?: IPerformanceOp;
        fetch2?: IPerformanceOp;
        fetch3?: IPerformanceOp;
        fetch4?: IPerformanceOp;
        fetch5?: IPerformanceOp;
        fetch6?: IPerformanceOp;
        fetch7?: IPerformanceOp;
        fetch8?: IPerformanceOp;
        fetch9?: IPerformanceOp;
        fetch10?: IPerformanceOp;
        fetch11?: IPerformanceOp;
        fetch12?: IPerformanceOp;
        analyze0?: IPerformanceOp;
        analyze1?: IPerformanceOp;
        analyze2?: IPerformanceOp;
        analyze3?: IPerformanceOp;
        analyze4?: IPerformanceOp;
        analyze5?: IPerformanceOp;
        analyze6?: IPerformanceOp;
        analyze7?: IPerformanceOp;
        analyze8?: IPerformanceOp;
        analyze9?: IPerformanceOp;
        analyze10?: IPerformanceOp;
        analyze11?: IPerformanceOp;
        analyze12?: IPerformanceOp;
        process0?: IPerformanceOp;
        process1?: IPerformanceOp;
        process2?: IPerformanceOp;
        process3?: IPerformanceOp;
        process4?: IPerformanceOp;
        process5?: IPerformanceOp;
        process6?: IPerformanceOp;
        process7?: IPerformanceOp;
        process8?: IPerformanceOp;
        process9?: IPerformanceOp;
        process10?: IPerformanceOp;
        process11?: IPerformanceOp;
        process12?: IPerformanceOp;
        render0?: IPerformanceOp;
        render1?: IPerformanceOp;
        render2?: IPerformanceOp;
        render3?: IPerformanceOp;
        render4?: IPerformanceOp;
        render5?: IPerformanceOp;
        render6?: IPerformanceOp;
        render7?: IPerformanceOp;
        render8?: IPerformanceOp;
        render9?: IPerformanceOp;
        render10?: IPerformanceOp;
        render11?: IPerformanceOp;
        render12?: IPerformanceOp;
        save0?: IPerformanceOp;
        save1?: IPerformanceOp;
        save2?: IPerformanceOp;
        save3?: IPerformanceOp;
        save4?: IPerformanceOp;
        save5?: IPerformanceOp;
        save6?: IPerformanceOp;
        save7?: IPerformanceOp;
        save8?: IPerformanceOp;
        save9?: IPerformanceOp;
        save10?: IPerformanceOp;
        save11?: IPerformanceOp;
        save12?: IPerformanceOp;
        jsEval?: IPerformanceOp;
    };
}
/**
 * The difference between IMinPerformanceOp and IPerformanceOp is:
 * IMinPerformanceOp is a condensed version of IMinPerformanceOp which is what gets saved in analytics if desired.
 */
export interface IMinPerformanceOp {
    label: string;
    ms: number;
    c?: number;
    a?: number;
}
/**
 * Known labels that could be put in there
 */
export declare type IMinPerformanceSettingLabelSS7 = 'spPageContextInfoClassic' | 'spPageContextInfoModern' | 'forceReloadScripts';
export declare const MinPerformanceSettingLabelSS7: IMinPerformanceSettingLabelSS7[];
/**
 * To extend this type, try
 *  export type IMinPerformanceSettingLabels = IMinPerformanceSettingLabelSS7 & ITypeB ;
 */
export declare type IMinPerformanceSettingLabels = IMinPerformanceSettingLabelSS7 | 'getAllProps';
export declare const MinPerformanceSettingLabels: string[];
export interface IMinPerformanceSetting {
    label: IMinPerformanceSettingLabels;
    value: any;
}
/**
 * IMinPerformance is Baseline common performance informance detail
 * For logging load times - it gets converted to from ILoadPerformance for saving a lighter version for analytics
 */
export interface IMinPerformance {
    mode: DisplayMode;
    getAllProps?: boolean;
    sets: {
        setting0?: IMinPerformanceSetting;
        setting1?: IMinPerformanceSetting;
        setting2?: IMinPerformanceSetting;
        setting3?: IMinPerformanceSetting;
        setting4?: IMinPerformanceSetting;
        setting5?: IMinPerformanceSetting;
        setting6?: IMinPerformanceSetting;
        setting7?: IMinPerformanceSetting;
        setting8?: IMinPerformanceSetting;
        setting9?: IMinPerformanceSetting;
        setting10?: IMinPerformanceSetting;
        setting11?: IMinPerformanceSetting;
        setting12?: IMinPerformanceSetting;
    };
    ops: {
        fetch?: IMinPerformanceOp;
        analyze?: IMinPerformanceOp;
        superOnInit?: IMinPerformanceOp;
        renderWebPartStart?: IMinPerformanceOp;
        renderWebPartEnd?: IMinPerformanceOp;
        afterRenderWebPart?: IMinPerformanceOp;
        fetch0?: IMinPerformanceOp;
        fetch1?: IMinPerformanceOp;
        fetch2?: IMinPerformanceOp;
        fetch3?: IMinPerformanceOp;
        fetch4?: IMinPerformanceOp;
        fetch5?: IMinPerformanceOp;
        fetch6?: IMinPerformanceOp;
        fetch7?: IMinPerformanceOp;
        fetch8?: IMinPerformanceOp;
        fetch9?: IMinPerformanceOp;
        fetch10?: IMinPerformanceOp;
        fetch11?: IMinPerformanceOp;
        fetch12?: IMinPerformanceOp;
        analyze0?: IMinPerformanceOp;
        analyze1?: IMinPerformanceOp;
        analyze2?: IMinPerformanceOp;
        analyze3?: IMinPerformanceOp;
        analyze4?: IMinPerformanceOp;
        analyze5?: IMinPerformanceOp;
        analyze6?: IMinPerformanceOp;
        analyze7?: IMinPerformanceOp;
        analyze8?: IMinPerformanceOp;
        analyze9?: IMinPerformanceOp;
        analyze10?: IMinPerformanceOp;
        analyze11?: IMinPerformanceOp;
        analyze12?: IMinPerformanceOp;
        process0?: IMinPerformanceOp;
        process1?: IMinPerformanceOp;
        process2?: IMinPerformanceOp;
        process3?: IMinPerformanceOp;
        process4?: IMinPerformanceOp;
        process5?: IMinPerformanceOp;
        process6?: IMinPerformanceOp;
        process7?: IMinPerformanceOp;
        process8?: IMinPerformanceOp;
        process9?: IMinPerformanceOp;
        process10?: IMinPerformanceOp;
        process11?: IMinPerformanceOp;
        process12?: IMinPerformanceOp;
        render0?: IMinPerformanceOp;
        render1?: IMinPerformanceOp;
        render2?: IMinPerformanceOp;
        render3?: IMinPerformanceOp;
        render4?: IMinPerformanceOp;
        render5?: IMinPerformanceOp;
        render6?: IMinPerformanceOp;
        render7?: IMinPerformanceOp;
        render8?: IMinPerformanceOp;
        render9?: IMinPerformanceOp;
        render10?: IMinPerformanceOp;
        render11?: IMinPerformanceOp;
        render12?: IMinPerformanceOp;
        save0?: IMinPerformanceOp;
        save1?: IMinPerformanceOp;
        save2?: IMinPerformanceOp;
        save3?: IMinPerformanceOp;
        save4?: IMinPerformanceOp;
        save5?: IMinPerformanceOp;
        save6?: IMinPerformanceOp;
        save7?: IMinPerformanceOp;
        save8?: IMinPerformanceOp;
        save9?: IMinPerformanceOp;
        save10?: IMinPerformanceOp;
        save11?: IMinPerformanceOp;
        save12?: IMinPerformanceOp;
        jsEval?: IMinPerformanceOp;
    };
}
export declare type ILoadPerformanceOps = 'superOnInit' | 'fetch' | 'analyze' | 'jsEval' | 'renderWebPartStart' | 'renderWebPartEnd' | 'fetch0' | 'fetch1' | 'fetch2' | 'fetch3' | 'fetch4' | 'fetch5' | 'fetch6' | 'fetch7' | 'fetch8' | 'fetch9' | 'fetch10' | 'fetch11' | 'fetch12' | 'analyze0' | 'analyze1' | 'analyze2' | 'analyze3' | 'analyze4' | 'analyze5' | 'analyze6' | 'analyze7' | 'analyze8' | 'analyze9' | 'analyze10' | 'analyze11' | 'analyze12' | 'setting0' | 'setting1' | 'setting2' | 'setting3' | 'setting4' | 'setting5' | 'setting6' | 'setting7' | 'setting8' | 'setting9' | 'setting10' | 'setting11' | 'setting12' | 'process0' | 'process1' | 'process2' | 'process3' | 'process4' | 'process5' | 'process6' | 'process7' | 'process8' | 'process9' | 'process10' | 'process11' | 'process12' | 'render0' | 'render1' | 'render2' | 'render3' | 'render4' | 'render5' | 'render6' | 'render7' | 'render8' | 'render9' | 'render10' | 'render11' | 'render12' | 'save0' | 'save1' | 'save2' | 'save3' | 'save4' | 'save5' | 'save6' | 'save7' | 'save8' | 'save9' | 'save10' | 'save11' | 'save12';
export declare const LoadPerformanceOps: ILoadPerformanceOps[];
/**
 * ILoadPerformanceSS7 has specific indicators relavant to SecureScript7
 * For logging load times - for analytics
 */
export interface ILoadPerformanceALVFM extends ILoadPerformance {
}
/**
 * ILoadPerformanceSS7 has specific indicators relavant to SecureScript7
 * For logging load times - for analytics
 */
export interface ILoadPerformanceSS7 extends ILoadPerformance {
    spPageContextInfoClassic: boolean;
    spPageContextInfoModern: boolean;
    forceReloadScripts: boolean;
    analyze: IPerformanceOp;
    jsEval: IPerformanceOp;
}
export interface IHistoryPerformance {
    times: IPerformanceOp[];
}
/**
 * Indicates whether a visual control should display itself for reading or for editing.
 *
 * @public
 */
export declare enum DisplayMode {
    /**
     * The page, control, or editing surface is in a mode intended for reading.  It may have some interactive
     * features, but the authoring controls are not enabled.
     */
    Read = 1,
    /**
     * The page, control, or editing surface is in a mode intended for authoring new content.  It may display
     * editing panels or other controls that are not part of the normal reading experience.
     */
    Edit = 2
}
