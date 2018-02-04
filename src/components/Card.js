import React, {Component} from 'react';
import classnames from 'classnames';

 export default class Card extends Component {
   constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
   }

   handleClick(e) {
     //console.log('already flipped: ' + this.props.flipped + ' ; value:' + this.props.value + ' ; id: ' + this.props.id);  
     if (!this.props.flipped) {
       this.props.checkMatch(this.props.value, this.props.id);
     }
   }

   render() {
     let classes = classnames(
      'Card',
      {'Card--flipped': this.props.flipped},
      {'Card--matched': this.props.matched}
    );
    let cardValue = this.props.flipped ? this.props.value : '';
    return (
      <div className={classes} onClick={this.handleClick}>
        {cardValue}
      </div>
    );
  }
 }
