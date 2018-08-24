import {IStoreState} from "../types";
import {Dispatch} from "redux";
import {setVisibilityFilter, TodoAction} from "../actions";
import {connect} from "react-redux";
import Link, {ILinkProps} from "../components/Link";

export function mapStateToProps({visibilityFilter}: IStoreState, ownProps: any): ILinkProps {
    return {
        active: ownProps.filter === visibilityFilter,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<TodoAction>, ownProps: any): ILinkProps {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);