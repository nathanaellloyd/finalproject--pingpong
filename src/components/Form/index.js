import { connect } from 'react-redux';
import NamesForm from './NamesForm';

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
    }
}

export default connect(mapStateToProps)(NamesForm);