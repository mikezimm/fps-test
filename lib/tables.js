// import * as React from 'react';
import * as React from 'react';
// import { Icon, IIconProps } from 'office-ui-fabric-react/lib/Icon';
import { LoadPerformanceOps } from './IPerformance';
// require('./styles.css'); //Does not work
// window.require('./styles.css');  //Does not work
// import styles from './'; //Does not work when following guide
export function createPerformanceRows(performance, keysToShow) {
    // const { fetch, analyze } = performance;
    const loadRows = [
        React.createElement("tr", null,
            React.createElement("th", null, "Process"),
            React.createElement("th", null, "Mode"),
            React.createElement("th", null, "Time"),
            React.createElement("th", null, "ms"))
    ];
    if (!keysToShow || keysToShow.length === 0) {
        keysToShow = LoadPerformanceOps;
    }
    keysToShow.map((part) => {
        if ((part === null || part === void 0 ? void 0 : part.indexOf('setting')) > -1) {
            /**
             * Element implicitly has an 'any' type because expression of type 'number | unique symbol | "toString" | "charAt" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" | "replace" | "search" | "slice" | "split" | "substring" | ... 32 more ... | "trimEnd"' can't be used to index type '{ setting0?: IMinPerformanceSetting | undefined; setting1?: IMinPerformanceSetting | undefined; setting2?: IMinPerformanceSetting | undefined; ... 9 more ...; setting12?: IMinPerformanceSetting | undefined; }'.
        No index signature with a parameter of type 'number' was found on type '{ setting0?: IMinPerformanceSetting | undefined; setting1?: IMinPerformanceSetting | undefined; setting2?: IMinPerformanceSetting | undefined; ... 9 more ...; setting12?: IMinPerformanceSetting | undefined; }'.ts(7053)
              */
            // This works :)
            const sets = performance.sets;
            const thisPart = sets[part];
            if (thisPart) {
                loadRows.push(React.createElement("tr", null,
                    React.createElement("td", null, thisPart.label),
                    React.createElement("td", null, `${thisPart.value}`)));
            }
        }
        else {
            const ops = performance.ops;
            const thisPart = ops[part];
            if (thisPart) {
                let time = thisPart.startStr;
                loadRows.push(React.createElement("tr", null,
                    React.createElement("td", null, thisPart.label),
                    React.createElement("td", null, thisPart.mode === 1 ? 'View' : 'Edit'),
                    React.createElement("td", null, time),
                    React.createElement("td", null, thisPart.ms)));
            }
        }
    });
    return loadRows;
}
// export function createCacheRows( cacheInfo: ICacheInfo ) {
export function createCacheRows(cacheInfo) {
    const loadRows = [
        React.createElement("tr", null,
            React.createElement("th", { style: { minWidth: '150px' } }, "Property"),
            React.createElement("th", { style: { minWidth: '150px' } }, "Value"))
    ];
    const skipProps = ['wasCached', 'enableHTMLCache', 'EditorName', 'FileRef', 'size'];
    Object.keys(cacheInfo).map(part => {
        if (skipProps.indexOf(part) < 0 && cacheInfo[part]) {
            loadRows.push(React.createElement("tr", null,
                React.createElement("td", null, part),
                React.createElement("td", null, cacheInfo[part])));
        }
    });
    return loadRows;
}
/**
 * USED BY:  ALVFM This is used for the visitor panel, not code pane
 * @param performance
 * @returns
 */
export function createPerformanceTableVisitor(performance, keysToShow) {
    if (performance) {
        const loadSummary = React.createElement("div", { className: 'fps-performance', style: { paddingLeft: '15px', paddingTop: '30px' } },
            React.createElement("div", { className: 'fps-header-styles' }, "Load Performance:"),
            React.createElement("table", null, createPerformanceRows(performance, keysToShow)));
        return (loadSummary);
    }
    else {
        return (React.createElement("div", null));
    }
}
/**
 * USED BY:  SecureScript7 loadTable >> loadSummary in \secureScript7\components\SecureScriptVisitorPanel.tsx
 * @param performance
 * @returns
 */
export function createPerformanceTableVisitorXtra(performance, titleAboveTable = '', keysToShow, objAboveTable = null) {
    const loadSummary = React.createElement("div", { className: 'fps-performance', style: { paddingLeft: '15px', paddingTop: '30px' } },
        React.createElement("div", { className: 'fps-header-styles' }, "Load Performance:"),
        !titleAboveTable ? null : React.createElement("div", { style: { paddingBottom: '8px' } },
            titleAboveTable,
            " ",
            JSON.stringify(objAboveTable)),
        React.createElement("table", null, createPerformanceRows(performance, keysToShow)));
    return (loadSummary);
}
/**
 * USED BY: SecureScript7 loadTable >> loadSummary in \secureScript7\components\SecureScript7.tsx
 * @param performance
 * @param _cacheOnClick
 * @returns
 */
export function createPerformanceTableSmall(performance, keysToShow, _cacheOnClick) {
    const loadSummary = React.createElement("div", { className: 'fps-performance', style: { paddingLeft: '15px' } },
        React.createElement("div", { className: 'fps-tableheading' }, "Performance Details"),
        React.createElement("table", null, createPerformanceRows(performance, keysToShow)));
    return (loadSummary);
}
/**
 * USED BY: SecureScript7 code pane and includes cache info
 * @param cache
 * @param _cacheOnClick
 * @returns
 */
//  export function createCacheTableSmall( cache: ICacheInfo, cacheOnClick: any ) {
export function createCacheTableSmall(cache, _cacheOnClick) {
    const loadSummary = React.createElement("div", { className: 'fps-performance', style: { paddingLeft: '15px' } },
        React.createElement("div", { className: 'fps-tableheading' }, "Cache Details"),
        React.createElement("table", null, createCacheRows(cache)));
    return (loadSummary);
}
