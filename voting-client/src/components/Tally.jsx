import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="tally">
              <div key={this.props.pair} className="entry">
                <h1>{this.props.pair}</h1>
                <div className="voteCount">
                  {this.props.votes}
                </div>
              </div>
            )}
          </div>
  }
});
