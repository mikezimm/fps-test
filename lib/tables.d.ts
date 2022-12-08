/// <reference types="react" />
import { ILoadPerformance, ILoadPerformanceOps } from './IPerformance';
export declare function createPerformanceRows(performance: ILoadPerformance, keysToShow: ILoadPerformanceOps[]): any[];
export declare function createCacheRows(cacheInfo: any): any[];
/**
 * USED BY:  ALVFM This is used for the visitor panel, not code pane
 * @param performance
 * @returns
 */
export declare function createPerformanceTableVisitor(performance: ILoadPerformance, keysToShow: ILoadPerformanceOps[]): JSX.Element;
/**
 * USED BY:  SecureScript7 loadTable >> loadSummary in \secureScript7\components\SecureScriptVisitorPanel.tsx
 * @param performance
 * @returns
 */
export declare function createPerformanceTableVisitorXtra(performance: ILoadPerformance, titleAboveTable: string | undefined, keysToShow: ILoadPerformanceOps[], objAboveTable?: any): JSX.Element;
/**
 * USED BY: SecureScript7 loadTable >> loadSummary in \secureScript7\components\SecureScript7.tsx
 * @param performance
 * @param _cacheOnClick
 * @returns
 */
export declare function createPerformanceTableSmall(performance: ILoadPerformance, keysToShow: ILoadPerformanceOps[], _cacheOnClick: any): JSX.Element;
/**
 * USED BY: SecureScript7 code pane and includes cache info
 * @param cache
 * @param _cacheOnClick
 * @returns
 */
export declare function createCacheTableSmall(cache: any, _cacheOnClick: any): JSX.Element;
