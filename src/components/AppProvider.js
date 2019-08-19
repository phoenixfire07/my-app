import MyContext from './MyContext';

class AppProvider extends Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}