import React, { Component } from 'react';

// +===============+
// |--The old way--|
// +===============+
//
// var Main = React.createClass({
//   propTypes: {},
//
//   getDefaultProps: {},
//
//   getInitialState: function() {
//     return {};
//   },
//
//   componentWillMount: function() {
//     return;
//   },
//
//   componentDidMount: function() {
//     return;
//   },
//
//   componentWillUpdate: function(nextProps, nextState) {
//     return;
//   },
//
//   componentDidUpdate:  function(prevProps, prevState) {
//     return;
//   },
//
//   componentWillReceiveProps: function(nextProps) {
//     return;
//   },
//
//   componentWillUnmount: function() {
//     return;
//   },
//
//   shouldComponentUpdate: function(nextProps, nextState) {
//     return;
//   },
//
//   render: function() {
//     return(
//       <h1>Hello World!</h1>
//     );
//   }
// });
//
// export default Main
//
//
// +========================+
// |--Things that are gone--|
// +========================+
// - getInitialState
// - getDefaultProps
//
// +===============+
// |--The new way--|
// +===============+
//
export default class Main extends Component() {
  constructor(props) {
    super(props);

    this.props = props || {};
    this.state = {};
  }

   componentWillMount: () => {
     return;
   }

   componentDidMount: () => {
     return;
   }

   componentWillUpdate: (nextProps, nextState) => {
     return;
   }

   componentDidUpdate:  (prevProps, prevState) => {
     return;
   }

   componentWillReceiveProps: (nextProps) => {
     return;
   }

   componentWillUnmount: () => {
     return;
   }

   shouldComponentUpdate: (nextProps, nextState) => {
     return;
   }

   render: () => {
     return(
       <h1>Hello World!</h1>
     );
   }
}
