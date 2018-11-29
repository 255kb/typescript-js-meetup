import * as React from 'react';

/** React: a simple container **/

interface ReactContainer {
  className?: string;
}

const ReactContainer: React.FunctionComponent<ReactContainer> = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

/** React: a component with props and state **/

interface ReactProps {
  fetchNumber: () => Promise<number>;
}

interface ReactState {
  number?: number;
}

class ReactApp extends React.Component<ReactProps, ReactState> {

  state: ReactState = {};

  componentDidMount() {
    this.props.fetchNumber().then(number =>
      this.setState({ number })
    );
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        {number || 'Loading...'}
      </div>
    );
  }
}
