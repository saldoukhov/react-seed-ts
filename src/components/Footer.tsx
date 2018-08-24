import * as React from "react";
import FilterLink from "../containers/FilterLink";
import {VisibilityFilter} from "../types";

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter={VisibilityFilter.ShowAll}>
            All
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilter.ShowActive}>
            Active
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilter.ShowCompleted}>
            Completed
        </FilterLink>
    </p>);


export default Footer;
