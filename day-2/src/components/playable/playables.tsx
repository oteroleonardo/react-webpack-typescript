import * as React from "react";
import { Playable } from './playable';
import { IStyleLearntState, IStylesLearntState } from '../../stores/dancingStyles';
import dancingStyle from '../../stores/dancingStyles';

export interface IStylesLearntProps { }

export class ListToPlay extends React.Component<IStylesLearntProps, IStylesLearntState> {
    constructor() {
      super();
      this.state = dancingStyle.getDancingState();
    }
    componentWillMount() { 
      dancingStyle.addChangeListener(this.onChange.bind(this));
    }
    componentWillUnmount() {
      dancingStyle.removeChangeListener(this.onChange.bind(this));
    }
    onChange() {
      this.setState(dancingStyle.getDancingState());
    }
    public render() {
      var styles = this.state.stylesLearnt.map((style: IStyleLearntState, index: number) => {
        return (<Playable href={style.href} song={style.song} style={style.style} key={index}/>);
      });
      return <ul>
              { styles }
             </ul>;
    }
}
