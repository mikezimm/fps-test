var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import stylesM from './Molecule.module.scss';
import { SamplePerformance } from './sampleData';
import { createPerformanceTableVisitor } from './ComponentAtoms';
export default class SourcePages extends React.Component {
    constructor(props) {
        super(props);
        //Just so it's initialized as empty fromt he start
        this._performance = SamplePerformance;
        this.state = {};
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            //At some point, this gets updated so this just simulates getting this final data
            this._performance = SamplePerformance;
        });
    }
    componentDidUpdate(_prevProps) { }
    render() {
        const keysToShow = ['fetch0', 'fetch1', 'fetch2', 'fetch3', 'fetch4', 'fetch5', 'fetch6',];
        const PerformanceElement = createPerformanceTableVisitor(this._performance, keysToShow);
        return (React.createElement("div", { className: stylesM.moleculeContainer }, PerformanceElement));
    }
}
