class GridComponent extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const element = <GridComponent name="Sameer" />;