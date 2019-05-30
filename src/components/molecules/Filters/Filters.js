import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

export class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParams: {}
    };
  }

  // TODO restriction regexp

  onKeyUpHandler = (filterName, restrictionRegExp, event, transform) => {
    let { value } = event.target;

    if (transform && transform === "toInt") {
      value = parseInt(value);
    }

    this.setState(prevState => ({
      searchParams: {
        ...prevState.searchParams,
        [filterName]: value
      }
    }));
  };

  onChangeHandler = (filterName, event) => {
    let { value } = event.target;

    this.setState(prevState => ({
      searchParams: {
        ...prevState.searchParams,
        [filterName]: value
      }
    }));
  };

  render() {
    const { searchParams } = this.state;
    const { filtersList, onSearch } = this.props;
    return (
      <div className="filter">
        {filtersList.map(filter => {
          let field;
          let transform =
            filter.restriction === "only-numbers" ? "toInt" : undefined;
          let fieldType =
            filter.restriction === "only-letters" ? "input" : "number";
          switch (filter.type) {
            case "input":
              field = (
                <input
                  key={filter.name}
                  className="filter__input"
                  type={fieldType}
                  onKeyDown={() => false}
                  {...filter.htmlRestrictions}
                  name={filter.name}
                  onKeyUp={event =>
                    this.onKeyUpHandler(
                      filter.name,
                      filter.restrictionRegExp,
                      event,
                      transform
                    )
                  }
                />
              );
              break;
            case "select":
              field = (
                <select
                  key="Select"
                  className="filter__select"
                  onChange={event => this.onChangeHandler(filter.name, event)}
                >
                  <option disabled selected>
                    Select
                  </option>
                  {filter.values.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              );
              break;
            default:
              field = <input type="text" />;
              break;
          }
          return field;
        })}
        <button
          className="filter__button"
          onClick={() => {
            onSearch(searchParams);
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

Filters.propTypes = {
  filtersList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequierd,
      values: PropTypes.array,
      type: PropTypes.string.isRequired,
      restriction: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      minRestrictionValue: PropTypes.number,
      maxRestrictionValue: PropTypes.number
    })
  ),
  onSearch: PropTypes.func.isRequired
};

export default Filters;
