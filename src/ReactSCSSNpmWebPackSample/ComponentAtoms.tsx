import * as React from 'react';

import { IPerformanceOp, ILoadPerformance, ILoadPerformanceOps, LoadPerformanceOps, IMinPerformanceSetting } from './IPerformance';

import styles from './tables.module.scss';

export function createPerformanceRows( performance: ILoadPerformance, keysToShow: ILoadPerformanceOps[] ) { //[ 'fetch', 'analyze' ]

    // const { fetch, analyze } = performance;

    const loadRows: any[] = [
      <tr>
        <th>Process</th>
        <th>Mode</th>
        <th>Time</th>
        <th>ms</th>
      </tr>
    ];

    if ( !keysToShow || keysToShow.length === 0 ) { keysToShow = LoadPerformanceOps ; } 
    keysToShow.map( ( part ) => {
      if ( part?.indexOf('setting') >-1 ) {
        /**
         * Element implicitly has an 'any' type because expression of type 'number | unique symbol | "toString" | "charAt" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" | "replace" | "search" | "slice" | "split" | "substring" | ... 32 more ... | "trimEnd"' can't be used to index type '{ setting0?: IMinPerformanceSetting | undefined; setting1?: IMinPerformanceSetting | undefined; setting2?: IMinPerformanceSetting | undefined; ... 9 more ...; setting12?: IMinPerformanceSetting | undefined; }'.
    No index signature with a parameter of type 'number' was found on type '{ setting0?: IMinPerformanceSetting | undefined; setting1?: IMinPerformanceSetting | undefined; setting2?: IMinPerformanceSetting | undefined; ... 9 more ...; setting12?: IMinPerformanceSetting | undefined; }'.ts(7053)
          */

        // This works :)
        const sets: any = performance.sets;
        const thisPart : IMinPerformanceSetting | undefined = sets ? sets[part] : undefined;
        if ( thisPart ) {
          loadRows.push( <tr>
            <td>{ thisPart.label }</td>
            <td>{ `${thisPart.value}` }</td>
          </tr>);
        }
      } else {
        const ops: any = performance.ops;
        const thisPart : IPerformanceOp | undefined = ops ? ops[part] : undefined;

        if ( thisPart ) {
          let time: string = thisPart.startStr;
          loadRows.push( <tr>
            <td>{ thisPart.label }</td>
            <td>{ thisPart.mode === 1 ? 'View' : 'Edit' }</td>
            <td>{ time }</td>
            <td>{ thisPart.ms }</td>
          </tr>);
        }
      }
    });

     return loadRows;

}

// export function createCacheRows( cacheInfo: ICacheInfo ) {
export function createCacheRows( cacheInfo: any ) {

  const loadRows: any[] = [
    <tr>
      <th style={{ minWidth: '150px' }}>Property</th>
      <th style={{ minWidth: '150px' }}>Value</th>
      {/* <th>Time</th>
      <th>ms</th> */}
    </tr>
  ];

  const skipProps: string[] = [ 'wasCached', 'enableHTMLCache', 'EditorName', 'FileRef', 'size' ];
  Object.keys( cacheInfo ).map( part => {

    if ( skipProps.indexOf( part ) < 0 && cacheInfo[ part ] ) {
      loadRows.push( <tr>
        <td>{ part }</td>
        <td>{ cacheInfo[ part ] }</td>
      </tr>);
    }

  });

   return loadRows;

}

/**
 * USED BY:  ALVFM This is used for the visitor panel, not code pane
 * @param performance 
 * @returns 
 */
export function createPerformanceTableVisitor( performance: ILoadPerformance , keysToShow: ILoadPerformanceOps[] ) {

  if ( performance ) {
    // Sample info... this was original straight css
    // const loadSummary = <div className={ 'fps-performance' } style={{ paddingLeft: '15px', paddingTop: '30px'}}>
    //   <div className={ 'fps-header-styles' }>Load Performance:</div>

    const loadSummary = <div className={ styles.fpsPerformance } style={{ paddingLeft: '15px', paddingTop: '30px'}}>
      <div className={ styles.fpsHeaderStyles }>Load Performance:</div>
      {/* Originally:  <div style={{paddingBottom: '8px'}}>forceReloadScripts: { JSON.stringify( performance.forceReloadScripts )}</div> */}
      {/* { !titleAboveTable ? null : <div style={{paddingBottom: '8px'}}>{ titleAboveTable } { JSON.stringify( objAboveTable )}</div> } */}
      <table>
          {/* { buildPerformanceTableRows( fetchInfo.performance ) } */}
          { createPerformanceRows( performance, keysToShow ) }
      </table>
    </div>;

return ( loadSummary );
} else {

  return ( <div></div> );

}


}

/**
 * USED BY:  SecureScript7 loadTable >> loadSummary in \secureScript7\components\SecureScriptVisitorPanel.tsx
 * @param performance 
 * @returns 
 */
 export function createPerformanceTableVisitorXtra( performance: ILoadPerformance, titleAboveTable: string = '', keysToShow: ILoadPerformanceOps[] , objAboveTable: any = null ) {

  const loadSummary = <div className={ styles.fpsPerformance } style={{ paddingLeft: '15px', paddingTop: '30px'}}>
    <div className={ styles.fpsHeaderStyles }>Load Performance:</div>
    {/* Originally:  <div style={{paddingBottom: '8px'}}>forceReloadScripts: { JSON.stringify( performance.forceReloadScripts )}</div> */}
    { !titleAboveTable ? null : <div style={{paddingBottom: '8px'}}>{ titleAboveTable } { JSON.stringify( objAboveTable )}</div> }
    <table>
        {/* { buildPerformanceTableRows( fetchInfo.performance ) } */}
        { createPerformanceRows( performance, keysToShow ) }
    </table>
  </div>;

  return ( loadSummary );

}

/**
 * USED BY: SecureScript7 loadTable >> loadSummary in \secureScript7\components\SecureScript7.tsx
 * @param performance 
 * @param _cacheOnClick 
 * @returns 
 */
export function createPerformanceTableSmall( performance: ILoadPerformance , keysToShow: ILoadPerformanceOps[], _cacheOnClick: any ) {
  const loadSummary = <div className={ styles.fpsPerformance } style={{ paddingLeft: '15px'}}>
    <div className={ styles.fpsTableheading } >Performance Details</div>
    <table>
      {/* { buildPerformanceTableRows( fetchInfo.performance ) } */}
      { createPerformanceRows( performance, keysToShow ) }
      {/* { rows } */}
    </table>
  </div>;

  return ( loadSummary );

}

/**
 * USED BY: SecureScript7 code pane and includes cache info
 * @param cache 
 * @param _cacheOnClick 
 * @returns 
 */
//  export function createCacheTableSmall( cache: ICacheInfo, cacheOnClick: any ) {
 export function createCacheTableSmall( cache: any, _cacheOnClick: any ) {

  const loadSummary = <div className={ styles.fpsPerformance } style={{ paddingLeft: '15px'}}>
    <div  className={ styles.fpsTableheading }>Cache Details</div>
    <table>
      {/* { buildPerformanceTableRows( fetchInfo.performance ) } */}
      { createCacheRows( cache ) }
      {/* { rows } */}
    </table>
  </div>;

  return ( loadSummary );

}