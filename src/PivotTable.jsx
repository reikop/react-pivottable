import React from 'react';
import PropTypes from 'prop-types';
import {PivotData} from './Utilities';
import TableRenderers from './TableRenderers';

/* eslint-disable react/prop-types */
// eslint can't see inherited propTypes!

class PivotTable extends React.PureComponent {
  render() {
    if(!Array.isArray(this.props.rendererName)){
      const Renderer = this.props.renderers[
        this.props.rendererName in this.props.renderers
          ? this.props.rendererName
          : Object.keys(this.props.renderers)[0]
      ];
      return <div className="pvtOutputRows"><Renderer {...this.props} /></div>;
    }
      return this.props.rendererName.map(name => {
        const Renderer = this.props.renderers[name]
        return <div
            key={this.props.renderers[name]}
            className="pvtOutputRows"><Renderer {...this.props} /></div>
      })

  }
}

PivotTable.propTypes = Object.assign({}, PivotData.propTypes, {
  rendererName: PropTypes.arrayOf(PropTypes.string),
  renderers: PropTypes.objectOf(PropTypes.func),
});

PivotTable.defaultProps = Object.assign({}, PivotData.defaultProps, {
  rendererName: ['Table'],
  renderers: TableRenderers,
});

export default PivotTable;
