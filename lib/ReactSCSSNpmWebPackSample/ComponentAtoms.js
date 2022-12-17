import * as React from 'react';
import { LoadPerformanceOps } from './IPerformance';
import styles from './tables.modules.scss';
export function createPerformanceRows(performance, keysToShow) {
    // const { fetch, analyze } = performance;
    var loadRows = [
        React.createElement("tr", null,
            React.createElement("th", null, "Process"),
            React.createElement("th", null, "Mode"),
            React.createElement("th", null, "Time"),
            React.createElement("th", null, "ms"))
    ];
    if (!keysToShow || keysToShow.length === 0) {
        keysToShow = LoadPerformanceOps;
    }
    keysToShow.map(function (part) {
        if ((part === null || part === void 0 ? void 0 : part.indexOf('setting')) > -1) {
            /**
             * Element implicitly has an 'any' type because expression of type 'number | unique symbol | "toString" | "charAt" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" | "replace" | "search" | "slice" | "split" | "substring" | ... 32 more ... | "trimEnd"' can't be used to index type '{ setting0?: IMinPerformanceSetting | undefined; setting1?: IMinPerformanceSetting | undefined; setting2?: IMinPerformanceSetting | undefined; ... 9 more ...; setting12?: IMinPerformanceSetting | undefined; }'.
        No index signature with a parameter of type 'number' was found on type '{ setting0?: IMinPerformanceSetting | undefined; setting1?: IMinPerformanceSetting | undefined; setting2?: IMinPerformanceSetting | undefined; ... 9 more ...; setting12?: IMinPerformanceSetting | undefined; }'.ts(7053)
              */
            // This works :)
            var sets = performance.sets;
            var thisPart = sets[part];
            if (thisPart) {
                loadRows.push(React.createElement("tr", null,
                    React.createElement("td", null, thisPart.label),
                    React.createElement("td", null, "".concat(thisPart.value))));
            }
        }
        else {
            var ops = performance.ops;
            var thisPart = ops[part];
            if (thisPart) {
                var time = thisPart.startStr;
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
    var loadRows = [
        React.createElement("tr", null,
            React.createElement("th", { style: { minWidth: '150px' } }, "Property"),
            React.createElement("th", { style: { minWidth: '150px' } }, "Value"))
    ];
    var skipProps = ['wasCached', 'enableHTMLCache', 'EditorName', 'FileRef', 'size'];
    Object.keys(cacheInfo).map(function (part) {
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
        // Sample info... this was original straight css
        // const loadSummary = <div className={ 'fps-performance' } style={{ paddingLeft: '15px', paddingTop: '30px'}}>
        //   <div className={ 'fps-header-styles' }>Load Performance:</div>
        var loadSummary = React.createElement("div", { className: styles.fpsPerformance, style: { paddingLeft: '15px', paddingTop: '30px' } },
            React.createElement("div", { className: styles.fpsHeaderStyles }, "Load Performance:"),
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
export function createPerformanceTableVisitorXtra(performance, titleAboveTable, keysToShow, objAboveTable) {
    if (titleAboveTable === void 0) { titleAboveTable = ''; }
    if (objAboveTable === void 0) { objAboveTable = null; }
    var loadSummary = React.createElement("div", { className: styles.fpsPerformance, style: { paddingLeft: '15px', paddingTop: '30px' } },
        React.createElement("div", { className: styles.fpsHeaderStyles }, "Load Performance:"),
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
    var loadSummary = React.createElement("div", { className: styles.fpsPerformance, style: { paddingLeft: '15px' } },
        React.createElement("div", { className: styles.fpsTableheading }, "Performance Details"),
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
    var loadSummary = React.createElement("div", { className: styles.fpsPerformance, style: { paddingLeft: '15px' } },
        React.createElement("div", { className: styles.fpsTableheading }, "Cache Details"),
        React.createElement("table", null, createCacheRows(cache)));
    return (loadSummary);
}
