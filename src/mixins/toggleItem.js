export default {
    getInitialState() {
        return {
            openedItemId: null
        }
    },

    openItem(id) {
        return (ev) => {
            if (ev) ev.preventDefault();
            this.setState({
                openedItemId: this.state.openedItemId == id ? null : id
            });
        };
    }
}