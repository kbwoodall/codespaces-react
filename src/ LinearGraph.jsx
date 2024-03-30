import React from 'react';

class LinearGraph extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.drawGraph();
  }

  componentDidUpdate() {
    this.drawGraph();
  }

  drawGraph() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { data, width, height } = this.props;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw axis
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw data points
    ctx.beginPath();
    ctx.moveTo(0, height / 2 - data[0]);
    for (let i = 1; i < data.length; i++) {
      ctx.lineTo(i * (width / (data.length - 1)), height / 2 - data[i]);
    }
    ctx.strokeStyle = 'blue';
    ctx.stroke();
  }

  render() {
    const { width, height } = this.props;
    return <canvas ref={this.canvasRef} width={width} height={height} />;
  }
}

export default LinearGraph;

