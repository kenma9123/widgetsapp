import React, { Component, PropTypes } from 'react';
import List from './list/List';
import ListItem from './list/ListItem';
import { isEqual } from 'lodash/lang';
import classNames from 'classnames';

export default class FormList extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    forms: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    // we need to fetch the forms of the current user
    // console.log('Fetching forms of user', this.props.user);
    this.props.actions.fetchForms(this.props.user);

    // 46 is the section title height
    this.setState({
      height: window.innerHeight
    });
  }

  render() {
    const { forms } = this.props;
    let listContent = 'Loading Forms...';

    if (!forms.isFetching) {
      listContent = (
        <List name="forms" height={this.state.height} scroll={true}>
          {forms.formList.map(listitem => {
            let isSelected = isEqual(listitem, forms.selectedForm);
            let iconClass = classNames('fa', {
              'fa-circle': !isSelected,
              'fa-check-circle': isSelected
            });
            return (
              <ListItem
                key={ listitem.id }
                itemdata={ listitem }
                selected={ isSelected }
                onSelect={ (form) => this.selectForm(form) }>
                <i className={ iconClass }></i>
                <div className="list-item-content">
                  <div className="text">
                    {listitem.title}
                  </div>
                  <div className="date">
                    {listitem.updated_at}
                  </div>
                </div>

              </ListItem>
            );
          })}
        </List>
      );
    }

    return (
      <section className="main form-list" style={{height: '100%'}}>
        { listContent }
      </section>
    );
  }

  selectForm(form) {
    // console.log(form);
    this.props.actions.toggleForm(form);
  }
}
